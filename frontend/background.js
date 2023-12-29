

function getNewBackground(){
    var bg = new Trianglify({
        noiseIntensity: 0.25,
        cellsize: 150,
        cellpadding: 0,
        fillOpacity: 20,
        strokeOpacity: 0,
        strokeWidth:50,
        fill:false
      });
      var background = document.querySelector('.background');
    
      var pattern = bg.generate(background.offsetWidth,background.offsetHeight);
    
      background.setAttribute('style', 'background-image: '+pattern.dataUrl);
}
//Generate background on page load
getNewBackground();

