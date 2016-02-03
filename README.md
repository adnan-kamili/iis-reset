# iis-reset
Node.js wrapper for Windows iisreset command

_Note: Because this is IIS, you need to execute it using "Run As Administrator"._

## Installation

  npm install iis-reset --save

## Usage
```javascript
  var iisreset = require('iis-reset');
  
  var opts = {server : "myserver", action: "start"};  // actions : start, stop & restart
  
  iisreset(opts).then(function(output){
      console.log("Server started successfully!",output);
  }).catch(function(err){
      console.log(err);
  });
  
  or 
  
  iisreset(opts, function(err, output){
      if(err) {
          console.log(err);
      } else {
          console.log("Server started successfully!",output);
      }
  });
```

## Tests

  npm test

## Release History

* 1.0.0 Initial release