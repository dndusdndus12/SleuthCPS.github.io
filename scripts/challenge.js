// Execute when the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
    
    // Find the main container element
    const container = document.querySelector('.container');
    
    // If the container exists, add the 'loaded' class to trigger 
    // the fade-in animation defined in the CSS.
    if (container) {
        container.classList.add('loaded');
    }

});


