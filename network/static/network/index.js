document.addEventListener('DOMContentLoaded', function() {

    console.log('the script is working fine')
    
    const form = document.querySelector('#post-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('submitted');
        });
    } else {
        console.error('Form not found');
    }
});

// function new_post() {
// }