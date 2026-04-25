// Navigation between screens
const navigateTo = (screen) => {
    const screens = {
        'Settings': 'settings.html',
        'Dashboard': 'dashboard.html',
        'Home': 'index.html',
        'Privacy': 'privacy-policy.html'
    };
    
    if (screens[screen]) {
        window.location.href = screens[screen];
    }
};

// Make navigateTo available globally
window.navigateTo = navigateTo;