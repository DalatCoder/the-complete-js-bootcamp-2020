const fs = require('fs')
const util = require('util')

const readdirPromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, filenames) => {
      if (err) {
        reject(err)
      }

      resolve(filenames)
    })
  })
}

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
const { lstat } = fs.promises

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

readdirPromise(process.cwd())
  .then(async (filenames) => {
    for (let filename of filenames) {
      const stats = await lstat(filename)
      console.log(filename, stats.isFile())
    }
  })
  .catch((err) => {
    console.error(err)
  })
