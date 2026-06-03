let scrollInterval; // Variable to store the scrolling interval

    // Function to automatically scroll the container
function startAutoScroll() {
    scrollInterval = setInterval(() => {
        const container = document.getElementById('project1');
        container.scrollTop += 1; // Scroll down by 1 pixel

        // Reset scroll to top if it reaches the bottom
        if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
            container.scrollTop = 0;
        }
    }, 10); // Scroll every 10 milliseconds
}

// Function to stop auto-scrolling
function stopAutoScroll() {
    clearInterval(scrollInterval); // Clear the interval to stop scrolling
}

// Add event listeners to start/stop scrolling on hover
const scrollContainer = document.getElementById('project1');
scrollContainer.addEventListener('mouseenter', startAutoScroll); // Start scroll on hover
scrollContainer.addEventListener('mouseleave', stopAutoScroll);  // Stop scroll on mouse leave