// dropdown.js
document.addEventListener('DOMContentLoaded', function() {
    const emailLink = document.querySelector('.dropdown-content a');
    emailLink.addEventListener('click', function(event) {
        event.preventDefault();
        const email = event.target.getAttribute('href').replace('mailto:', '');
        copyToClipboard(email);
    });
    
    function copyToClipboard(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Email copied to clipboard: ' + text);
    }
});
