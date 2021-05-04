// const posts = [
//   { title: `post one`, body: `this is post 1` },
//   { title: `post two`, body: `this is post 2` },
// ];

// // function createPost(post) {
// //   setTimeout(function () {
// //     posts.push(post);
// //   }, 2000);
// // }

// // function getPosts() {
// //   setTimeout(() => {
// //     let output = "";
// //     posts.forEach((post) => {
// //       output += `<li>${post.title}</li>`;
// //     });
// //     document.body.innerHTML = output;
// //   }, 1000);
// // }

// // createPost({ title: "post 3", body: `this is post 3` });

// // getPosts();

// function createPost(post, cb) {
//   setTimeout(function () {
//     posts.push(post);
//     cb();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// createPost({ title: "post 3", body: `this is post 3` }, getPosts);

// function compareToTen(num){
//     return numCheck = new Promise((resolve, reject) => {
//         if (num){
// setTimeout(()=>
// {
//             resolve(num>10);
//         } else {
//             reject("err");
//         }
//     })
// }}

let numbers = /\d/g;

const compareToTen = (num) => {
  setTimeout(() => {
    let numberCheck = new Promise((resolve, reject) => {
      if (numbers.test(num) == true && num > 10) {
        console.log(`${num} is a number greater than 10`);
      } else if (num < 10) {
        reject(`${num} is less than 10, error`);
      } else if (numbers.test(num) != true) {
        reject(`${num} isn't a number!`);
      }
    });
  }, 2000);
};

console.log(compareToTen(11));
console.log(compareToTen("a"));
console.log(compareToTen(9));
