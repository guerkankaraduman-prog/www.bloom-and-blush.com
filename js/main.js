fetch('data/posts.json')
  .then(res => res.json())
  .then(posts => {

    const container = document.getElementById('posts-container');

    posts.forEach(post => {

      container.innerHTML += `
        <div class="post-card" style="background:white; padding:20px; margin-bottom:20px; box-shadow:0 10px 30px rgba(0,0,0,0.05);">

          <div style="font-size:40px; margin-bottom:10px;">
            ${post.image}
          </div>

          <p style="font-size:12px; color:gray;">
            ${post.date} · ${post.readTime}
          </p>

          <h2 style="margin:10px 0;">
            ${post.title}
          </h2>

          <p>
            ${post.excerpt}
          </p>

          <a href="post.html?id=${post.id}" style="color:#c2185b; font-weight:bold;">
            Read More →
          </a>

        </div>
      `;
    });

  })
  .catch(err => {
    console.error("JSON Fehler:", err);
  });
