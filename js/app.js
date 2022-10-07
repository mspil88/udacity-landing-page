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

const createNav = () => {

    let listElements = [];

    sections.forEach(section => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = section.getAttribute("data-nav");
        a.className = "nav__link menu__link";
        a.href = `#${section.getAttribute("id")}`
        li.append(a);
        listElements.push(li)
        }
    )

    navBar.append(...listElements);
    
}

createNav();

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            
            // if(entry.isIntersecting) observer.unobserve(entry.target);
            if(entry.isIntersecting) {
                console.log(entry.target)
                entry.target.className = "your-active-class";
            }
            else {
                entry.target.className = "inactive-section";
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

