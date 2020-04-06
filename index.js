const cowsay = require('cowsay')

// eslint-disable-next-line no-cosole

const cow = cowsay.say({
  text: "Objective Complete",
  e: '**',
  T: 'L'

})

console.log(cow)