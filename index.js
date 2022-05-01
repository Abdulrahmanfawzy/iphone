var nav = document.getElementById('nav'),
    icon = document.getElementById('icon');
    bodyItem = document.querySelector("body");
icon.onclick = function(){
    if(nav.style.right == '0%'){
        nav.style.right = '-50%'
    }else{
        nav.style.right = '0%'
    }
}


var video = document.getElementById('video'),
    btn = document.getElementById('btn');
btn.onclick = function(){
    if(video.paused){
        video.play();
        btn.innerHTML = '<i class="far fa-pause-circle"></i>'
    }else{
        video.pause();
        btn.innerHTML = '<i class="far fa-play-circle"></i>'
    }
}


function myChanger(){
    const 
        colorGreen = document.querySelector(".green"),
        changeGreen = document.querySelectorAll('.change'),
        greenImage = document.querySelector(".greenImage"),
        greenImage2 = document.querySelector(".greenImage2"),
        greenImage3 = document.querySelector(".greenImage3"),
        greenImage4 = document.querySelector(".greenImage4"),
        greenImage5 = document.querySelector(".greenImage5"),
        greenImage6 = document.querySelector(".greenImage6");
        for(var i = 0; i < changeGreen.length; i++){
            if(changeGreen[i].style.background == "#2e2e3a" || changeGreen[i].style.background == "#3e1921"){
                changeGreen[i].style.background = "#0c3139"
            }else{
                changeGreen[i].style.background = "#0c3139"
            }
        }
        greenImage.src = "PIC/blue_finish__calta2yqeqoi_large_2x.jpg";
        greenImage2.src = "PIC/blue_ceramic_shield__coeb6blazh36_large_2x.jpg";
        greenImage3.src = "PIC/blue_iphone_13__cyh05gd4qic2_large_2x%20(1).jpg";
        greenImage4.src = "PIC/blue_iphone_13_mini__gmhvsb6wu6ie_large_2x.jpg";
        greenImage5.src = "PIC/blue_flat_edge__opkoocld04am_large_2x.jpg";
        greenImage6.src = "PIC/water_resistant_blue__c0j14e4usxsi_large_2x.jpg";
}
function myChanger2(){
    let colorWhite = document.querySelector(".white"),
        changeWhite = document.querySelectorAll('.change'),
        greenImage = document.querySelector(".greenImage"),
        greenImage2 = document.querySelector(".greenImage2"),
        greenImage3 = document.querySelector(".greenImage3"),
        greenImage4 = document.querySelector(".greenImage4"),
        greenImage5 = document.querySelector(".greenImage5"),
        greenImage6 = document.querySelector(".greenImage6");
        for(var i = 0; i < changeWhite.length; i++){
            if(changeWhite[i].style.background == "#0c3139" || changeWhite[i].style.background == "#3e1921"){
                changeWhite[i].style.background = "#2e2e3a"
            }else{
                changeWhite[i].style.background = "#2e2e3a"
            }
        } 
        greenImage.src = "PIC/starlight_finish__e4on9og9dr42_large_2x.jpg";
        greenImage2.src = "PIC/starlight_ceramic_shield__cguqzcysb64i_large_2x.jpg";
        greenImage3.src = "PIC/starlight_iphone_13__bzg83hx84dde_large_2x.jpg"; 
        greenImage4.src = "PIC/starlight_iphone_13_mini__gjth145wkkuq_large_2x.jpg"; 
        greenImage5.src = "PIC/starlight_flat_edge__fiwihrjr90yi_large_2x.jpg"; 
        greenImage6.src = "PIC/water_resistant_starlight__cb8pejfi5bma_large_2x.jpg"; 
        
}
function myChanger3(){
    let colorWhite = document.querySelector(".Rose"),
        changeWhite = document.querySelectorAll('.change'),
        greenImage = document.querySelector(".greenImage"),
        greenImage2 = document.querySelector(".greenImage2"),
        greenImage3 = document.querySelector(".greenImage3"),
        greenImage4 = document.querySelector(".greenImage4"),
        greenImage5 = document.querySelector(".greenImage5"),
        greenImage6 = document.querySelector(".greenImage6");
        for(var i = 0; i < changeWhite.length; i++){
            if(changeWhite[i].style.background == "#2e2e3a" || changeWhite[i].style.background == "#0c3139"){
                changeWhite[i].style.background = "#3e1921";
            }else{
                changeWhite[i].style.background = "#3e1921";
            }
        } 
        greenImage.src = "PIC/red_finish__c441x0ljv9yu_large_2x.jpg";
        greenImage2.src = "PIC/red_ceramic_shield__c7b9gmy1p7ma_large_2x.jpg";
        greenImage3.src = "PIC/red_iphone_13__zhh6dzfw2syu_large_2x.jpg"; 
        greenImage4.src = "PIC/red_iphone_13_mini__btujqivh5qpe_large_2x.jpg"; 
        greenImage5.src = "PIC/red_flat_edge__cj23r9vmldyu_large_2x.jpg"; 
        greenImage6.src = "PIC/water_resistant_red__be2yibg6u4ky_large_2x.jpg"; 
}

