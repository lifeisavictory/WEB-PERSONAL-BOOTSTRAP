const titleSpan = document.querySelector('#main-title');
const parentH1 = titleSpan.parentElement; // Vybere to h1, ve kterém je span

titleSpan.addEventListener('mouseover', () => {
    if (parentH1.classList.contains('text-start')) {
        parentH1.classList.replace('text-start', 'text-end');
    } else {
        parentH1.classList.replace('text-end', 'text-start');
    }});