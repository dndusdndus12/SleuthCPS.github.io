// Execute when the DOM content is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {
    
    // --- Feature 1: Page Load Animation ---
    const container = document.querySelector('.container');
    if (container) {
        // Use a short delay to ensure assets are ready before fade-in
        setTimeout(() => {
            container.classList.add('loaded');
        }, 100);
    }

    // --- Feature 2: Accordion for Activities Page ---
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    const toggleAllButton = document.getElementById('toggle-all-btn');

    // Logic for individual accordion items
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Toggle active state for the header
            header.classList.toggle('active');

            // Get the content panel
            const content = header.nextElementSibling;
            
            // Expand or collapse the panel
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Logic for the "Expand All / Collapse All" button
    if (toggleAllButton) {
        toggleAllButton.addEventListener('click', () => {
            const isExpanding = toggleAllButton.textContent === 'Expand All';
            toggleAllButton.textContent = isExpanding ? 'Collapse All' : 'Expand All';

            accordionHeaders.forEach(header => {
                const content = header.nextElementSibling;
                if (isExpanding) {
                    header.classList.add('active');
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    header.classList.remove('active');
                    content.style.maxHeight = null;
                }
            });
        });
    }
});