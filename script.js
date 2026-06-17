const postsKey = "my-first-blog-posts";
const themeKey = "my-first-blog-theme";
const savedArticlesKey = "my-first-blog-saved-articles";
const thoughtsKey = "wandering-collective-thoughts";
const thoughtsClearKey = "wandering-collective-thoughts-last-clear";
const placeholderImage = "images/first-post-placeholder.svg";
const themes = [
  { name: "cyberpunk", label: "Cyberpunk" },
  { name: "gotham-city", label: "Gotham City" },
  { name: "pokemon-gameboy", label: "Pokemon Gameboy" }
];
const siteMoods = [
  "confused but building",
  "small win unlocked",
  "breaking things politely",
  "GitHub Pages survivor",
  "backend avoided successfully"
];
const chillQuotes = [
  "Stay for the rain.",
  "Backend avoided successfully.",
  "Small rooms can hold big ideas.",
  "Nothing urgent is happening here.",
  "Open a tab and let the internet breathe."
];
const radioGardenUrl = "https://radio.garden/";
const starterPosts = [
  {
    title: "First Website Chaos",
    createdAt: "2026-06-13T12:00:00.000Z",
    image: "images/first-post-placeholder.svg",
    bodyHTML: "<p>I built this while half-understanding what I was doing. The weird part is that it still worked, which might be the most motivating thing about learning web development.</p>",
    tags: ["web dev", "chaos log"],
    isStarter: true
  },
  {
    title: "Why GitHub Pages Feels Weird",
    createdAt: "2026-06-14T12:00:00.000Z",
    image: "images/second-post-placeholder.svg",
    bodyHTML: "<p>Free hosting is good. Syncing posts is tomorrow's problem. For now, getting a real link on the internet already feels like a small portal opened.</p>",
    tags: ["notes", "publishing"],
    isStarter: true
  },
  {
    title: "Local Storage Is Not Magic",
    createdAt: "2026-06-14T15:00:00.000Z",
    image: "images/third-post-placeholder.svg",
    bodyHTML: "<p>Posts saved in one browser stay in that browser. It is useful for learning, but it also explains why real websites eventually need databases, backends, or publishing workflows.</p>",
    tags: ["javascript", "learning"],
    isStarter: true
  }
];
const starterThoughts = [
  {
    body: "Maybe a website can feel less like a feed and more like a room.",
    createdAt: "2026-06-15T18:30:00.000Z",
    isStarter: true
  },
  {
    body: "I like the idea that unfinished things can still have atmosphere.",
    createdAt: "2026-06-16T10:15:00.000Z",
    isStarter: true
  },
  {
    body: "Small public projects are weirdly motivating because they make learning visible.",
    createdAt: "2026-06-17T09:45:00.000Z",
    isStarter: true
  }
];

function getPosts() {
  const savedPosts = localStorage.getItem(postsKey);
  return savedPosts ? JSON.parse(savedPosts) : [];
}

function savePosts(posts) {
  localStorage.setItem(postsKey, JSON.stringify(posts));
}

function getSavedArticleIds() {
  const savedArticles = localStorage.getItem(savedArticlesKey);
  return savedArticles ? JSON.parse(savedArticles) : [];
}

function saveArticleIds(articleIds) {
  localStorage.setItem(savedArticlesKey, JSON.stringify(articleIds));
}

function getThoughts() {
  const savedThoughts = localStorage.getItem(thoughtsKey);
  return savedThoughts ? JSON.parse(savedThoughts) : [];
}

function saveThoughts(thoughts) {
  localStorage.setItem(thoughtsKey, JSON.stringify(thoughts));
}

function getThisMondayNoon() {
  const now = new Date();
  const mondayNoon = new Date(now);
  const daysSinceMonday = (now.getDay() + 6) % 7;
  mondayNoon.setDate(now.getDate() - daysSinceMonday);
  mondayNoon.setHours(12, 0, 0, 0);
  return mondayNoon;
}

function clearThoughtsAfterMondayNoon() {
  const now = new Date();
  const mondayNoon = getThisMondayNoon();
  const lastClear = localStorage.getItem(thoughtsClearKey);

  if (now >= mondayNoon && lastClear !== mondayNoon.toISOString()) {
    saveThoughts([]);
    localStorage.setItem(thoughtsClearKey, mondayNoon.toISOString());
  }
}

