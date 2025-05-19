const container = document.querySelector(".container");
// fetch("https://jsonplaceholder.typicode.com/todos")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

const fetchData = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await result.json();

  data.forEach((d) => {
    const btn = document.createElement("button");
    btn.innerText = `Go To Post with Id ${d.id}`;
    btn.addEventListener("click", () => {
      window.location.href = `http://127.0.0.1:5500/post.html?postId=${d.id}`;
    });
    container.appendChild(btn);
  });
};

fetchData();

console.log("Hello World 2");
