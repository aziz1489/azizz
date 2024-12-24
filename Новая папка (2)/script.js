const input = document.getElementById('emailInput');
const body = document.body;


const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


setInterval(function () {
    console.log("Checking email...");
    const email = input.value; 
    const isValid = regEx.test(email); 

   
    if (email === '') {
        body.style.backgroundColor = "white";
       
    } else if (!isValid) {
        body.style.backgroundColor = "red";
      
    } else {
        body.style.backgroundColor = "green";
       
    }
}, 1000);