const postsKey = "my-first-blog-posts";
const themeKey = "my-first-blog-theme";
const placeholderImage = "images/first-post-placeholder.svg";

function getMoonPhaseIcon() {
  const lunarCycle = 29.53058867;
  const knownNewMoon = new Date("2000-01-06T18:14:00Z");
  const today = new Date();
  const daysSinceNewMoon = (today - knownNewMoon) / (1000 * 60 * 60 * 24);
  const moonAge = ((daysSinceNewMoon % lunarCycle) + lunarCycle) % lunarCycle;

  if (moonAge < 1.84566) return "🌑";
  if (moonAge < 5.53699) return "🌒";
  if (moonAge < 9.22831) return "🌓";
  if (moonAge < 12.91963) return "🌔";
  if (moonAge < 16.61096) return "🌕";
  if (moonAge < 20.30228) return "🌖";
  if (moonAge < 23.99361) return "🌗";
  if (moonAge < 27.68493) return "🌘";
  return "🌑";
}

function updateThemeButton(themeButton) {
  const isDarkMode = document.body.classList.contains("dark-mode");
  themeButton.textContent = isDarkMode ? "☼" : getMoonPhaseIcon();
  themeButton.setAttribute("aria-label", isDarkMode ? "Switch to day mode" : "Switch to night mode");
  themeButton.title = isDarkMode ? "Switch to day mode" : "Current moon phase - switch to night mode";
}

function setupTheme() {
  const savedTheme = localStorage.getItem(themeKey);

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  const themeButton = document.createElement("button");
  themeButton.className = "theme-toggle";
  themeButton.type = "button";
  updateThemeButton(themeButton);

  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem(themeKey, isDarkMode ? "dark" : "light");
    updateThemeButton(themeButton);
  });

  document.body.appendChild(themeButton);
}

function getPosts() {
  const savedPosts = localStorage.getItem(postsKey);
  return savedPosts ? JSON.parse(savedPosts) : [];
}

function savePosts(posts) {
  localStorage.setItem(postsKey, JSON.stringify(posts));
}

function formatDate(dateText) {
  const date = new Date(dateText);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  return `${day}/${month}/${year}`;
}

