const scrollOffset = 5;
const scrollElementTrigger = document.querySelector("*[data-animate='trigger-fade-out']");
const scrollElement = document.querySelector("*[data-animate='fade-out']");

const scrollOffsetFadeIn = 25;
const scrollElementFadeInTrigger = document.querySelector("*[data-animate='trigger-fade-in']");
const scrollElementFadeIn = document.querySelector("*[data-animate='fade-in']");

const elementInView = (el, offset = 0) => {
    const elementTop = el.getBoundingClientRect().top;
    const clientHeight = window.innerHeight || document.documentElement.clientHeight;
    console.log(clientHeight - offset)
    console.log((clientHeight * offset) / 100);
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

const handleScrollAnimation = (scrollElementTrigger, scrollElement, scrollOffset, fadeOut = true) => {
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

window.addEventListener('scroll', () => {
    handleScrollAnimation(scrollElementTrigger, scrollElement, scrollOffset);
    handleScrollAnimation(scrollElementFadeInTrigger, scrollElementFadeIn, scrollOffsetFadeIn, false);
})