function getPostId(post) {
  return post.isStarter ? `starter-${post.starterIndex}` : `local-${post.localIndex}`;
}

function getDisplayPosts() {
  const localPosts = getPosts().map((post, index) => ({
    ...post,
    localIndex: index,
    isStarter: false
  }));

  const builtInPosts = starterPosts.map((post, index) => ({
    ...post,
    starterIndex: index
  }));

  return [...localPosts, ...builtInPosts].sort((firstPost, secondPost) => {
    return new Date(secondPost.createdAt) - new Date(firstPost.createdAt);
  });
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

function stripHTML(html) {
  const container = document.createElement("div");
  container.innerHTML = html;
  return container.textContent || "";
}

function sanitizeHTML(html) {
  const template = document.createElement("template");
  template.innerHTML = html;
  const allowedTags = ["A", "B", "BLOCKQUOTE", "BR", "DIV", "EM", "H2", "H3", "I", "LI", "OL", "P", "SPAN", "STRONG", "U", "UL"];
  const allowedStyles = ["font-weight", "font-style", "text-decoration", "text-align"];

  template.content.querySelectorAll("*").forEach((element) => {
    if (!allowedTags.includes(element.tagName)) {
      element.replaceWith(...element.childNodes);
      return;
    }

    [...element.attributes].forEach((attribute) => {
      const isSafeLink = element.tagName === "A" && attribute.name === "href" && attribute.value.startsWith("https://");
      const isSafeStyle = attribute.name === "style";

      if (isSafeStyle) {
        const keptStyles = element
          .getAttribute("style")
          .split(";")
          .map((style) => style.trim())
          .filter((style) => allowedStyles.includes(style.split(":")[0].trim()))
          .join("; ");

        if (keptStyles) {
          element.setAttribute("style", keptStyles);
        } else {
          element.removeAttribute("style");
        }
      } else if (!isSafeLink) {
        element.removeAttribute(attribute.name);
      }
    });
  });

  return template.innerHTML;
}

function getPostBodyHTML(post) {
  return post.bodyHTML || `<p>${escapeHTML(post.body || "")}</p>`;
}

function getReadingTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function getPostMood(index) {
  const moods = [
    "confused but building",
    "small win unlocked",
    "breaking things politely",
    "notes from the mess",
    "half lost, still moving"
  ];
  return moods[index % moods.length];
}

function getPostTags(post, index) {
  if (post.tags && post.tags.length > 0) {
    return post.tags;
  }

  const tagSets = [
    ["web dev", "chaos log"],
    ["notes", "learning"],
    ["project", "build log"],
    ["debugging", "tiny wins"]
  ];
  return tagSets[index % tagSets.length];
}

function createPreview(post, index) {
  const plainBody = stripHTML(getPostBodyHTML(post));
  const previewText = plainBody.slice(0, 120);
  const imageSource = post.image || placeholderImage;
  const article = document.createElement("article");
  const tags = getPostTags(post, index);
  article.className = "post-card";
  const postLink = post.isStarter ? `post.html?starter=${post.starterIndex}` : `post.html?id=${post.localIndex}`;
  const postId = getPostId(post);
  const isSaved = getSavedArticleIds().includes(postId);
  article.dataset.postId = postId;
  article.dataset.href = postLink;
  article.tabIndex = 0;
  article.setAttribute("role", "link");
  const editControls = post.isStarter
    ? ""
    : `
      <div>
        <a class="edit-post" href="write.html?id=${post.localIndex}">Edit</a>
        <button class="delete-post" type="button" data-index="${post.localIndex}">Delete</button>
      </div>
    `;
  article.innerHTML = `
    <button class="save-post" type="button" data-post-id="${postId}" aria-pressed="${isSaved}">
      ${isSaved ? "★" : "☆"}
    </button>
    <div class="post-heading">
      <div class="post-marker">
        <time datetime="${post.createdAt}">${formatDate(post.createdAt)}</time>
        <img class="post-preview-image" src="${escapeHTML(imageSource)}" alt="">
      </div>
      <div>
        <h2>${escapeHTML(post.title)}</h2>
      </div>
    </div>
    <div class="post-meta">
      ${tags.map((tag) => `<span class="tag">${escapeHTML(tag)}</span>`).join("")}
      <span>${getReadingTime(plainBody)}</span>
    </div>
    <p class="mood">Mood: ${getPostMood(index)}</p>
    <p>${escapeHTML(previewText)}${plainBody.length > 120 ? "..." : ""}</p>
    <div class="post-actions">
      ${editControls}
      <a class="read-more" href="${postLink}">Read more...</a>
    </div>
  `;
  article.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      return;
    }

    window.location.href = postLink;
  });
  article.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      window.location.href = postLink;
    }
  });
  return article;
}

