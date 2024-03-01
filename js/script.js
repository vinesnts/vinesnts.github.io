const scrollOffset = (screen.width > 413 ? 11 : 20);
const scrollElementTrigger = document.querySelector("*[data-animate='trigger-fade-out']");
const scrollElement = document.querySelector("*[data-animate='fade-out']");

const scrollOffsetFadeIn = 45;
const scrollElementFadeInTrigger = document.querySelector("*[data-animate='trigger-fade-in']");
const scrollElementFadeIn = document.querySelector("*[data-animate='fade-in']");

const scrollOffsetAnimate = 10;
const scrollElementAnimateTrigger = document.querySelector("#navbar");
const scrollElementAnimate = scrollElementAnimateTrigger;

const scrollOffsetIntro = 20;
const highlightIntro = document.querySelector("a[href='#intro']");
const highlightIntroTrigger = document.querySelector("#intro");

const scrollOffsetBio = 17;
const highlightBio = document.querySelector("a[href='#bio']");
const highlightBioTrigger = document.querySelector("#bio");

const scrollOffsetSkill = 18;
const highlightSkill = document.querySelector("a[href='#skills']");
const highlightSkillTrigger = document.querySelector("#skills");

// const scrollOffsetProjects = 10;
// const highlightProjects = document.querySelector("a[href='#projects']");
// const highlightProjectsTrigger = document.querySelector("#projects");

const scrollOffsetRef = 20;
const highlightRef = document.querySelector("a[href='#ref']");
const highlightRefTrigger = document.querySelector("#ref");

const scrollOffsetContact = 95;
const highlightContact = document.querySelector("a[href='#contact']");
const highlightContactTrigger = document.querySelector("#contact");

const elementInView = (el, offset = 0, t = false) => {
    const elementTop = el.getBoundingClientRect().top;
    const clientHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // if (t) console.log((elementTop <= ((clientHeight * offset) / 100)));
    return (
        elementTop <= 
            ((clientHeight * offset) / 100)
    );
};

const displayScrollElement = (scrollElement) => {
    scrollElement?.classList.add('scrolled');
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

const handleScrollHighlight = (scrollElementTrigger, scrollElement, scrollOffset, t = true, scrollNavbar = false) => {
    if (elementInView(scrollElementTrigger, scrollOffset, t)) {
        highlightBio.classList = "";
        highlightSkill.classList = "";
        // highlightProjects.classList = "";
        highlightIntro.classList = "";
        highlightRef.classList = "";
        scrollElement.classList = "active";
        if (scrollNavbar) {
            document.getElementById('navbar').scrollTo({left: document.getElementById('navbar').offsetWidth, behavior: 'smooth'});
        } else {
            document.getElementById('navbar').scrollTo({left: 0, behavior: 'smooth'});
        }
    } else {
        scrollElement.classList = "";
    }
}

const handleScrollBottom = (scrollElementTrigger) => {
    const currentPosition = window.scrollY;
    const maxPosition = document.body.offsetHeight - window.innerHeight;

    if (currentPosition === maxPosition) {
        highlightBio.classList = "";
        highlightSkill.classList = "";
        highlightIntro.classList = "";
        highlightRef.classList = "";
        scrollElementTrigger.classList.add('active')
    }
    else {
        scrollElementTrigger.classList.remove('active')
    }
}

const scrollBottom = (event) => {
    event.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
}

const scrollToElement = (event, elementId) => {
    event.preventDefault();
    const element = document.getElementById(elementId);
    const elementPosition = element.getBoundingClientRect().top - document.body.getBoundingClientRect().top
    window.scrollTo({top: elementPosition - 100, behavior: 'smooth'});
}

window.addEventListener('scroll', () => {
    handleScrollFade(scrollElementTrigger, scrollElement, scrollOffset);
    handleScrollFade(scrollElementFadeInTrigger, scrollElementFadeIn, scrollOffsetFadeIn, false);
    handleScrollColorNavbar(scrollElementAnimateTrigger, scrollElementAnimate, scrollOffsetAnimate);
    handleScrollHighlight(highlightIntroTrigger, highlightIntro, scrollOffsetIntro);
    handleScrollHighlight(highlightBioTrigger, highlightBio, scrollOffsetBio);
    handleScrollHighlight(highlightSkillTrigger, highlightSkill, scrollOffsetSkill);
    // handleScrollHighlight(highlightProjectsTrigger, highlightProjects, scrollOffsetProjects);
    handleScrollHighlight(highlightRefTrigger, highlightRef, scrollOffsetRef, true, true);
    handleScrollHighlight(highlightContactTrigger, highlightContact, scrollOffsetContact);
    handleScrollBottom(highlightContact);
})

document.querySelector('#copyright-year').textContent = (new Date()).getFullYear();