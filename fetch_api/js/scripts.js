const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#post-container")

//get id from url
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

//gel all posts
async function getAllPosts() {
  const response = await fetch(url)

  // console.log(response);

  const data = await response.json()
  console.log(data)

  loadingElement.classList.add("hide")

  data.map((post) => {
    const div = document.createElement("div")
    const title = document.createElement("h2")
    const body = document.createElement("p")
    const link = document.createElement("a")

    title.innerText = post.title
    body.innerText = post.body
    link.innerText = "Ler"
    link.setAttribute("href", `/post.html?id=${post.id}`)

    div.appendChild(title)
    div.appendChild(body)
    div.appendChild(link)


    postsContainer.appendChild(div)
  })

}
if(!postId){
  getAllPosts()
} else {
  console.log(postId)
}