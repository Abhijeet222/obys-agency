

var tl=gsap.timeline();

tl.from(".line h1",{
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5,  
});

tl.to(".line h2",{
        animationName:"anime",
       opacity:1,
})
tl.from("line1-part1",{
    opacity:0,
    onStart:function(){
       
var h1timer=document.querySelector("#line1-part1 h5");

var grow=0;
setInterval(function(){
    if(grow<100){
    h1timer.innerHTML=grow++;
}else{
    h1timer.innerHTML=grow; 
}
},25);
    }
});
 
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:2.2
})

tl.from("#page1",{
    delay:0.2,
    duration:0.4,
    y:1600, 
    opacity:0
})

tl.to("#loader",{
    display:"none"
})