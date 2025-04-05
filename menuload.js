window.onload = function() {
    const loaderBar = document.querySelector('.loader-bar');

    // Start the loader bar animation
    loaderBar.style.width = '100%';

    // Redirect after 3 seconds (3000ms)
    setTimeout(() => {
       window.location.href = "menu.html"; // Replace with the page you want to redirect to
    }, 3000);
};

