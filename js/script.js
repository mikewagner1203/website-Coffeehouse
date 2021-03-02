let menuopen = false;

function openMenu() {
    
    let menu = document.getElementById("navi");
    
    if(!menuopen) {
        menu.classList.add('active');
        menuopen = true;
    }
    else {
        menu.classList.remove('active');
        menuopen = false
    }

}