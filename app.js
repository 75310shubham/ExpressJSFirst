// const http = require("http");
// function handleRequest(request, response) {
//   if (request.url === "/currenttime") {
//     response.statusCode = 200;
//     response.end("<h1>" + new Date().toISOString() + "</h1>");
//   } else if (request.url === "/") response.statusCode = 200;
//   response.end("<h1>Ek baar phir, modi sarkaar</h1>");
// }
// const server = http.createServer(handleRequest);
// server.listen(3000);

// // ExpessJS

// const express = require("express");
// const app = express();

// app.get("/currenttime", function (req, res) {
//   res.send("<h1>" + new Date().toISOString() + "</h1>");
// });

// app.get("/", function (req, res) {
//     res.send("<h1>Ek baar phir, modi sarkaar</h1>");
//   });

// app.listen(3000);

// // ExpessJS with Form

// const express = require("express");
// const app = express();

// app.use(express.urlencoded({extended:false}))

// app.get("/currenttime", function (req, res) {
//   res.send("<h1>" + new Date().toISOString() + "</h1>");
// });

// app.get("/", function (req, res) {
//   res.send(
//     '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</butoon></form>'
//   );
// });

// app.post("/store-user", function (req, res) {
//     const userName = req.body.username;
//     console.log(userName);
//     res.send('<h1>UserName Stored</h1>');
// });
// app.listen(3000);

// // ExpessJS with Form submision and data storing

// const fs = require('fs');
// const path = require('path');

// const express = require("express");
// const app = express();

// app.use(express.urlencoded({extended:false}))

// app.get("/currenttime", function (req, res) {
//   res.send("<h1>" + new Date().toISOString() + "</h1>");
// });

// app.get("/", function (req, res) {
//   res.send(
//     '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</butoon></form>'
//   );
// });

// app.post("/store-user", function (req, res) {
//     const userName = req.body.username;
//     console.log(userName);

//     const filePath = path.join(__dirname,'data','users.json');
//     const fileData = fs.readFileSync(filePath);
//     const existingUsers = JSON.parse(fileData);
//     existingUsers.push(userName);
//     fs.writeFileSync(filePath, JSON.stringify(existingUsers));

//     res.send('<h1>UserName Stored</h1>');
// });


// app.listen(3000);


// ExpessJS with Form submision and data storing also displaying in browser 

// const fs = require('fs');
// const path = require('path');

// const express = require("express");
// const app = express();

// app.use(express.urlencoded({extended:false}))

// app.get("/currenttime", function (req, res) {
//   res.send("<h1>" + new Date().toISOString() + "</h1>");
// });

// app.get("/", function (req, res) {
//   res.send(
//     '<form action="/store-user" method="POST"><label>Your Name</label><input type="text" name="username"><button>Submit</butoon></form>'
//   );
// });

// app.post("/store-user", function (req, res) {
//     const userName = req.body.username;
//     console.log(userName);

//     const filePath = path.join(__dirname,'data','users.json');
//     const fileData = fs.readFileSync(filePath);
//     const existingUsers = JSON.parse(fileData);
//     existingUsers.push(userName);
//     fs.writeFileSync(filePath, JSON.stringify(existingUsers));

//     res.send('<h1>UserName Stored</h1>');
// });

// // app.get('/users',function (req, res){
// //   const filePath = path.join(__dirname,'data','users.json');
// //     const fileData = fs.readFileSync(filePath);
// //     const existingUsers = JSON.parse(fileData);

// //     res.send(existingUsers);
// // });

// app.get('/users',function (req, res){
//   const filePath = path.join(__dirname,'data','users.json');
//     const fileData = fs.readFileSync(filePath);
//     const existingUsers = JSON.parse(fileData);
    
//     let responseData= '<ul>';
//     for(const user of  existingUsers ){
//       responseData += '<li>'+ user + '</li>';
//     }
//     responseData +='</ul>';
    
//     res.send(responseData);
// }); 

// app.listen(3000);
