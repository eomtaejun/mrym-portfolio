// header
// progress bar
let progressBar=document.querySelector("header .tj-progressWrap .tj-progressBar");

window.addEventListener("scroll", ()=>{
    let scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrollPercentage=(scrollTop/scrollHeight)*100;

    progressBar.style.width=scrollPercentage+"%";
});
// //progress bar

// header background
const headerBackground=document.querySelector("header .tj-headerInnerWrap");
const progressWrap=document.querySelector("header .tj-progressWrap");
const headerText=document.querySelectorAll("header .tj-headerText");

window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop<500){
        headerBackground.style.backgroundColor="transparent";
        progressWrap.style.backgroundColor="rgba(243, 243, 243, 0.2)";
        headerText.forEach(element=>{
            element.classList.toggle("tj-headerText-scrollEffect", false);
        });
        // headerText.style.color="#1c1c1c";
    }
    else{
        headerBackground.style.backgroundColor="#aaa";
        progressWrap.style.backgroundColor="#f3f3f3";
        headerText.forEach(element=>{
            element.classList.toggle("tj-headerText-scrollEffect", true);
        });
        // headerText.style.color="#fbfbfb";
    }
});

// Future button
const FutureBtn=document.querySelector(".tj-FutureInnerWrap>button[type='button']");
const FutureBtnText=document.querySelector(".tj-FutureInnerWrap>button[type='button']>i");
const contentBox=document.querySelector(".tj-FutureInnerWrap>.tj-content-box");
let contentBox_open=false;

FutureBtn.addEventListener("click", ()=>{
    if(contentBox_open===false){
        contentBox.style.maxHeight="500px";
        FutureBtnText.style.transform="rotate(-180deg)";
        contentBox_open=true;
    }
    else{
        contentBox.style.maxHeight="100px";
        FutureBtnText.style.transform="rotate(0deg)";
        contentBox_open=false;
    }
});