function myBtn(c){
    let btnss = document.querySelectorAll(".btn1");
    for(var i = 0; i < btnss.length; i++){
        btnss[i].classList.remove("newClass");
    }
    c.currentTarget.classList.add("newClass");
    
}

window.onscroll = function(){
    let valuer = window.pageYOffset,
        element = document.getElementById("item").offsetTop,
        contentLeft = document.querySelector(".grand-flex"),
        animateImage = document.querySelector(".animate-image .img1"),
        contenttxt = document.querySelector(".cont");
    if(valuer > element - 150){
        contentLeft.style.opacity = 0;
        contenttxt.style.opacity = 0;
        animateImage.style.transform = "matrix(1.1 , 0 , 0 , 1.1 , -300 , -350)";
        
    }else{
        contentLeft.style.opacity = 1;
        animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)" 
    }
    if(valuer > element + 50 ){
        animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)";
        contentLeft.style.opacity = 1;
        contenttxt.style.opacity = 1;
    }
    function myFunction(x) {
        if (x.matches) {
            if(valuer > element - 150){
                contentLeft.style.opacity = 0;
                contenttxt.style.opacity = 0;
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , -200 , -300)"
            }else{
                contentLeft.style.opacity = 1;
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)" 
            }
            if(valuer > element + 50 ){
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)";
                contentLeft.style.opacity = 1;
                contenttxt.style.opacity = 1;
            }
        } 
    }
    var x = window.matchMedia("(max-width: 991px)")
    myFunction(x) 
    x.addListener(myFunction);
    
    function myFunction(w) {
        if (w.matches) {
            if(valuer > element - 150){
                contentLeft.style.opacity = 0;
                contenttxt.style.opacity = 0;
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , -135 , -300)"
            }else{
                contentLeft.style.opacity = 1;
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)" 
            }
            if(valuer > element + 50 ){
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)";
                contentLeft.style.opacity = 1;
                contenttxt.style.opacity = 1;
            }
        } 
    }
    var w = window.matchMedia("(max-width: 768px)")
    myFunction(w) 
    w.addListener(myFunction);
    
    function myFunction(s) {
        if (s.matches) {
            if(valuer > element - 150){
                contentLeft.style.opacity = 0;
                contenttxt.style.opacity = 0;
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , -110 , -250)"
            }else{
                contentLeft.style.opacity = 1;
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)" 
            }
            if(valuer > element + 50 ){
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)";
                contentLeft.style.opacity = 1;
                contenttxt.style.opacity = 1;
            }
        } 
    }
    var s = window.matchMedia("(max-width: 576px)")
    myFunction(s) 
    s.addListener(myFunction);
    
    function myFunction(v) {
        if (v.matches) {
            if(valuer > element - 150){
                contentLeft.style.opacity = 0;
                contenttxt.style.opacity = 0;
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , -250)"
            }else{
                contentLeft.style.opacity = 1;
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)" 
            }
            if(valuer > element + 50 ){
                animateImage.style.transform = "matrix(1 , 0 , 0 , 1 , 0 , 0)";
                contentLeft.style.opacity = 1;
                contenttxt.style.opacity = 1;
            }
        } 
    }
    var v = window.matchMedia("(max-width: 576px)")
    myFunction(v) 
    v.addListener(myFunction);
}

