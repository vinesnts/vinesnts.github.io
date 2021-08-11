const scrollOffset = (screen.width > 413 ? 11 : 20);
const scrollElementTrigger = document.querySelector("*[data-animate='trigger-fade-out']");
const scrollElement = document.querySelector("*[data-animate='fade-out']");

const scrollOffsetFadeIn = 45;
const scrollElementFadeInTrigger = document.querySelector("*[data-animate='trigger-fade-in']");
const scrollElementFadeIn = document.querySelector("*[data-animate='fade-in']");

const scrollOffsetAnimate = 10;
const scrollElementAnimateTrigger = document.querySelector("#navbar");
const scrollElementAnimate = scrollElementAnimateTrigger;

const scrollOffsetBio = 50;
const highlightBio = document.querySelector("a[href='#bio']");
const highlightBioTrigger = document.querySelector("#bio");

const scrollOffsetSkill = 10;
const highlightSkill = document.querySelector("a[href='#skills']");
const highlightSkillTrigger = document.querySelector("#skills");

const scrollOffsetProjects = 10;
const highlightProjects = document.querySelector("a[href='#projects']");
const highlightProjectsTrigger = document.querySelector("#projects");

const scrollOffsetRef = 30;
const highlightRef = document.querySelector("a[href='#ref']");
const highlightRefTrigger = document.querySelector("#ref");

const elementInView = (el, offset = 0, t = false) => {
    const elementTop = el.getBoundingClientRect().top;
    const clientHeight = window.innerHeight || document.documentElement.clientHeight;
    
    if (t) console.log((elementTop <= ((clientHeight * offset) / 100)));
    return (
        elementTop <= 
            ((clientHeight * offset) / 100)
    );
};

const displayScrollElement = (scrollElement) => {
    scrollElement.classList.add('scrolled');
}

const hideScrollElement = (scrollElement) => {
    scrollElement.classList.remove('scrolled');
}

const handleScrollFade = (scrollElementTrigger, scrollElement, scrollOffset, fadeOut = true) => {
    if (fadeOut) {
        if (elementInView(scrollElementTrigger, scrollOffset)) {
            displayScrollElement(scrollElement);
        } else {
            hideScrollElement(scrollElement);
        }
    } else {
        if (elementInView(scrollElementTrigger, scrollOffset)) {
            displayScrollElement(scrollElement);
        } else {
            hideScrollElement(scrollElement);
        }
    }
}

const handleScrollColorNavbar = (scrollElementTrigger, scrollElement, scrollOffset) => {
    if (elementInView(scrollElementTrigger, scrollOffset)) {
        scrollElement.classList = "navbar darken";
    } else {
        scrollElement.classList = "navbar";
    }
}

const handleScrollHighlight = (scrollElementTrigger, scrollElement, scrollOffset, t = true) => {
    if (elementInView(scrollElementTrigger, scrollOffset, t)) {
        highlightBio.classList = "";
        highlightSkill.classList = "";
        highlightProjects.classList = "";
        highlightRef.classList = "";
        scrollElement.classList = "active";
    } else {
        scrollElement.classList = "";
    }
}

window.addEventListener('scroll', () => {
    handleScrollFade(scrollElementTrigger, scrollElement, scrollOffset);
    handleScrollFade(scrollElementFadeInTrigger, scrollElementFadeIn, scrollOffsetFadeIn, false);
    handleScrollColorNavbar(scrollElementAnimateTrigger, scrollElementAnimate, scrollOffsetAnimate);
    handleScrollHighlight(highlightBioTrigger, highlightBio, scrollOffsetBio);
    handleScrollHighlight(highlightSkillTrigger, highlightSkill, scrollOffsetSkill);
    handleScrollHighlight(highlightProjectsTrigger, highlightProjects, scrollOffsetProjects);
    handleScrollHighlight(highlightRefTrigger, highlightRef, scrollOffsetRef);
})