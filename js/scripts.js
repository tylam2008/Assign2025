/*!
* Start Bootstrap - Clean Blog v6.0.9 (https://startbootstrap.com/theme/clean-blog)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-clean-blog/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', () => {
    let scrollPos = 0;
    const mainNav = document.getElementById('mainNav');
    const headerHeight = mainNav.clientHeight;
    window.addEventListener('scroll', function() {
        const currentTop = document.body.getBoundingClientRect().top * -1;
        if ( currentTop < scrollPos) {
            // Scrolling Up
            if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-visible');
            } else {
                console.log(123);
                mainNav.classList.remove('is-visible', 'is-fixed');
            }
        } else {
            // Scrolling Down
            mainNav.classList.remove(['is-visible']);
            if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
                mainNav.classList.add('is-fixed');
            }
        }
        scrollPos = currentTop;
    });
})


<!-- <add by lam> -->
document.getElementById('samplePostLink').addEventListener('click', function(event) {
    event.preventDefault();
    const sublist = document.getElementById('sublist');
    sublist.classList.toggle('show');
});


document.getElementById('samplePostLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const sublist = document.getElementById('sublist');
    if (sublist.style.display === 'none') {
        sublist.style.display = 'block'; // Show the sublist
    } else {
        sublist.style.display = 'none'; // Hide the sublist
    }
});

document.getElementById('samplePostLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior
    const sublist = document.getElementById('sublist');
    sublist.style.display = sublist.style.display === 'none' ? 'block' : 'none';
});

// Hide sublist when clicking outside
document.addEventListener('click', function(event) {
    const sublist = document.getElementById('sublist');
    const samplePostLink = document.getElementById('samplePostLink');

    // Check if the click is outside the "Sample Post" link and the sublist
    if (event.target !== samplePostLink && !sublist.contains(event.target)) {
        sublist.style.display = 'none'; // Hide the sublist
    }
});

<!-- <end added by lam> -->