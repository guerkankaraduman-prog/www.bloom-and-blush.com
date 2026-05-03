// BLOG LISTE
if (document.getElementById('posts-container')) {

  fetch('data/posts.json')
    .then(res => res.json())
    .then(posts => {

      const container = document.getElementById('posts-container');

      posts.forEach(post => {
        container.innerHTML += `
          <div class="post-card">
            <div style="font-size:40px">${post.image}</div>
            <p>${post.date} · ${post.readTime}</p>
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="post.html?id=${post.id}">Read More</a>
          </div>
        `;
      });

    });
}

// EINZELNER POST
if (document.getElementById('post-container')) {

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

  fetch('data/posts.json')
    .then(res => res.json())
    .then(posts => {

      const post = posts.find(p => p.id == id);

      document.getElementById('post-container').innerHTML = `
        <h1>${post.title}</h1>
        <p>${post.date} · ${post.readTime}</p>
        <p>${post.content}</p>
      `;
    });
}
