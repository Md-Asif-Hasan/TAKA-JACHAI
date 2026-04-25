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

window.navigateTo = navigateTo;