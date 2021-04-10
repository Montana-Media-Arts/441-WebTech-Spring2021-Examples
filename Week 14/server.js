var http = require('http');
var fs = require('fs');
var url = require('url');
const parse = require('node-html-parser').parse;
var fullName = "";

// Create a server
http.createServer(function (request, response) {
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   // Parse the queryString
   const queryObject = url.parse(request.url, true).query;

   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");

   // check to see if we are on the second page or not
   if(pathname == "/index2.html")
   {
      readQueryString(queryObject);
   }
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);

         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {
            'Content-Type': 'text/html'
         });
      } else {

         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {
            'Content-Type': 'text/html'
         });
         // Write the content of the file to response body
         response.write(data.toString());
      }

      // Send the response body 
      response.end();
   });
}).listen(8081);
console.log("Listening on Port 8081");

// this function grabs all the data from the queryString
function readQueryString(queryObject) {
  
   // access all the queryString variables
   if (queryObject != null) {
      let fName = queryObject.firstName;
      let lName = queryObject.lastName;
      if (fName != undefined && lName != undefined) {
         fullName = fName + " " + lName;
         // change the file
         updateFile(fullName);
      }
     
   }
}

// this function updates the html file
function updateFile(fullName)
{
    // open the html file
   fs.readFile('index2.html', 'utf8', (err,html)=>{
      if(err){
         throw err;
      }
   
      // read through the DOM to change it
      let root = parse(html);
      // find the span tag in the file
      let mySpan = root.querySelector('span');
     
      // change the content of 
      mySpan.set_content(fullName);
      
      // create the stream
      var writerStream = fs.createWriteStream("index2.html");
      // Write the data to stream with encoding to be utf8
      writerStream.write(root.toString(), 'UTF8');
      // Mark the end of file
      writerStream.end();
      // Handle stream events --> finish, and error
      writerStream.on('finish', function () {
         console.log("Write completed.");
      });

      writerStream.on('error', function (err) {
         console.log(err.stack);
      });   
    });
 
}