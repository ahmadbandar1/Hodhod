let signIn=document.getElementById('signIn');
let show=document.getElementById('show');
let imgClose=document.querySelectorAll('.imgClose');
let res=document.getElementById('res');
let resSign=document.getElementById('resSign'); 
let section=document.getElementById('section');
let imgClo=document.getElementById('imgClo');
let signIn1=document.getElementById('signIn1');
let eye=document.getElementById('eye');
let eye1=document.getElementById('eye1');
let password=document.getElementById('password');
let passwordRes=document.getElementById('passwordRes');
let singInRes=document.getElementById('singInRes');
let nav=document.getElementById('nav');
let navsm=document.getElementById('navsm');


signIn.addEventListener('click',function(){
 show.style.display="flex";
 nav.classList.remove("zzz");
})

signIn1.addEventListener('click',function(){
    singInRes.style.display="block";
})

for(let i=0;i<imgClose.length;i++){
imgClose[i].addEventListener('click',function(){
    show.style.display="none";
})
}


res.addEventListener('click',function(){
    section.style.display="block";
})
resSign.addEventListener('click',function(){
    section.style.display="block";
    singInRes.style.display="none";
   
})
imgClo.addEventListener('click',function(){
    section.style.display="none";
})

eye.addEventListener('click',function(){
   password.setAttribute('type','text');
   setTimeout(() => {
    password.setAttribute('type','password');
   }, "3000")
})

eye1.addEventListener('click',function(){
    passwordRes.setAttribute('type','text');
    setTimeout(() => {
     passwordRes.setAttribute('type','password');
    }, "3000")
 })


window.addEventListener('scroll',function(){
    let sc=window.scrollY ;
    if(sc > 400){
        nav.classList.add("zzz");
    }else{
        nav.classList.remove("zzz");
        // console.log( nav.classList);
    }
    
 })
 window.addEventListener('scroll',()=>{
    let sc=window.scrollY ;
    if(sc > 400){
        navsm.classList.add("zzz");
    }else{
        navsm.classList.remove("zzz");
    }
    
 })
//owl-carousel 

$('.owl-carousel').owlCarousel({
    loop:true,
    rtl:true,
    autoplay:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        }
    }
})



