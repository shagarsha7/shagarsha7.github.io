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