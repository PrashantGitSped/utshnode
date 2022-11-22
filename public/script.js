const revealOnScrolls = document.querySelectorAll('.revealOnScroll');
const testBtn = document.getElementsByClassName("testbtn");
const slide = document.getElementById('slide');
const modalReach = document.querySelector('.modalReach');
const parabtn1 = document.querySelector('.parabtnJs');
const parabtn = document.querySelector('.parabtn');
const closeBtn = document.querySelector('.clsBtn');
const fSeg4 = document.querySelector('.fSeg4');
const btnBurger = document.getElementById('menu-btn');
const sideMenuNav = document.getElementById('menu')
/*const menuLinks = document.getElementsByClassName('menuLinks');*/
const submitSeg4 = document.querySelector('.submitSeg4');


function startif(){

    const triggerHeight= window.innerHeight/5*4;
    /*console.log(triggerHeight, revealOnScrolls);*/

    revealOnScrolls.forEach((el) => {
        const eltop = el.getBoundingClientRect().top;

        if(eltop < triggerHeight){
            el.classList.add(el.dataset.animation)
        }else {
            el.classList.remove(el.dataset.animation);

        }
    }
    )



}

function navToggle(){
    btnBurger.classList.toggle('open');
    sideMenuNav.classList.toggle('hidden');
    document.body.classList.toggle('noscroll');
    /*for(i=0;i<menuLinks.length;i++){
        menuLinks[i].addEventListener('click', navToggle)
    }*/
}


testBtn[0].onclick = () => {
    slide.style.transform = "translateX(0px)";
    for(i=0; i<testBtn.length;i++){
        testBtn[i].classList.remove("active");
    }
    testBtn[0].classList.add("active");
}

testBtn[1].onclick = () => {
    slide.style.transform = "translateX(-800px)";
    for(i=0; i<testBtn.length;i++){
        testBtn[i].classList.remove("active");
    }
    testBtn[1].classList.add("active");
}

testBtn[2].onclick = () => {
    slide.style.transform = "translateX(-1600px)";
    for(i=0; i<testBtn.length;i++){
        testBtn[i].classList.remove("active");
    }

    testBtn[2].classList.add("active");
}


btnBurger.addEventListener('click', navToggle)
window.addEventListener('scroll', startif);

parabtn.addEventListener('click', openRModal)
parabtn1.addEventListener('click', openRModal)
closeBtn.addEventListener('click', closeRModal)
window.addEventListener('click', outsideClick)
fSeg4.addEventListener('click', openRModal)
submitSeg4.addEventListener('click', function (event){
    event.preventDefault();

})


function openRModal(){
    modalReach.style.display = 'block';
}

function closeRModal(){
    console.log('closermodal called');
    modalReach.style.display = 'none';

}

function outsideClick(e){
    if(e.target == modalReach){
        closeRModal();
    }
}


