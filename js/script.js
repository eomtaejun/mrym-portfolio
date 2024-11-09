// progress bar
let progressBar=document.querySelector("header .tj-progressWrap .tj-progressBar");

window.addEventListener("scroll", function(){
    let scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    let scrollPercentage=(scrollTop/scrollHeight)*100;

    progressBar.style.width=scrollPercentage+"%";
});

// top button
const top_btn=document.querySelector("#top-btn");

function top_btn_display(){
    if(document.documentElement.scrollTop<570) top_btn.style.display="none";
    else top_btn.style.display="block"
}
window.addEventListener("scroll", top_btn_display);
window.addEventListener("load", top_btn_display);

top_btn.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// header background
const headerBackground=document.querySelector("header .tj-headerInnerWrap");
const progressWrap=document.querySelector("header .tj-progressWrap");
const headerTexts=document.querySelectorAll("header .tj-headerText");

const headerNavBtn=document.querySelector("header .tj-headerInnerWrap .navbar-toggler");

function headerStyle(){
    const main_sectionHeight=document.querySelector(".tj-Main-fullWrap").clientHeight;
    if(document.documentElement.scrollTop<main_sectionHeight-80){
        headerBackground.style.backgroundColor="transparent";
        progressWrap.style.backgroundColor="rgba(248, 248, 248, 0.1)";
        headerTexts.forEach(text=>{
            text.classList.toggle("tj-headerText-scrollEffect", false);
        });
        headerNavBtn.style.opacity="0.6";
    }
    else{
        headerBackground.style.backgroundColor="#0d0d0d";
        progressWrap.style.backgroundColor="#f3f3f3";
        headerTexts.forEach(text=>{
            text.classList.toggle("tj-headerText-scrollEffect", true);
        });
        headerNavBtn.style.opacity="1";
    }
}
window.addEventListener("scroll", headerStyle);
window.addEventListener("load", headerStyle);

// main button
const main_btn=document.querySelector(".tj-mainInnerWrap .tj-main-btn");

main_btn.addEventListener("click", function(){
    const main_sectionHeight=document.querySelector(".tj-Main-fullWrap").clientHeight;

    window.scrollTo({
        top: main_sectionHeight,
        behavior: "smooth"
    });
});

// Future button
const FutureBtn=document.querySelector(".tj-FutureInnerWrap>button[type='button']");
const FutureBtnText=document.querySelector(".tj-FutureInnerWrap>button[type='button']>i");
const contentBox=document.querySelector(".tj-FutureInnerWrap>.tj-contentsWrap");
let contentBox_open=false;

FutureBtn.addEventListener("click", function(){
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

// Personality&Value content title
const tab_P_btn=document.querySelector(".tj-PersonalityValueInnerWrap>.tj-contentsWrap .tj-tabs .tj-tab_P-btn");
const tab_V_btn=document.querySelector(".tj-PersonalityValueInnerWrap>.tj-contentsWrap .tj-tabs .tj-tab_V-btn");
const tab_P=document.querySelector(".tj-PersonalityValueInnerWrap>.tj-contentsWrap .tj-elementsWrap .tj-tab_P");
const tab_V=document.querySelector(".tj-PersonalityValueInnerWrap>.tj-contentsWrap .tj-elementsWrap .tj-tab_V");

tab_P_btn.addEventListener("click", function(){
    tab_P_btn.classList.toggle("tj-active", true);
    tab_V_btn.classList.toggle("tj-active", false);

    tab_P.style.opacity="1";
    tab_V.style.opacity="0";
});
tab_V_btn.addEventListener("click", function(){
    tab_V_btn.classList.toggle("tj-active", true);
    tab_P_btn.classList.toggle("tj-active", false);

    tab_V.style.opacity="1";
    tab_P.style.opacity="0";
});