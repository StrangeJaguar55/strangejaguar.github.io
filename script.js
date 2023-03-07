const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

function navAnimation(a, b) {
    navItems.forEach((nav, index) => {
        nav.classList.replace(`slide-${a}-${index+1}`, `slide-${b}-${index+1}`)
    })
}

function toggleNav() {
    //toggle menu bars open/close
    menuBars.classList.toggle("change");
    //toggle menu active; overlay-active does not exist, we use it as boolean variable
    overlay.classList.toggle('overlay-active'); //prepina class na false/true, i kdyz class neexistuje
    if (overlay.classList.contains("overlay-active")) {
        //animate overlay in
        // overlay.classList.remove('overlay-slide-left');
        // overlay.classList.add('overlay-slide-right');
        //zjednodusime:
        overlay.classList.replace('overlay-slide-left', 'overlay-slide-right'); //musim ale overlay-slide-left doplnit defaultne do html, aby slo replace
        //Animate in - nav items
        // nav1.classList.remove('slide-out-1');
        // nav1.classList.add('slide-in-1');
        // nav2.classList.remove('slide-out-2');
        // nav2.classList.add('slide-in-2');
        // nav3.classList.remove('slide-out-3');
        // nav3.classList.add('slide-in-3');
        // nav4.classList.remove('slide-out-4');
        // nav4.classList.add('slide-in-4');
        // nav5.classList.remove('slide-out-5');
        // nav5.classList.add('slide-in-5');
        //zjednoduseni:
        // nav1.classList.replace('slide-out-1', 'slide-in-1') //musim ale slide-in-out doplnit defaultne do html, aby slo replace
        //... replace pro vsechny nav
        //jeste vice zjednoduseni pomoci fce:
        navAnimation('out', 'in');

    }
    //animate overlay out
    else {
        overlay.classList.replace('overlay-slide-right', 'overlay-slide-left')
        navAnimation('in', 'out');
    }
}
menuBars.addEventListener('click', toggleNav);
// nav1.addEventListener('click', toggleNav);
// nav2.addEventListener('click', toggleNav);
// nav3.addEventListener('click', toggleNav);
// nav4.addEventListener('click', toggleNav);
// nav5.addEventListener('click', toggleNav);
//zjednodusime:
navItems.forEach(nav => {
    nav.addEventListener('click', toggleNav);
})