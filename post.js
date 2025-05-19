const postId = window.location.search.split("=")[1];
// const updatePostBtn = document.getElementById("updatePost");
const addNewPostBtn = document.getElementById("addNewPost");
console.log(postId);

const fetchData = async () => {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    const data = await result.json();
    console.log(data);
  } catch (error) {}
};

fetchData();

updatePostBtn.addEventListener("click", async () => {
  const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: "PUT",
  });

  const data = await result.json();
  if (result.status === 200) {
    alert("POST UPDATED");
  }

  console.log(data);
});
