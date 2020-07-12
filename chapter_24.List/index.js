const fs = require('fs')

fs.readdir(process.cwd(), (err, filenames) => {
  if (err) {
    console.log(err)
    return
  }

  // BAD CODE HERE!!!
  for (const filename of filenames) {
    fs.lstat(filename, (err, stats) => {
      if (err) {
        console.log(err)
        return
      }

      console.log(filename, stats.isFile())
    })
  }
  // BAD CODE COMPLETE!!!
})
