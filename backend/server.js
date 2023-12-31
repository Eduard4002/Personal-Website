
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;
const trianglify = require("trianglify");
const fs = require("fs");
app.use(cors());
app.use(express.json());

app.post('/newBackground', (req, res) => { 
 const width = req.body.width || 1920;
  const height = req.body.height || 1080;

  console.log(req.body.width, req.body.height);
  console.log("new background requested");
  getNewBackground(width, height);
  // send the file path as the response 
  
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});



function getNewBackground(_width, _height) { 

  const canvas = trianglify({ width: _width, height: _height, }).toCanvas();

  const file = fs.createWriteStream("trianglify.png"); canvas.createPNGStream().pipe(file);
  return file; 
}
//Return filepath to background console.log(file); return file; }
module.exports = getNewBackground;
