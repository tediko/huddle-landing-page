const sections = document.querySelectorAll('[data-anim]');

const options = {
    rootMargin: '0px',
    threshold: 0.3
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.isIntersecting ? entry.target.classList.add('active') : false;
    })
}, options)

export default sections.forEach(section => {
    observer.observe(section);
})