/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//     } else {
//         x.style.display = "block";
//     }
// }
document.addEventListener("DOMContentLoaded", function(e) {
    e.preventDefault();
    let homeLink = document.getElementById("xaz");
    homeLink.style.backgroundColor = "rgb(255, 196, 0)";
    let preAbout = document.getElementById("about");
    preAbout.style.display = "none";
    // if (1 === 1) {
    //     let text = document.querySelector(".sirius");
    //     text.textContent = "Manal zubeyda";

    // }
    myFunction();
});

function myFunction() {
    setTimeout(function() { alert("Hello, this site is still in development process.\nIf you encounter any issue get us through our social media pages.\nThank you."); }, 3000);
}

// Text animation
const text = document.getElementById("sirius");
const imageP = document.getElementById("p-img");
const imageCap = document.getElementById("p-cap");

function showTime() {
    let today = new Date;
    console.log(today.getDate());
    return today.getDate();
}
// showTime();

if (showTime() === 18) {
    text.innerText = "Manal   zubeyd";
    imageP.setAttribute('src', '../image/rose.jpg');
    imageCap.textContent = "Happy Birthday";
    if (window.screenX <= 351) {
        text.style.fontSize = "large";
    } else {
        text.style.fontSize = "initial";
    }
}
var strText = text.textContent;
var splitText = strText.split("");
text.textContent = "";



for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 500);

function onTick() {
    const spanEl = text.querySelectorAll("span")[char];
    spanEl.classList.add("fade");
    char++;

    // if (char === splitText.length) {
    // complete();
    // return;
    // }
}

// function complete() {
// clearInterval(timer);
// timer = null;
// }


function myfunc() {
    // console.log("...........xfcsdca");
    // var y = document.getElementById("xaz");
    // y.innerHTML = "clicked";
    let about = document.getElementById("about");
    about.style.display = "none";
    let aboutLink = document.getElementById("About");
    aboutLink.style.backgroundColor = "inherit";
    let home = document.getElementById("home");
    home.style.display = "block";
    let homeLink = document.getElementById("xaz");
    homeLink.style.backgroundColor = "rgb(255, 196, 0)";
};

function aboutFunc() {
    console.log("...wow...");
    // var About = document.getElementById("About");
    // About.innerHTML = "clicked";
    let home = document.getElementById("home");
    home.style.display = "none";
    let homeLink = document.getElementById("xaz");
    homeLink.style.backgroundColor = "inherit";
    let about = document.getElementById("about");
    about.style.display = "block";
    let aboutLink = document.getElementById("About");
    aboutLink.style.backgroundColor = "rgb(255, 196, 0)";
};


//myfunc();
// $("#Home").click(function() {
//     alert("...mmm!");
//     $("#home").show();
//     $("#about").hide();
//     console.log("Hello");
//     //$("#donate").hide();
// });
// $("#About").click(function() {
//     $("#about").show();
//     $("#home").hide();
//     //$("#donate").hide();
// });

///////////////////////////////////////
// function myFunction() { 
//     var dots = document.getElementById("dots"); 
//     var moreText = document.getElementById("more"); 
//     var btnText = document.getElementById("myBtn");

//      
//     if (dots.style.display === "none") {    dots.style.display = "inline";   
//         btnText.innerHTML = "Read more";   
//         moreText.style.display = "none";  } else {    dots.style.display = "none";   
//         btnText.innerHTML = "Read less";   
//         moreText.style.display = "inline";  }
// }

// $("#Donate").click(function() {
//     $("#donate").show();
//     $("#about").hide();
//     $("#home").hide();
// });