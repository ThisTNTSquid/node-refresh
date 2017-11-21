const axios = require("axios");
const fs = require('fs')
const path = require('path')
const config=require('../config')

var suc = 0;
var fai = 0;
setInterval(main, 1);

function main() {
  axios
    .get(
      config.url
    )
    .then(function(response) {
      suc++;
      console.log(suc + "/" + (suc + fai) + " >> Request OK");
      // console.log("-------------")
    })
    .catch(function(error) {
      fai++;
      console.log(
        fai +
          "/" +
          (suc + fai) +
          " >> Error: " +
          error.code
      );
      // process.exit(0)
      // fs.writeFile(path.join(__dirname,"error.json"),JSON.stringify({...error}),function(err){
      //   if (err){
      //     console.log(err)
      //   }
      // })
    });
}
