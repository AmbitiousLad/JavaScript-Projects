const apiKey = "MimErsan5KObxeEGDKDAk2LAsp98VYvcJj185n8uVF4"


const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const SearchResults = document.querySelector(".search-results")
const ShowMore = document.getElementById("show-more-button")
const tl = gsap.timeline()
tl.to(".nav",{
    width:"100%",
    duration:0.5
})
tl.from("h1",{
    y:-20,
    opacity:0,
    duration:1
})

let inputData = ""
let page = 1



const cursor = document.getElementById('cursor')
const Body = document.body;
Body.addEventListener('mousemove',(e)=>{
    cursor.style.display="block";
    gsap.to(cursor,{
        x:e.x,
        y:e.y,
        ease:"back.out"
    })
})
Body.addEventListener('mouseleave',(e)=>{
   cursor.style.display="none";
})





async function searchImages() {
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results;
        if (page === 1) {
            SearchResults.innerHTML = "";
        }
        
        results.forEach(result => {
            const imageWrapper = document.createElement("div");
            imageWrapper.classList.add("search-result");
            const image = document.createElement('img');
            image.src = result.urls.small;
            image.alt = result.alt_description;
            const imageLink = document.createElement('a');
            imageLink.href = result.links.html;
            imageLink.target = "_blank";
            imageLink.textContent = result.alt_description;
            
            imageWrapper.appendChild(image);
            imageWrapper.appendChild(imageLink);
            SearchResults.appendChild(imageWrapper);
        });
        
        page++;
        if (page > 1) {
            ShowMore.style.display = "block";
        }
    } catch (error) {
        console.error("Error Fetching Images", error);
    }
}

const searchButton = document.getElementById('search-btn')
searchButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission
    searchImages();
});

// formEl.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     page = 1
//     searchImages()
// })

ShowMore.addEventListener("click",(event)=>{
    searchImages()
})