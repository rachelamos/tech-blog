const deletePostHandler = async (event) => {
    event.preventDefault();
        const postId = event.target.getAttribute('post-id');
        const response = await fetch(`/api/post/${postId}`, {
            method: 'DELETE'
        });
        console.log(postId);
        console.log(response);
        if (response.ok) {
            document.location.replace(`/dashboard`);
        } else {
            alert('Failed to delete post');
        }
}