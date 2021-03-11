
// to use the npm request package.
const request = require('request');
//to 
const fs = require('fs')

// // 2 remove the first 2 lines of command line. 
//

//include package in json file. 
// console.error('error:', error); // Print the error if one occurred
// console.log('statusCode:', response && response.statusCode);
//  // Print the response status code if a response was received
// console.log('body:', body); // Print the HTML for the website homepage.


const fetcher = () => {
  let entry = process.argv.slice(2);
  request(entry[0], (error, response, body) => {
    fs.writeFile(entry[1], body, (err) => {
      if (err)
        console.log(err);
      else {
        console.log(`${entry[0]} downloaded succesfully "\n" `)
      }

    });
  });
};
fetcher()

// fs.writeFile(entry[1], data, (err)) => {

// }



//Implement a small command line node app called fetcher.js which should take a URL as a command-line argument as well as a local file path and download the resource to the specified path.

//you need to install npm init 

//inside use a function fs.writefile (arg[1])