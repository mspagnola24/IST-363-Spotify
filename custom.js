console.log("js loaded")

const profile = "Matt Spagnola";
console.log(profile);

const price = 50;
const tax = 0.07;
const deliveryFee = 3;
const totalPrice = price + (price * tax) +
deliveryFee;

console.log(totalprice);

const syracuseWeather = 60;
const isFreezing = syracuseWeather <= 32 ? true : false;
console.log(isFreezing);

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

console.log(menuBtn);

// event name, function
menuBtn.addEventListener("click", function(){
    mobileMenu.classList.add('active')
});
menuBtn.addEventListener("click", function(){
        mobileMenu.classList.add('active')
});


menuBtn.addEventListener("click", function(){
    mobileMenu.classList.add('active')
})


//objects
const song = {
    title:"come sail away",
    artist: "Styx",
    length: 180,
    image: "album.jpg" 

}

//array
const songs = ["red", "orange", "yellow"]
console.log(colors);

//for loop
//counter, condition, incrementor 
for (let i = 0; i < color.length; i++) {
    console.log(colors[i])
} // end of for loop
