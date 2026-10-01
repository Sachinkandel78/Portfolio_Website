var typed = new Typed(".text",{
    strings: ["Backend Developer","Problem Solver", "AI/ML Enthusiast", "Full Stack Developer","Computer Engineer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});


const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

// menuIcon.onclick = () => {
//     navbar.classList.toggle("menu-open");
// };                                           yo purano tarika ho, aba naya tarika use garne ho, addEventListener() method use garera.
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("menu-open");
});


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
//Bujnako lagi matra yeha use vaxaina hai yo

// sections.forEach((section) => {
//     const sectionTop = section.offsetTop;
//     console.log(section.id, "=", sectionTop);
// });
// output yesto aauxa 
// home = 0
// about = 900
// skills = 1800
// project = 3200
// contact = 4500
//(यी numbers hamro actual content अनुसार फरक हुन्छन्, यो chai उदाहरण matra हो)


const sections = document.querySelectorAll("section[id], div#project, div#contact");
const navLinks = document.querySelectorAll(".navbar a");
//Yो chai arrow function भनिने JavaScript को euta तरिका हो, function बनाउने। yo talakoe
window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 300) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("current");
        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("current");
        }
    });
});