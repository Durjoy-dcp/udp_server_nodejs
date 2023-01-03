var dgram = require("dgram");
var date = require("date-utils");
var dateNow = new Date();
const { send } = require("process");
var server = dgram.createSocket("udp4");
server.on("message", function (msg, rinfo) {
  //   console.log("Receiving request from client ");
  console.log(dateNow);
});
server.bind(8080);
