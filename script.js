document.getElementById('nextpg').addEventListener('click', function() {
    // Show the progress bar
    var progressBar = document.getElementById('progressBar');
    var progress = document.getElementById('progress');
    progressBar.style.display = 'block';

    // Disable the button to prevent multiple clicks
    document.getElementById('nextpg').disabled = true;

    // Simulate progress over 3 seconds
    var width = 0;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            // After the progress reaches 100%, redirect to the next page
            window.location.href = 'loadvid.html'; // Replace with your actual page
        } else {
            width += 1; // Increase the width by 1% every 30ms
            progress.style.width = width + '%';
        }
    }, 30);
});
