const hours=(new Date).getHours(),isDayTime=hours>=6&&hours<18;console.log(hours);var i,collection=document.querySelectorAll("[data-visual]"),collection_length=collection.length;if(isDayTime)console.log("Hey it's day time");else for(console.log("Hey it's night time"),i=0;i<collection_length;i++)collection[i].hasAttribute("href")?collection[i].setAttribute("href",collection[i].getAttribute("data-visual")):collection[i].setAttribute("data-src",collection[i].getAttribute("data-visual"));document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("#sp-links"),s=document.querySelector("#sp-hamburger"),t=document.querySelector("#header"),o=document.querySelector("#blogSideBar");function l(e,s,l){e?(t.classList.contains("scroll")||t.classList.add("scroll"),null!=o&&(o.classList.contains("scroll")||o.classList.add("scroll"))):(t.classList.contains("scroll")&&t.classList.remove("scroll"),null!=o&&(o.classList.contains("scroll")||o.classList.remove("scroll"))),s?(t.classList.contains("scroll-up")||t.classList.add("scroll-up"),null!=o&&(o.classList.contains("scroll-up")||o.classList.add("scroll-up"))):(t.classList.contains("scroll-up")&&t.classList.remove("scroll-up"),null!=o&&(o.classList.contains("scroll-up")||o.classList.remove("scroll-up"))),l?(t.classList.contains("scroll-down")||t.classList.add("scroll-down"),null!=o&&(o.classList.contains("scroll-down")||o.classList.add("scroll-down"))):(t.classList.contains("scroll-down")&&t.classList.remove("scroll-down"),null!=o&&(o.classList.contains("scroll-down")||o.classList.remove("scroll-down")))}s.addEventListener("click",(t=>{e.classList.toggle("open"),s.classList.toggle("show")}));let i=0,n=0;window.onscroll=function(e){n=i,i=window.pageYOffset,window.pageYOffset===document.body.offsetTop?l(!1,!1,!1):i-n<0?l(!0,!0,!1):i-n>0&&l(!0,!1,!0)},isDayTime?(console.log("Let us enjoy the sunlight"),setTimeout((function(){particlesJS("particles-js",{particles:{number:{value:34,density:{enable:!0,value_area:881.8766334760375}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:292.34779642848423,size:4,duration:8.851641614084663,opacity:.8689226171624392,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}),1500)):(console.log("Let us enjoy the stars"),setTimeout((function(){particlesJS("particles-js",{particles:{number:{value:77,density:{enable:!1,value_area:800}},color:{value:"#ffffff"},shape:{type:"star",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"http://wiki.lexisnexis.com/academic/images/f/fb/Itunes_podcast_icon_300.jpg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:4,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"right",random:!0,straight:!1,out_mode:"bounce",bounce:!1,attract:{enable:!0,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:200,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}),1500))}));