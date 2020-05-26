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

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();
      if (rand < 0.5) {
        resolve({ message: "success", status: "200", data: { data: "2NTH" } });
      }

      reject({ message: "fail", status: "404" });
    }, 1500);
  });
};

fakeRequest("2nth.com")
  .then((response) => {
    console.log("Request success!");
    console.log(response);
  })
  .catch((response) => {
    console.log("Request failure!");
    console.log(response);
    const { message, status } = response;
    console.log(`Message: ${message}`);
    console.log(`Code: ${status}`);
  });
