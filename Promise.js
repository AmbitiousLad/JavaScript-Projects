// const promise1 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Data Received")
//         resolve()
//     }, 1000)
// })

// promise1.then(function(){
//     console.log("Promise Consumed");

// })


// const promise2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Gotcha!")
//         resolve({ username: "Sanket", email: "routsanket00@gmail.com" })
//     })
// })

// promise2.then((user) => {
//     console.log("Data received")
//     console.log(user);
// })

// const promise3 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Data Fetched");
//         // resolve({username:"Sanket",email:"routsanket00@gmail.com"})
//         reject("ERROR")
//     })
// })

// async function getUsers() {
//     try {
//         const response = await promise3
//         console.log(response);
//     }
//     catch (error) {
//         console.log(error);
//     }
// }

// getUsers()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         const userList =  document.getElementById('userList')      
//         data.forEach(user => {
//                 const listElement = document.createElement('li')
//                 listElement.textContent = `Name: ${user.name} , Email: ${user.email},    Id:${user.id}`
//                 userList.appendChild(listElement)
//             });
//     }
//     catch (error) {
//         console.log(error);
//     }
// }



const response = await fetch('https://jsonplaceholder.typicode.com/users')
const data = await response.json()
const userList = document.getElementById('userList')
 data.forEach((user)=>{
    const list = userList.getElementsByTagName('li')
    list.textContent = `Name: ${user.name}, Email: ${user.email}, Id: ${user.id}`
})


getAllUsers()