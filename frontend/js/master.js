//check if there is local storage color option
let mainColors = localStorage.getItem("color_option");



if(mainColors !== null) {

//console.log('Local Storage Is Not Empty You Can Set It On Root Now')
//console.log(localStorage.getItem("color_option"));

document.documentElement.style.setProperty('--main-color', localStorage.getItem("color_option"));

}


// click on toggle settings gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    
    
    //toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");

    // toggle class open on main settings box
    document.querySelector(".settings-box").classList.toggle("open");

}
// SWITCH COLORS
const colorsLi = document.querySelectorAll(".colors-list li");


//loop on all list items
colorsLi.forEach(li => {
    //click on every list items
    li.addEventListener("click", (e) => {


        // set color on root
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        //set color on local storage
        localStorage.setItem("color_option", e.target.dataset.color);

        //rempve active class from all childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {

            element.classList.remove("active");


        })

        // add active class on self
        e.target.classList.add("active");

    })

})


// Select landing page element
let landingPage = document.querySelector(".landing-page");

//get Array of imgs
let imgsArray = ["01.jpg","02.jpg","03.jpg","04.jpg"]
landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[0] +'")';
let i = 0;
setInterval(() => {


    // get random number
    i  = (i+1)%imgsArray.length;

    // change background image url
    landingPage.style.backgroundImage = 'url("imgs/'+ imgsArray[i] +'")';

    

}, 5000);

