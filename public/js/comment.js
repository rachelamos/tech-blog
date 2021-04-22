const commentFormHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    const comment = document.querySelector('#comment-input').value.trim();
    const postId = event.target.getAttribute('post-id');
    console.log('this is ')
  
    if (comment) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/comment/', {
        method: 'POST',
        body: JSON.stringify({ comment, postId }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace(`/post/${postId}`);
      } else {
        alert('Failed to post comment.');
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentFormHandler);