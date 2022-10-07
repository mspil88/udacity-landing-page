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

/* GLOBAL VARIABLES:
    sections: all sections in the document
    navBar: the navbar in the document
    OBSERVER_THRESHOLD: the threshold (%) for the intersection observer

*/

const sections = Array.from(document.getElementsByTagName("section"));
const navBar = document.querySelector("#navbar__list");
const OBSERVER_THRESHOLD = 0.5;


/*addSmoothScrolling adds smooth scrolling to the nav bar links by iterating through all links and adding an event listener which disables 
  default behaviour of the anchor tag and implements scrollIntoView on the link
*/
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

/*
 Dynamically creates the nav bar links based on the sections in the document, implements links as list items, sets the text content based on the 
 data-nav attribution on the section, sets the class name, href and sets a new attribute 'link-to' which is used by the addSmoothScrolling function.
 Uses a listElement array where the list elements are appended, this structure is then appended in one go to the nav bar using the spread operator.
 smooth scrolling function invoked after to add the event listener to the new element
*/
const createNav = () => {

    let listElements = [];

    sections.forEach(section => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.textContent = section.getAttribute("data-nav");
        a.setAttribute("link-to", section.getAttribute("id"))
        a.className = "nav__link menu__link";
        a.href = `#${section.getAttribute("id")}`
        li.append(a);
        listElements.push(li)
        }
    )

    navBar.append(...listElements);
    addSmoothScrolling();
}

/* 
 Instance of the intersection observer with a callback function checking if an element is intersecting (in view) with a threshold equal to the 
 value of the OBSERVE_THRESHOLD variable (currenty 0.5). If the element is interesection then we toggle the classList to 'your active class' else
 we remove that value. This initiates the CSS effects when the section is sufficiently in view
*/

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {  
            if(entry.isIntersecting) {
                entry.target.classList.toggle("your-active-class", entry.isIntersecting);
            }
            else {
                entry.target.classList.remove("your-active-class");
            }
    })
    },
    {
        threshold: OBSERVER_THRESHOLD,
    }
)

//create the nav bar
createNav();

//iterate over the sections in the document and initiate the observe for each
sections.forEach(section => {
    observer.observe(section)
})
