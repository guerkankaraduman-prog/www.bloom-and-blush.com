fetch("data/posts.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("posts-container");

    if(container){
      data.forEach(post => {
        container.innerHTML += `
          <div class="post">
            <h3>${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="post.html?id=${post.id}">Read More</a>
          </div>
        `;
      });
    }
  });
