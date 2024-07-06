function toggleBtn(postId) {
    // Hide the content and show the textarea
    const content = document.getElementById(`content${postId}`);
    const textArea = document.getElementById(`textArea${postId}`);
    const editBtn = document.getElementById(`edit${postId}`);
    const saveBtn = document.getElementById(`save${postId}`);
    const cancelBtn = document.getElementById(`cancel${postId}`);

    if (content.style.display === 'none') {
        // If content is hidden, show it and hide the textarea and buttons
        content.style.display = 'block';
        textArea.style.display = 'none';
        editBtn.style.display = 'block';
        saveBtn.style.display = 'none';
        cancelBtn.style.display = 'none';

    } else {
        // If content is visible, hide it and show the textarea and buttons
        content.style.display = 'none';
        textArea.style.display = 'block';
        editBtn.style.display = 'none';
        saveBtn.style.display = 'block';
        cancelBtn.style.display = 'block';
    }
}

function submitHandler(id) {
    const textArea = document.getElementById(`textArea${id}`).value;
    console.log(`editPost/${id}`)
    fetch(`editPost/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')
        },
        body: JSON.stringify({
            content: textArea
        })
    })
    .then(response => response.json())
    .then(result => {
        if (result.message === 'Edit successful') {
            // Update the post content and toggle visibility
            document.getElementById(`content${id}`).innerHTML = textArea;
            document.getElementById(`content${id}`).style.display = 'block';
            document.getElementById(`textArea${id}`).style.display = 'none';
            document.getElementById(`edit${id}`).style.display = 'block';
            document.getElementById(`save${id}`).style.display = 'none';
            document.getElementById(`cancel${id}`).style.display = 'none';
        }
    })
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}