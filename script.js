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