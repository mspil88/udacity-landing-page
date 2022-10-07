/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

const sections = Array.from(document.getElementsByTagName("section"));
const navBar = document.querySelector("#navbar__list");


//creating an unordered list or nav from the sections array nad think about how I can test whether a section is in the viewport

const addSmoothScrolling = () => {
    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach(link=> {
        link.addEventListener("click", (e)=> {
            e.preventDefault();
            const linkElem = document.getElementById(link.getAttribute("link-to"));
            linkElem.scrollIntoView({behavior: "smooth"})
        })
    })
}

const createNav = () => {

    let listElements = [];

    sections.forEach(section => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = section.getAttribute("data-nav");
        a.setAttribute("link-to", section.getAttribute("id"))
        a.className = "nav__link menu__link";
        a.href = `#${section.getAttribute("id")}`

        // li.addEventListener("click", (event)=> {
        //     event.preventDefault();
        //     a.scrollIntoView(true);
        // })
        
        li.append(a);
        listElements.push(li)
        }
    )

    navBar.append(...listElements);
    addSmoothScrolling();
}

createNav();

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            
            if(entry.isIntersecting) {
                console.log(entry.target)
                entry.target.classList.toggle("your-active-class", entry.isIntersecting);
            }
            else {
                entry.target.classList.remove("your-active-class");
            }
    })
    },
    {
        threshold: 0.5,
    }
)

sections.forEach(section => {
    observer.observe(section)
})


console.log("nav")
Array.from(navBar).forEach(itm => console.log(itm))

