// Select elements
const profilePicture = document.getElementById('profile-picture');
const uploadPicture = document.getElementById('upload-picture');
const saveProfileBtn = document.getElementById('save-profile-btn');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const bioInput = document.getElementById('bio');
const addPostBtn = document.getElementById('add-post-btn');
const postInput = document.getElementById('post-input');
const postsList = document.getElementById('posts-list');

// Change profile picture
uploadPicture.addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      profilePicture.src = e.target.result; // Update profile picture
    };
    reader.readAsDataURL(file); // Read the file as a data URL
  }
});

// Save profile changes
saveProfileBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const bio = bioInput.value.trim();

  if (!username || !email) {
    alert('Username and email are required!');
    return;
  }

  alert(`Profile updated successfully!
  Username: ${username}
  Email: ${email}
  Bio: ${bio}`);
});

// Add a post
addPostBtn.addEventListener('click', () => {
  const postContent = postInput.value.trim();
  if (!postContent) {
    alert('Please write something to post!');
    return;
  }

  // Create post element
  const postItem = document.createElement('li');
  postItem.innerHTML = `
    <p>${postContent}</p>
    <button class="like-btn">👍 Like (<span class="like-count">0</span>)</button>
  `;

  // Add like functionality
  const likeBtn = postItem.querySelector('.like-btn');
  const likeCount = postItem.querySelector('.like-count');
  let liked = false;

  likeBtn.addEventListener('click', () => {
    if (!liked) {
      liked = true;
      likeCount.textContent = parseInt(likeCount.textContent) + 1; // Increment likes
      likeBtn.disabled = true; // Disable the button after one like
    }
  });

  // Add the post to the list
  postsList.prepend(postItem);
  postInput.value = ''; // Clear the input
});
