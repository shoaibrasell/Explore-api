function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((data) => displayPosts(data));
}
/*
  1. get the container element where you want to add the new element
  2. Create child element
  3. Set innerText or innerHTML
  4. AppendCHild
*/
function displayPosts(posts) {
  const postsContainer = document.getElementById('post-container');
  for (const post of posts) {
    const postDiv = document.createElement('div');
    postDiv.innerHTML = `
    <h4>User-</h4>
    <h5>Post : title</h5>
    <p></p>
    `;
   postsContainer.appendChild(postDiv);
  }
}

loadPosts();
