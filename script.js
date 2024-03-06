document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('elusiveButton');

    button.addEventListener('mouseover', function() {
        // Get the viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate new random position for the button
        const newX = Math.random() * (viewportWidth - button.offsetWidth);
        const newY = Math.random() * (viewportHeight - button.offsetHeight);

        // Apply the new position
        button.style.position = 'absolute';
        button.style.left = newX + 'px';
        button.style.top = newY + 'px';

        // Play sound
        document.getElementById('laughSound').play();
    });
});
