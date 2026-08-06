const scrollHomeButton = document.querySelector("#scroll-home");

const scrollOffset = (screen.width > 413 ? 35 : 40);
const scrollElementTrigger = document.querySelector("*[data-animate='trigger-fade-out']");
const scrollElement = document.querySelector("*[data-animate='fade-out']");

const scrollOffsetFadeIn = -50;
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

const scrollOffsetWorks = 20;
const highlightWorks = document.querySelector("a[href='#works']");
const highlightWorksTrigger = document.querySelector("#works");

const scrollOffsetContact = 95;
const highlightContact = document.querySelector("a[href='#contact']");
const highlightContactTrigger = document.querySelector("#contact");

let suppressNavbarAutoScroll = false;
let navbarAutoScrollTimeout;

const suppressNavbarScrollDuringNavigation = () => {
    suppressNavbarAutoScroll = true;
    window.clearTimeout(navbarAutoScrollTimeout);
    navbarAutoScrollTimeout = window.setTimeout(() => {
        suppressNavbarAutoScroll = false;
    }, 1000);
}

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    const clientHeight = window.innerHeight || document.documentElement.clientHeight;

    return (
        elementTop <= 
            ((clientHeight * offset) / 100)
    );
};

const highlightSections = [
    [highlightIntroTrigger, scrollOffsetIntro],
    [highlightBioTrigger, scrollOffsetBio],
    [highlightSkillTrigger, scrollOffsetSkill],
    [highlightRefTrigger, scrollOffsetRef],
    [highlightWorksTrigger, scrollOffsetWorks],
    [highlightContactTrigger, scrollOffsetContact],
];

const isCurrentHighlight = (trigger) => {
    const sectionIndex = highlightSections.findIndex(([sectionTrigger]) => sectionTrigger === trigger);
    if (sectionIndex === -1) return false;

    return highlightSections
        .slice(sectionIndex + 1)
        .every(([sectionTrigger, offset]) => !elementInView(sectionTrigger, offset));
}

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

const handleScrollHighlight = (scrollElementTrigger, scrollElement, scrollOffset, scrollNavbar = false) => {
    if (elementInView(scrollElementTrigger, scrollOffset)) {
        const wasActive = scrollElement.classList.contains('active');
        highlightBio.classList = "";
        highlightSkill.classList = "";
        highlightIntro.classList = "";
        highlightRef.classList = "";
        highlightWorks.classList = "";
        scrollElement.classList = "active";
        if (!wasActive && !suppressNavbarAutoScroll && isCurrentHighlight(scrollElementTrigger)) {
            if (scrollNavbar) {
                scrollNavbarToItem(scrollElement);
            } else {
                document.getElementById('navbar').scrollTo({left: 0, behavior: 'smooth'});
            }
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
        highlightWorks.classList = "";
        scrollElementTrigger.classList.add('active')
    }
    else {
        scrollElementTrigger.classList.remove('active')
    }
}

const handleScrollAwayFromTop = () => {
    const currentPosition = window.scrollY;
    const maxPosition = 100;

    if (currentPosition > maxPosition) {
        scrollHomeButton.classList.add('show')
    }
    else {
        scrollHomeButton.classList.remove('show')
    }
}

const scrollBottom = (event) => {
    event.preventDefault();
    suppressNavbarScrollDuringNavigation();
    scrollNavbarToItem(event.currentTarget);
    window.scrollTo(0, document.body.scrollHeight);
}

const scrollNavbarToItem = (menuItem) => {
    const navbar = document.getElementById('navbar');
    if (!navbar || !menuItem) return;

    const navbarRect = navbar.getBoundingClientRect();
    const menuItemRect = menuItem.getBoundingClientRect();
    if (Math.abs(menuItemRect.left - navbarRect.left) < 1) return;

    const itemLeft = navbar.scrollLeft + menuItemRect.left - navbarRect.left;

    navbar.scrollTo({left: Math.max(0, itemLeft), behavior: 'smooth'});
}

const scrollToElement = (event, elementId) => {
    event.preventDefault();
    suppressNavbarScrollDuringNavigation();
    scrollNavbarToItem(event.currentTarget);
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
    handleScrollHighlight(highlightRefTrigger, highlightRef, scrollOffsetRef, true);
    handleScrollHighlight(highlightWorksTrigger, highlightWorks, scrollOffsetWorks, true);
    handleScrollHighlight(highlightContactTrigger, highlightContact, scrollOffsetContact, true);
    handleScrollBottom(highlightContact);
    handleScrollAwayFromTop();
});

scrollHomeButton.addEventListener('click', (event) => {
    scrollToElement(
        event,
        'intro',
    );
    document.getElementById('navbar').scrollTo({left: 0, behavior: 'smooth'});
});