function isNewPost(post) {
  if (post.isStarter) {
    return true;
  }

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

function toggleSavedArticle(postId) {
  const savedArticleIds = getSavedArticleIds();
  const isSaved = savedArticleIds.includes(postId);
  const nextSavedArticleIds = isSaved
    ? savedArticleIds.filter((savedId) => savedId !== postId)
    : [...savedArticleIds, postId];

  saveArticleIds(nextSavedArticleIds);

  document.querySelectorAll(`.save-post[data-post-id="${postId}"]`).forEach((button) => {
    button.textContent = isSaved ? "☆" : "★";
    button.setAttribute("aria-pressed", String(!isSaved));
  });
}

function showSavedPosts() {
  const savedPostsSection = document.querySelector("#saved-posts");
  const olderSavedPostsSection = document.querySelector("#older-saved-posts");
  if (!savedPostsSection) {
    return;
  }

  const posts = getDisplayPosts();
  const newPosts = posts
    .map((post, index) => ({ post, index }))
    .filter((item) => isNewPost(item.post));
  const olderPosts = posts
    .map((post, index) => ({ post, index }))
    .filter((item) => !isNewPost(item.post));

  savedPostsSection.innerHTML = "<h2>New posts</h2>";
  if (newPosts.length > 0) {
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

  document.querySelectorAll(".save-post").forEach((button) => {
    button.addEventListener("click", () => {
      toggleSavedArticle(button.dataset.postId);
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
  const imagePreview = document.querySelector("#image-preview");
  const bodyInput = document.querySelector("#post-body");
  const saveButton = form.querySelector("button");
  let selectedImage = postToEdit ? postToEdit.image || "" : "";

  function showImagePreview(imageSource) {
    if (!imagePreview) {
      return;
    }

    if (imageSource) {
      imagePreview.src = imageSource;
      imagePreview.hidden = false;
    } else {
      imagePreview.removeAttribute("src");
      imagePreview.hidden = true;
    }
  }

  if (postToEdit) {
    titleInput.value = postToEdit.title;
    bodyInput.innerHTML = getPostBodyHTML(postToEdit);
    showImagePreview(selectedImage);
    saveButton.textContent = "Update post";
  } else {
    titleInput.value = "";
    bodyInput.innerHTML = "";
    showImagePreview("");
  }

  imageInput.addEventListener("change", () => {
    const file = imageInput.files[0];
    if (!file) {
      selectedImage = "";
      showImagePreview("");
      return;
    }

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      selectedImage = reader.result;
      showImagePreview(selectedImage);
      hasUnsavedChanges = true;
    });
    reader.readAsDataURL(file);
  });

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
    const cleanBody = sanitizeHTML(bodyInput.innerHTML);

    if (stripHTML(cleanBody).trim() === "") {
      hasUnsavedChanges = true;
      bodyInput.focus();
      return;
    }

    const updatedPost = {
      title: titleInput.value,
      image: selectedImage,
      bodyHTML: cleanBody,
      createdAt: new Date().toISOString()
    };

    if (postToEdit) {
      updatedPost.createdAt = postToEdit.createdAt;
      posts[postId] = updatedPost;
    } else {
      posts.unshift(updatedPost);
    }

    try {
      savePosts(posts);
      window.location.href = "index.html";
    } catch (error) {
      hasUnsavedChanges = true;
      alert("That post is too large to save in the browser. Try using a smaller image.");
    }
  });
}

function countWords(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function setupThoughtForm() {
  const form = document.querySelector("#thought-form");
  if (!form) {
    return;
  }

  const thoughtBody = document.querySelector("#thought-body");
  const wordCount = document.querySelector("#thought-word-count");

  function updateWordCount() {
    const totalWords = countWords(thoughtBody.value);
    wordCount.textContent = totalWords;
    wordCount.classList.toggle("over-limit", totalWords > 200);
  }

  thoughtBody.addEventListener("input", updateWordCount);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const thoughtText = thoughtBody.value.trim();
    const totalWords = countWords(thoughtText);

    if (!thoughtText || totalWords > 200) {
      thoughtBody.focus();
      updateWordCount();
      return;
    }

    const thoughts = getThoughts();
    thoughts.unshift({
      body: thoughtText,
      createdAt: new Date().toISOString()
    });

    saveThoughts(thoughts);
    window.location.href = "collective-thinking.html";
  });

  updateWordCount();
}

function showCollectiveThoughts() {
  const thoughtList = document.querySelector("#collective-thinking-list");
  if (!thoughtList) {
    return;
  }

  const thoughts = [...getThoughts(), ...starterThoughts];

  if (thoughts.length === 0) {
    thoughtList.innerHTML = `<p class="empty-posts">No thoughts yet.</p>`;
    return;
  }

  thoughtList.innerHTML = thoughts.map((thought) => `
    <article class="thought-card">
      <time datetime="${thought.createdAt}">${formatDate(thought.createdAt)}</time>
      <p>${escapeHTML(thought.body)}</p>
      ${thought.isStarter ? `<p class="hint">example thought</p>` : ""}
    </article>
  `).join("");
}

function showFullSavedPost() {
  const savedPost = document.querySelector("#saved-post");
  if (!savedPost) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const isStarterPost = params.has("starter");
  const postId = Number(params.get(isStarterPost ? "starter" : "id"));
  const post = isStarterPost ? starterPosts[postId] : getPosts()[postId];

  if (!post) {
    savedPost.innerHTML = "<p>Post not found.</p>";
    return;
  }

  document.querySelector("#saved-post-title").textContent = post.title;
  const imageSource = post.image || placeholderImage;
  savedPost.innerHTML = `
    <h2 class="zen-title">${escapeHTML(post.title)}</h2>
    <time datetime="${post.createdAt}">${formatDate(post.createdAt)}</time>
    <img src="${escapeHTML(imageSource)}" alt="">
    <div class="post-content">${sanitizeHTML(getPostBodyHTML(post))}</div>
  `;

  if (params.get("zen") === "1") {
    document.body.classList.add("zen-mode");
  }
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
  const sectionsToHide = document.querySelectorAll("#saved-posts, #older-saved-posts, #about, footer");
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

function setupRandomPost() {
  const randomPostButton = document.querySelector("#random-post");
  if (!randomPostButton) {
    return;
  }

  randomPostButton.addEventListener("click", () => {
    const posts = Array.from(document.querySelectorAll(".post-card")).filter((post) => !post.hidden);
    if (posts.length === 0) {
      randomPostButton.textContent = "No posts yet";
      return;
    }

    const randomIndex = Math.floor(Math.random() * posts.length);
    const randomPost = posts[randomIndex];
    randomPost.classList.add("spotlight");
    randomPost.scrollIntoView({ behavior: "smooth", block: "center" });

    window.setTimeout(() => {
      randomPost.classList.remove("spotlight");
    }, 1200);
  });
}

function setupControlPanel() {
  const savedFilterButton = document.querySelector("#saved-filter");
  let showingSavedOnly = false;

  if (savedFilterButton) {
    savedFilterButton.addEventListener("click", () => {
      showingSavedOnly = !showingSavedOnly;
      const savedArticleIds = getSavedArticleIds();

      document.querySelectorAll(".post-card").forEach((card) => {
        card.hidden = showingSavedOnly && !savedArticleIds.includes(card.dataset.postId);
      });

      savedFilterButton.setAttribute("aria-pressed", String(showingSavedOnly));
      savedFilterButton.textContent = showingSavedOnly ? "All Articles" : "Saved Articles";
      updatePostCount();
    });
  }
}

function setupRandomQuote() {
  const quote = document.querySelector("#random-quote");
  const quoteButton = document.querySelector("#random-quote-button");
  if (!quote || !quoteButton) {
    return;
  }

  quoteButton.addEventListener("click", () => {
    const randomQuote = chillQuotes[Math.floor(Math.random() * chillQuotes.length)];
    quote.textContent = randomQuote;
  });
}

function setupRandomArticle() {
  const articleButton = document.querySelector("#random-article-button");
  if (!articleButton) {
    return;
  }

  articleButton.addEventListener("click", () => {
    const posts = getDisplayPosts();
    if (posts.length === 0) {
      articleButton.textContent = "No articles yet";
      return;
    }

    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    const postLink = randomPost.isStarter
      ? `post.html?starter=${randomPost.starterIndex}&zen=1`
      : `post.html?id=${randomPost.localIndex}&zen=1`;

    window.location.href = postLink;
  });
}

function setupRandomRadio() {
  const radioButton = document.querySelector("#random-radio-button");
  if (!radioButton) {
    return;
  }

  radioButton.addEventListener("click", () => {
    window.open(radioGardenUrl, "_blank", "noopener,noreferrer");
  });
}

function setupCollapsibleSidebar() {
  const sidebarButtons = document.querySelectorAll(".desk-label[aria-controls]");

  sidebarButtons.forEach((button) => {
    const section = document.querySelector(`#${button.getAttribute("aria-controls")}`);
    const icon = button.querySelector("span");

    if (!section) {
      return;
    }

    button.addEventListener("click", () => {
      const isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      section.classList.toggle("is-collapsed", isOpen);

      if (icon) {
        icon.textContent = isOpen ? "+" : "-";
      }
    });
  });
}

function setupCollapsibleMoodPanel() {
  const moodPanel = document.querySelector(".mood-panel-compact");
  const moodToggle = document.querySelector(".mood-toggle");
  if (!moodPanel || !moodToggle) {
    return;
  }

  const icon = moodToggle.querySelector("span");

  moodToggle.addEventListener("click", () => {
    const isOpen = moodToggle.getAttribute("aria-expanded") === "true";
    moodToggle.setAttribute("aria-expanded", String(!isOpen));
    moodPanel.classList.toggle("is-collapsed", isOpen);

    if (icon) {
      icon.textContent = isOpen ? "+" : "-";
    }
  });
}

function setupZenMode() {
  const postArticle = document.querySelector("#saved-post") || document.querySelector("main article");
  if (!postArticle) {
    return;
  }

  document.addEventListener("keydown", (event) => {
    const activeElement = document.activeElement;
    const isWriting = activeElement && (
      activeElement.tagName === "INPUT" ||
      activeElement.tagName === "TEXTAREA" ||
      activeElement.isContentEditable
    );

    if (isWriting || event.key.toLowerCase() !== "z") {
      return;
    }

    document.body.classList.toggle("zen-mode");
  });
}

function setupTheme() {
  const savedTheme = localStorage.getItem(themeKey) || "cyberpunk";
  const currentMood = document.querySelector("#current-mood");

  function applyTheme(themeName) {
    themes.forEach((theme) => {
      document.body.classList.remove(theme.name);
    });

    document.body.classList.remove("dark", "dark-mode", "light", "paper", "terminal");
    document.body.classList.add(themeName);
    localStorage.setItem(themeKey, themeName);

    const activeTheme = themes.find((theme) => theme.name === themeName);
    if (currentMood && activeTheme) {
      currentMood.textContent = `Current mood: ${activeTheme.label}`;
    }

    document.querySelectorAll("[data-mode]").forEach((button) => {
      const isActive = button.dataset.mode === themeName;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.addEventListener("click", () => {
      applyTheme(button.dataset.mode);
    });
  });

  const safeTheme = themes.some((theme) => theme.name === savedTheme) ? savedTheme : "cyberpunk";
  applyTheme(safeTheme);
}

setupTheme();
clearThoughtsAfterMondayNoon();
showSavedPosts();
setupPostForm();
setupThoughtForm();
showCollectiveThoughts();
showFullSavedPost();
setupSearch();
setupRandomPost();
setupControlPanel();
setupZenMode();
setupRandomQuote();
setupRandomArticle();
setupRandomRadio();
setupCollapsibleSidebar();
setupCollapsibleMoodPanel();
updatePostCount();

