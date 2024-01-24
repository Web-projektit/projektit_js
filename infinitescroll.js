fetch(`/posts?start=${start}&end=${end}`)
    .then(response => response.json())
    .then(data => {
        data.posts.forEach(addPost)
    })
    .catch(error => {
        console.log('Error:', error);
    });


    let addPost = contents => {
        // Create new post
        const post = document.createElement('div');
        post.className = 'post';
        post.innerHTML = contents;
        // Add post to DOM
        document.querySelector('#posts').append(post);
    }
