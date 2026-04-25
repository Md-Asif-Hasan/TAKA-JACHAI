// Privacy policy page interactions
document.addEventListener('DOMContentLoaded', () => {
    // Add any privacy-specific functionality here
    console.log('Privacy policy page loaded');
    
    // Make all external links open in new tab safely
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
});