const fs = require('fs');
const util = require('util');
const chalk = require('chalk');
const path = require('path');

const readdirPromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, filenames) => {
      if (err) {
        reject(err);
      }

      resolve(filenames);
    });
  });
};

// Method #1
// const lstatPromise = (path) => {
//   return new Promise((resolve, reject) => {
//     fs.lstat(path, (err, stats) => {
//       if (err) {
//         reject(err)
//       }

//       resolve(stats)
//     })
//   })
// }

// Method #2
// const lstatPromise = util.promisify(fs.lstat)

// Method #3 | using fs promise API
const { lstat } = fs.promises;

// Approach #1
// fs.readdir(process.cwd(), (err, filenames) => {
//   if (err) {
//     console.log(err)
//     return
//   }

//   // BAD CODE HERE!!!
//   for (const filename of filenames) {
//     fs.lstat(filename, (err, stats) => {
//       if (err) {
//         console.log(err)
//         return
//       }

//       console.log(filename, stats.isFile())
//     })
//   }
//   // BAD CODE COMPLETE!!!
// })

// Approach #2 | Promise run in order
// readdirPromise(process.cwd())
//   .then(async (filenames) => {
//     for (let filename of filenames) {
//       const stats = await lstat(filename)
//       console.log(filename, stats.isFile())
//     }
//   })
//   .catch((err) => {
//     console.error(err)
//   })

// Approach #3
(async function () {
  const targetDir = process.argv[2] || process.cwd();

  try {
    const filenames = await readdirPromise(targetDir);
    const statPromises = filenames.map((filename) => {
      return lstat(path.join(targetDir, filename));
    });

    const allStats = await Promise.all(statPromises);
    allStats.forEach((stats, idx) => {
      if (stats.isFile()) {
        console.log(filenames[idx]);
        return;
      }

      console.log(chalk.bold(filenames[idx]));
    });
  } catch (err) {
    console.error(err);
  }
})();
