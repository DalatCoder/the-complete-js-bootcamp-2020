// // const willGetMyDog = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     const rand = Math.random();

// //     if (rand < 0.5) {
// //       resolve();
// //     }

// //     reject();
// //   }, 1000);
// // });

// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();

//       if (rand < 0.5) {
//         resolve();
//       }

//       reject();
//     }, 1000);
//   });
// };

// const onSuccess = () => {
//   const title = document.createElement("h1");
//   title.innerText = "Yay! I get my dog!";
//   document.body.appendChild(title);
// };

// const onFailure = (err) => {
//   const title = document.createElement("h1");
//   title.innerText = "Cry Cry!";
//   document.body.appendChild(title);
// };

// // willGetMyDog.then(onSuccess);
// // willGetMyDog.catch(onFailure);

// makeDogPromise().then(onSuccess).catch(onFailure);

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const rand = Math.random();
//       if (rand < 0.5) {
//         resolve({ message: "success", status: "200", data: { data: "2NTH" } });
//       }

//       reject({ message: "fail", status: "404" });
//     }, 1500);
//   });
// };

// fakeRequest("2nth.com")
//   .then((response) => {
//     console.log("Request success!");
//     console.log(response);
//   })
//   .catch((response) => {
//     console.log("Request failure!");
//     console.log(response);
//     const { message, status } = response;
//     console.log(`Message: ${message}`);
//     console.log(`Code: ${status}`);
//   });

//This is a FAKE Http Request Function
//It takes 1 second to resolve or reject the promise, depending on the url that is passed in
const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ message: "success", status: 200, data }); //resolve with a value!
      } else {
        reject({ message: "fail", status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};

// fakeRequest("/users")
//   .then((res) => {
//     console.log(res);
//     const { id } = res.data[0];

//     fakeRequest(`/users/${id}`)
//       .then((res) => {
//         console.log(res);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch();

// Chaining promises
fakeRequest("/users")
  .then((users) => {
    console.log(users.data);
    const { id } = users.data[0];

    return fakeRequest(`/users/${id}`);
  })
  .then((user) => {
    console.log(user.data);
    const { topPostId: postId } = user.data;

    return fakeRequest(`/posts/${postId}`);
  })
  .then((post) => {
    console.log(post.data);
  })
  .catch((err) => {
    console.log(err);
  });

const fakeRequestCB = (url, response, error) => {
  const pages = {
    "/users": [
      { id: 1, username: "Bilbo" },
      { id: 5, username: "Esmerelda" },
    ],
    "/users/1": {
      id: 1,
      username: "Bilbo",
      upvotes: 360,
      city: "Lisbon",
      topPostId: 454321,
    },
    "/users/5": {
      id: 5,
      username: "Esmerelda",
      upvotes: 571,
      city: "Honolulu",
    },
    "/posts/454321": {
      id: 454321,
      title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
    },
    "/about": "This is the about page!",
  };
  const data = pages[url];

  if (data) {
    if (response) return response({ message: "success", status: 200, data });
  } else {
    if (error) return error({ message: "fail", status: 404 });
  }
};

fakeRequestCB(
  "/users",
  (res) => {
    const { id } = res.data[0];
    console.log(res.data);

    fakeRequestCB(
      `/users/${id}`,
      (res) => {
        const { topPostId: postId } = res.data;
        console.log(res.data);

        fakeRequestCB(
          `/posts/${postId}`,
          (res) => {
            console.log(res.data);
          },
          (err) => {
            console.log(`Error: ${err.data}`);
          }
        );
      },
      (err) => {
        console.log(`Error: ${err.data}`);
      }
    );
  },
  (err) => {
    console.log(`Error: ${err.data}`);
  }
);
