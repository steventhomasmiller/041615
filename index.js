var fs = require("fs");
var async = require("async");
var path = require("path");
var map = require("map");
//var waterfall = require("run-waterfall");

fs.readdir("files", function(err, files){
  console.log(files);
  async.each(files, function(name, callback) {
    fs.readFile("needle", "utf8" function(err, data) {
  });

})





// async.waterfall([
//   function(c) {
//     console.log(1);
//     wait(1, c);
//   },
//   function(data, c) {
//     console.log(2);
//     wait(2, c);
//   },
//   function(data, c) {
//     console.log(3);
//     wait(3, c);
//   }
// ], function(){
//   console.log("all done!");
// })