function escapeHTML(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createPreview(post, index) {
  const previewText = post.body.slice(0, 120);
  const imageSource = post.image || placeholderImage;
  const article = document.createElement("article");
  article.innerHTML = `
    <div class="post-heading">
      <div class="post-marker">
        <time datetime="${post.createdAt}">${formatDate(post.createdAt)}</time>
        <img class="post-preview-image" src="${escapeHTML(imageSource)}" alt="">
      </div>
      <div>
        <h2>${escapeHTML(post.title)}</h2>
      </div>
    </div>
    <p>${escapeHTML(previewText)}${post.body.length > 120 ? "..." : ""}</p>
    <div class="post-actions">
      <div>
        <a class="edit-post" href="write.html?id=${index}">Edit</a>
        <button class="delete-post" type="button" data-index="${index}">Delete</button>
      </div>
      <a class="read-more" href="post.html?id=${index}">Read more...</a>
    </div>
  `;
  return article;
}

function isNewPost(post) {
  const oneMonth = 30 * 24 * 60 * 60 * 1000;
  const postAge = Date.now() - new Date(post.createdAt).getTime();
  return postAge < oneMonth;
}

function deletePost(index) {
  const posts = getPosts();
  posts.splice(index, 1);
  savePosts(posts);
  window.location.reload();
}

function showSavedPosts() {
  const savedPostsSection = document.querySelector("#saved-posts");
  const olderSavedPostsSection = document.querySelector("#older-saved-posts");
  if (!savedPostsSection) {
    return;
  }

  const posts = getPosts();
  const newPosts = posts
    .map((post, index) => ({ post, index }))
    .filter((item) => isNewPost(item.post));
  const olderPosts = posts
    .map((post, index) => ({ post, index }))
    .filter((item) => !isNewPost(item.post));

  if (newPosts.length > 0) {
    savedPostsSection.innerHTML = "<h2>New posts</h2>";
    newPosts.forEach((item) => {
      savedPostsSection.appendChild(createPreview(item.post, item.index));
    });
  }

  if (olderSavedPostsSection && olderPosts.length > 0) {
    olderSavedPostsSection.innerHTML = "<h2>Older saved posts</h2>";
    olderPosts.forEach((item) => {
      olderSavedPostsSection.appendChild(createPreview(item.post, item.index));
    });
  }

  document.querySelectorAll(".delete-post").forEach((button) => {
    button.addEventListener("click", () => {
      deletePost(Number(button.dataset.index));
    });
  });
}

function setupPostForm() {
  const form = document.querySelector("#post-form");
  if (!form) {
    return;
  }

  let hasUnsavedChanges = false;
  const params = new URLSearchParams(window.location.search);
  const hasPostId = params.has("id");
  const postId = Number(params.get("id"));
  const posts = getPosts();
  const postToEdit = hasPostId ? posts[postId] : null;
  const titleInput = document.querySelector("#post-title");
  const imageInput = document.querySelector("#post-image");
  const bodyInput = document.querySelector("#post-body");
  const saveButton = form.querySelector("button");

  if (postToEdit) {
    titleInput.value = postToEdit.title;
    imageInput.value = postToEdit.image || "";
    bodyInput.value = postToEdit.body;
    saveButton.textContent = "Update post";
  } else {
    titleInput.value = "";
    imageInput.value = "";
    bodyInput.value = "";
  }

  form.addEventListener("input", () => {
    hasUnsavedChanges = true;
  });

  window.addEventListener("beforeunload", (event) => {
    if (!hasUnsavedChanges) {
      return;
    }

    event.preventDefault();
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    hasUnsavedChanges = false;

    const updatedPost = {
      title: titleInput.value,
      image: imageInput.value,
      body: bodyInput.value,
      createdAt: new Date().toISOString()
    };

    if (postToEdit) {
      updatedPost.createdAt = postToEdit.createdAt;
      posts[postId] = updatedPost;
    } else {
      posts.unshift(updatedPost);
    }

    savePosts(posts);
    window.location.href = "index.html";
  });
}

function showFullSavedPost() {
  const savedPost = document.querySelector("#saved-post");
  if (!savedPost) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const postId = Number(params.get("id"));
  const post = getPosts()[postId];

  if (!post) {
    savedPost.innerHTML = "<p>Post not found.</p>";
    return;
  }

  document.querySelector("#saved-post-title").textContent = post.title;
  const paragraphs = escapeHTML(post.body).replaceAll("\n", "</p><p>");
  const imageSource = post.image || placeholderImage;
  savedPost.innerHTML = `
    <time datetime="${post.createdAt}">${formatDate(post.createdAt)}</time>
    <img src="${escapeHTML(imageSource)}" alt="">
    <p>${paragraphs}</p>
  `;
}

function updatePostCount() {
  const postCount = document.querySelector("#post-count");
  if (!postCount) {
    return;
  }

  const articles = document.querySelectorAll("article");
  const visibleArticles = Array.from(articles).filter((article) => !article.hidden);
  const count = visibleArticles.length;
  postCount.textContent = `${count} ${count === 1 ? "post" : "posts"}`;
}

function setupSearch() {
  const searchInput = document.querySelector("#post-search");
  const clearSearch = document.querySelector("#clear-search");
  const noResults = document.querySelector("#no-search-results");
  const sectionsToHide = document.querySelectorAll("#saved-posts, #older-saved-posts, #posts, #about, footer");
  if (!searchInput) {
    return;
  }

  function filterPosts() {
    const searchText = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll("article");

    articles.forEach((article) => {
      const articleText = article.textContent.toLowerCase();
      const matchesSearch = articleText.includes(searchText);
      article.hidden = !matchesSearch;
    });

    if (noResults) {
      const hasMatches = Array.from(articles).some((article) => !article.hidden);
      const showNoResults = !hasMatches && searchText !== "";
      noResults.hidden = !showNoResults;
      sectionsToHide.forEach((section) => {
        section.hidden = showNoResults;
      });
    }

    if (clearSearch) {
      clearSearch.hidden = searchText === "";
    }

    updatePostCount();
  }

  searchInput.addEventListener("input", filterPosts);

  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      searchInput.value = "";
      filterPosts();
      searchInput.focus();
    });
  }
}

setupTheme();
showSavedPosts();
setupPostForm();
showFullSavedPost();
setupSearch();
updatePostCount();
