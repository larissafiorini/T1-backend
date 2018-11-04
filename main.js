var DisciplinaController = require('./disciplinaController');


// var http = require('http');
// //create a server object:
// http.createServer(function (req, res, body) {
// //   if (req.url == '/disciplina') {
// //       var disciplinaController = new DisciplinaController();
// //       switch (req.method) {
// //           case 'GET':
// //             disciplinaController.findAll().then((response) => {
// //                 console.log(response);
// //                 res.write(JSON.stringify(response));
// //                 res.end(); //end the response
// //             });
// //             // console.log(DisciplinaController.findAll());
// //             break;
// //           case 'POST': 
// //             res.write('this is a post');
// //             console.log(req.data);
// //             console.log(req.body);
// //             // var reqBody = JSON.parse(req.data);
// //             // console.log(reqBody);
// //             res.end();
// //         default:
// //             return;

// //       }
// //   }
// }).listen(3000, function(){
//  console.log("server start at port 3000"); //the server object listens on port 3000
// });

var app = require('./app');

const port = 3000;
app.listen(port, () => {
  console.info(`server started on port ${port}`);
});
