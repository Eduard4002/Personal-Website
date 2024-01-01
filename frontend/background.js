//Add onclick for the button
document.querySelector('.nav-button').addEventListener('click', () => {
    localStorage.setItem("background", "NONE");
    fetch('http://localhost:3000/newBackground', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({width: window.innerWidth, height: window.innerHeight})
      });
      localStorage.setItem("background", "SET");


  });
    //Try to set background
    if(localStorage.getItem("background") != "SET"){
      console.log("Background not set")
      fetch('http://localhost:3000/newBackground', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({width: window.innerWidth, height: window.innerHeight})
      });
      localStorage.setItem("background", "SET");
    }
  
    document.querySelector('.background').style.backgroundImage = 'url(../backend/trianglify.png)';
  

