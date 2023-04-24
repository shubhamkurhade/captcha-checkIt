const captcha = document.querySelector(".captcha");
const reloadBtn = document.querySelector(".reload-btn");
const checkBtn = document.querySelector(".check-btn");
const inputField = document.querySelector("input");
const StatusUpdate = document.querySelector(".status-text");

// All the possible character set of randomly selecting the captch 
let allCharOfCaptcha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                        'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                        'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                        't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// The function for generating the random captcha each time the page reloads
function getCaptcha(){
    for(let i=0; i<6; i++)
    {
        let randomCaptcha = allCharOfCaptcha[Math.floor(Math.random()*allCharOfCaptcha.length)];
        captcha.innerText += ` ${randomCaptcha}`; // in this backticks are used to add the space before captcha
        //console.log(randomCaptcha);
    }
}
getCaptcha(); // calling the captch function

// reload button working function
reloadBtn.addEventListener("click", ()=>{
    captcha.innerText = ""; // each time the reload button is pressed, the previous captch needds to be cleared off from the place
    getCaptcha();
})

function copyBtnSnackBar() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar");
  
    // Add the "show" class to DIV
    x.className = "show";
  
    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }
function timeOutPrompt(){
    alert("Not a Robot, Human Heart detetcted🫀")
}
checkBtn.addEventListener("click", e=>{
    e.preventDefault(); // preventing the form from submitting 
    StatusUpdate.style.display = "none";
    let inputValue = inputField.value.split('').join(' '); // the input is split and space is added in btwn bcoz we have also added the space while generating the random captcha
    if(inputValue == captcha.innerText){
        //copyBtnSnackBar();
        timeOutPrompt()
        location.reload();
    }else{
        StatusUpdate.style.display = "block";
        setTimeout(function(){StatusUpdate.style.display = "none";}, 2000);
    }
})    
