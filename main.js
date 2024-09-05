const thePostSection = document.querySelector(".thePostSection")

let posts = []
let postsId = 1
let postsImage = 1

function postsMaker(){
for (let i = 0; i < 20; i++) {
   posts.push(
    {
      id:postsId,
      images:postsImage

    },
   )
   
   postsId++
   postsImage++
}
}

fetch('./text.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
  })


const initApp = () =>{
  postsMaker()
  posts.forEach((value,key)=>{
        let newDiv = document.createElement("div");
         $(newDiv).addClass("post")
        // newDiv.classList.add(item);
        newDiv.innerHTML = `
        <div class="header">
        <div class="thePostDp">
        <div><img src = "./dp${value.images}.jpg"></div>
        </div>
        <div class="postUsernames">
        <div></div>
        <div></div>
        </div>
        <div class="postMoreButton"></div>
        </div> 
        <div class="imgDiv"><img src = "./image${value.images}.jpg"></div>
        <div class="comments"></div>
        `;
        thePostSection.appendChild(newDiv)
    })
}
initApp()