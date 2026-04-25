// Main navigation and common functions
console.log('Taka Jachai app loaded');

// Add any global functions here
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg z-50 text-sm font-medium';
    toast.style.backgroundColor = type === 'error' ? '#DC2626' : '#2DD4BF';
    toast.style.color = '#fff';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}