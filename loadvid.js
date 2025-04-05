// Select the video element
let video = document.getElementById("myVideo");

// Add an event listener for the 'ended' event
video.addEventListener("ended", function() {
  // Redirect to the next page when the video ends
  window.location.href = "home.html"; // Replace with the URL of the next webpage
});