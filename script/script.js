let scrolltop=document.getElementById("mybtn")

window.onscroll=function(){
    'use strict';

    if(window.pageYOffset >= 300){
        scrolltop.style.display="block"
    }else{
        scrolltop.style.display="none"
    }
}

scrolltop.onclick=function(){
    'use strict';

    window.scrollTo(0, 0)
}

function initMap() {
    // The location of Uluru
    var uluru = {lat: 8.307531, lng: 77.221837};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
  }

  
//   let menus=document.getElementById("menus")

//   function pop(){
//         if(menus.style.display==="none"){
//             menus.style.display="grid"
//         }else{
//             menus.style.display="none"
//         }
//   }

let menus=document.getElementById("menus")
let menubtn=document.getElementById("menubtn")

document.addEventListener("DOMContentLoaded", init)

function init(){
    let query=window.matchMedia("(max-width: 740px)");
    if(query.matches){
        console.log("good")
        menubtn.onclick=function(){
            if(menus.style.display==="none"){
                menus.style.display="grid"
            }else{
                menus.style.display="none"
            }
      }
    }else{
        
    }
}
  
 