var typed = new Typed(".text",{
    strings: ["Backend Developer","Problem Solver", "AI/ML Enthusiast", "Full Stack Developer","Computer Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});


const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("menu-open");
};
//classList chai euta toolbox जस्तो सोच्नुहोस् — यसभित्र class add गर्ने, हटाउने, check गर्ने, धेरै साना function (tools) आउँछन्।

//5️⃣ toggle
// Yo chai classList toolbox भित्रको euta function (method) हो। यसको काम:
// "Yedi tokieko class अहिले छैन भने, थप (add). Yedi छ भने, हटाउ (remove)."

//(Comparison: classList.add() ले सधैं थप्छ मात्र, classList.remove() ले सधैं हटाउँछ मात्र। तर toggle() ले अवस्था हेरेर alternate गर्छ।)

// Toggle हुनु अघि:
// nav id="navbar" class="navbar">

// Click garepachi (toggle ON):
// <nav id="navbar" class="navbar menu-open">

// feri click garda (toggle OFF):
// <nav id="navbar" class="navbar">
// ↑ menu-open word class बाट हटाइयो, CSS rule aba match hudaina, navbar फेरि screen बाहिर जान्छ।

const sections = document.querySelectorAll("section[id]");
const