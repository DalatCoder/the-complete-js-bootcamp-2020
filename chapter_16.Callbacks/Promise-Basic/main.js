// const willGetMyDog = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const rand = Math.random();

//     if (rand < 0.5) {
//       resolve();
//     }

//     reject();
//   }, 1000);
// });

const makeDogPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();

      if (rand < 0.5) {
        resolve();
      }

      reject();
    }, 1000);
  });
};

const onSuccess = () => {
  const title = document.createElement("h1");
  title.innerText = "Yay! I get my dog!";
  document.body.appendChild(title);
};

const onFailure = (err) => {
  const title = document.createElement("h1");
  title.innerText = "Cry Cry!";
  document.body.appendChild(title);
};

// willGetMyDog.then(onSuccess);
// willGetMyDog.catch(onFailure);

makeDogPromise().then(onSuccess).catch(onFailure);