function myImages(){
    window.addEventListener("scroll",function(){
        let tallPage = window.pageYOffset,
            elmtsUp = document.querySelector(".big-work").offsetTop,
            work1 = document.querySelector(".work1"),
            tall = document.querySelector(".tall"),
            horizontal = document.querySelector(".horizontal"),
            vertical = document.querySelector(".vertical"),
            numTwo = document.querySelector(".num-two"),
            lastOne = document.querySelector(".lastOne"),
            numThree = document.querySelector(".num-three"),
            numFour = document.querySelector(".num-four");
        if(tallPage > elmtsUp - 150){
            work1.style.transform = "translateY(0)"; 
            tall.style.transform = "translateY(0)";
            lastOne.style.transform = "translateX(0)";
            numThree.style.transform = "translateY(0px)";
            numFour.style.transform = "translateY(0px)";
            horizontal.style.transform = "translateY(0px)";
            vertical.style.transform = "translateY(0px)";
            numTwo.style.transform = "scale(1)";
            
        }else{
            work1.style.transform = "translateY(-700px)";
            tall.style.transform = "translateY(1400px)";
            lastOne.style.transform = "translateX(1200px)";
            numThree.style.transform = "translateY(1400px)";
            numFour.style.transform = "translateY(1400px)";
            horizontal.style.transform = "translateY(1400px)";
            vertical.style.transform = "translateY(1400px)";
            numTwo.style.transform = "scale(1.3)";
        }
    })
}
myImages();


function myCode1(){
    let plus1 = document.querySelector(".plus1"),
        plus2 = document.querySelector(".plus2"),
        plus3 = document.querySelector(".plus3"),
        overWatch1 = document.querySelector(".over-watch1"),
        overWatch2 = document.querySelector(".over-watch2"),
        overWatch3 = document.querySelector(".over-watch3"),
        text1 = document.querySelector(".over-watch1 p"),
        text2 = document.querySelector(".over-watch2 p"),
        text3 = document.querySelector(".over-watch3 p");
        plus1.addEventListener("click", function(){
            this.classList.toggle("toggle");
            if(overWatch1.style.top == "0%"){
                overWatch1.style.top = "-100%";
                text1.style.marginTop = "-10%";
                text1.style.opacity = 0
            }else{
                overWatch1.style.top = "0%";
                text1.style.marginTop = "0%";
                text1.style.opacity = 1 
            }
            
            
        })
    
    plus2.addEventListener("click", function(){
            this.classList.toggle("toggle");
            if(overWatch2.style.top == "0%"){
                overWatch2.style.top = "-100%";
                text2.style.marginTop = "-10%";
                text2.style.opacity = 0
            }else{
                overWatch2.style.top = "0%";
                text2.style.marginTop = "0%";
                text2.style.opacity = 1 
            }
            
            
        })
    
    plus3.addEventListener("click", function(){
            this.classList.toggle("toggle");
            if(overWatch3.style.top == "0%"){
                overWatch3.style.top = "-100%";
                text3.style.marginTop = "-10%";
                text3.style.opacity = 0
            }else{
                overWatch3.style.top = "0%";
                text3.style.marginTop = "0%";
                text3.style.opacity = 1 
            }
            
            
        })
}

myCode1();































