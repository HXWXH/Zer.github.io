const backTop = document.getElementById("backTop");
const aboutMeImg = document.getElementById("aboutMeImg");
const aboutText = document.getElementById("aboutText");
const workTitle = document.getElementById("workTitle");
const workBox = document.getElementById("workBox");
const workBox2 = document.getElementById("workBox2");
const footer = document.getElementById("footer");
const skillTop = document.getElementById("skillTop");
const skillDown = document.getElementById("skillDown");

// To top when Web onload 


window.onload=function(){
    if(document.body.scrollTop>0){
        console.log(1);
        window.scrollTo(0,-1);
        document.body.scrollTop=0;
    }
    window.scrollTo(0,-1);
    document.body.scrollTop=0;
}

// Back to top button evemtlistener scroll
addEventListener('scroll', () => {
    if (window.scrollY > 850) {
        backTop.style.transition = ".3s";
        backTop.style.visibility = "visible";
    }else{
        backTop.style.visibility = "hidden";
    }
});


// About container eventlistener scroll
addEventListener('scroll', () => {
    if (window.scrollY > 650 && window.scrollY < 1200) {
        aboutMeImg.style.visibility = "visible";
        aboutMeImg.style.opacity = "1";
        aboutMeImg.style.transform = "translate(50px, 0px)";
        aboutMeImg.style.transition = "1.5s";

        aboutText.style.visibility = "visible";
        aboutText.style.opacity = "1";
        aboutText.style.transform = "translate(-50px, 0px)";
        aboutText.style.transition = "1.5s";
    }
});


// skill section eventListener scroll
addEventListener('scroll', () => {
    if (window.scrollY > 1200 && window.scrollY < 2450) {
        skillTop.style.visibility = "visible";
        skillTop.style.opacity = "1";
        skillTop.style.transform = "translate(-250px, 0px)";
        skillTop.style.transition = "1.5s";

        skillDown.style.visibility = "visible";
        skillDown.style.opacity = "1";
        skillDown.style.transform = "translate(250px, 0px)";
        skillDown.style.transition = "2s";
    }
})

// Work Section eventlistener scroll
addEventListener('scroll', () => {
    if (window.scrollY > 2450 && window.scrollY < 3150) {
        workTitle.style.visibility = "visible";
        workTitle.style.opacity = "1";
        workTitle.style.transform = "translate(0px, -50px)";
        workTitle.style.transition = "1.5s";
        

        setTimeout(() => {
        workBox.style.visibility = "visible";
        workBox.style.opacity = "1";
        workBox.style.transform = "translate(0px, -50px)";
        workBox.style.transition = "1.5s";
        workBox2.style.visibility = "visible";
        workBox2.style.opacity = "1";
        workBox2.style.transform = "translate(0px, -50px)";
        workBox2.style.transition = "1.5s";
        }, 500)
    }
});


// footer eventListener scroll
addEventListener('scroll', () => {
    if (window.scrollY > 3150) {
        footer.style.visibility = "visible";
        footer.style.opacity = "1";
        footer.style.transition = "3.5s";
    }
});

// Try to touch
function changeText(e) {
    e.textContent = "入取我吧~@W@";
}
