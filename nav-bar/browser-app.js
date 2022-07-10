const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

navToggle.addEventListener('click', function () {
  links.classList.toggle('show-links')
})


// let Person = {
//   firstname : "Sunny",
//   lastname : "Raj"
// }

// const printName = function(...args) {
//   args.map((v,i,ar) => {
//     console.log(i+1 +" => "+v )
//   })
// console.log(this.firstname+","+this.lastname)
// }
// // console.log(printName)
// // let pn = printName.bind(Person)
// // pn()

// Function.prototype.mybind = function(...args){
//   let self = this
//   params = args.slice(1)
//   return function(...args2){
//     self.apply(args[0],[...params,...args2])
//   }
// }

// let zn = printName.mybind(Person,"Ranchi","Pune")
// zn("Jharkhand","India")



// console.log(k)
// let k = 10