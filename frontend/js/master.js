// Check if there is local storage color option
let mainColors = localStorage.getItem("color_option");

if (mainColors !== null) {
    // Set color on root
    document.documentElement.style.setProperty('--main-color', mainColors);
    document.documentElement.style.setProperty('--primary-color', mainColors);
    document.documentElement.style.setProperty('--hover-color', shadeColor(mainColors, -10));
    document.documentElement.style.setProperty('--logout-color', mainColors);
    document.documentElement.style.setProperty('--logout-hover-color', shadeColor(mainColors, -20));
}

// Click on toggle settings gear
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
    // Toggle class fa-spin for rotation on self
    this.classList.toggle("fa-spin");

    // Toggle class open on main settings box
    document.querySelector(".settings-box").classList.toggle("open");
}

// SWITCH COLORS
const colorsLi = document.querySelectorAll(".colors-list li");

// Loop on all list items
colorsLi.forEach(li => {
    // Click on every list items
    li.addEventListener("click", (e) => {
        // Set color on root
        const newColor = e.target.dataset.color;
        document.documentElement.style.setProperty('--main-color', newColor);
        document.documentElement.style.setProperty('--primary-color', newColor);
        document.documentElement.style.setProperty('--hover-color', shadeColor(newColor, -10));
        document.documentElement.style.setProperty('--logout-color', newColor);
        document.documentElement.style.setProperty('--logout-hover-color', shadeColor(newColor, -20));

        // Set color on local storage
        localStorage.setItem("color_option", newColor);

        // Remove active class from all children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        })

        // Add active class on self
        e.target.classList.add("active");
    })
})

// Select landing page element
let landingPage = document.querySelector(".landing-page");

// Get Array of imgs
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]
landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[0] + '")';
let i = 0;
setInterval(() => {
    // Get next image index
    i = (i + 1) % imgsArray.length;

    // Change background image url
    landingPage.style.backgroundImage = 'url("imgs/' + imgsArray[i] + '")';
}, 5000);

// Utility function to shade a color
function shadeColor(color, percent) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    const RR = ((R.toString(16).length === 1) ? "0" + R.toString(16) : R.toString(16));
    const GG = ((G.toString(16).length === 1) ? "0" + G.toString(16) : G.toString(16));
    const BB = ((B.toString(16).length === 1) ? "0" + B.toString(16) : B.toString(16));

    return "#" + RR + GG + BB;
}
