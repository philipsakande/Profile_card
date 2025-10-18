// Update time display
function updateTime() {
    const timeElement = document.querySelector('[data-testid="test-user-time"]');
    timeElement.textContent = Date.now();
}

// Update time immediately and then every 100ms
updateTime();
setInterval(updateTime, 100);

// Add focus styles for keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});