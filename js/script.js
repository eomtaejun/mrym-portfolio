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
const main_btn=document.querySelector(".tj-mainInnerWrap .tj-main-btnWrap");

main_btn.addEventListener("click", function(){
    const main_sectionHeight=document.querySelector(".tj-Main-fullWrap").clientHeight;

    window.scrollTo({
        top: main_sectionHeight,
        behavior: "smooth"
    });
});

// AboueMe section
const btn_up=document.querySelector(".tj-AboutMeInnerWrap .tj-btnWrap .tj-btn-up");
const btn_down=document.querySelector(".tj-AboutMeInnerWrap .tj-btnWrap .tj-btn-down");

const AboutMeContentWrap=document.querySelector(".tj-AboutMeInnerWrap>.tj-contentsWrap");
const contents=AboutMeContentWrap.children; // contentsWrap 안의 모든 자식 요소 가져오기
let boolean=false; // 연속 스크롤 방지 변수
let count=0; // 현재 콘텐츠 인덱스

btn_up.addEventListener("click", function(){
    if(boolean) return;
    boolean=true;

    contents[count].classList.toggle("tj-active", false);
    count = Math.max(0, count - 1); // count를 감소시키되, 0 이하로 내려가지 않도록 설정
    contents[count].classList.toggle("tj-active", true);
    AboutMeContentWrap.scrollBy({
        top: -100,
        behavior: "smooth"
    });

    setTimeout(function(){
        boolean=false;
    }, 200);
});

btn_down.addEventListener("click", function(){
    if(boolean) return;
    boolean=true;

    contents[count].classList.toggle("tj-active", false);
    count = Math.min(contents.length - 1, count + 1); // count를 증가시키되, 마지막 인덱스를 넘지 않도록 설정
    contents[count].classList.toggle("tj-active", true);
    AboutMeContentWrap.scrollBy({
        top: 100,
        behavior: "smooth"
    });

    setTimeout(function(){
        boolean=false;
    }, 200);
});

// chat gpt
window.addEventListener("load", function(){
    count=0;
    AboutMeContentWrap.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

AboutMeContentWrap.addEventListener("wheel", function(event){
    // 연속 스크롤 방지
    if (boolean) return;
    boolean=true;

    // 현재 콘텐츠의 스타일 초기화
    contents[count].classList.toggle("tj-active", false);

    // 위로 스크롤한 경우
    if (event.deltaY<0){
        count=Math.max(0, count-1); // count를 감소시키되, 0 이하로 내려가지 않도록 설정
    }
    // 아래로 스크롤한 경우
    else if (event.deltaY>0){
        count=Math.min(contents.length-1, count+1); // count를 증가시키되, 마지막 인덱스를 넘지 않도록 설정
    }

    // 현재 콘텐츠에 active 클래스나 스타일 적용
    contents[count].classList.toggle("tj-active", true);

    // 컨테이너를 부드럽게 스크롤
    AboutMeContentWrap.scrollBy({
        top: event.deltaY<0 ? -100:100,
        behavior: "smooth"
    });

    // 200ms 후에 boolean 값을 초기화
    setTimeout(function(){
        boolean = false;
    }, 200);

    // 기본 스크롤 동작 방지
    // event.preventDefault();
});


// 이벤트 작동 막기
AboutMeContentWrap.addEventListener("wheel", (event)=>event.preventDefault());


// Future button
const FutureBtn=document.querySelector(".tj-FutureInnerWrap>button[type='button']");
const FutureBtnText=document.querySelector(".tj-FutureInnerWrap>button[type='button']>i");
const contentBox=document.querySelector(".tj-FutureInnerWrap>.tj-contentsWrap");
let contentBox_open=false;

FutureBtn.addEventListener("click", function(){
    if(contentBox_open===false){
        contentBox.style.maxHeight="530px";
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