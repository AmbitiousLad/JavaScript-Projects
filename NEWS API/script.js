const tl = gsap.timeline()

tl.from(".logo",{
    y:-30,
    opacity:0,
    duration:1,
    delay:0.5
})
tl.from("#search-input",{
    x:200,
    opacity:0,
    duration:0.5
   
})

tl.from("#search-button",{
    x:200,
    opacity:0,
    duration:0.5
    
})


const apiKey = '5ed7527c5072452cb73730481137cfa7'

const blogCont = document.getElementById('blog-container')

const searchField = document.getElementById('search-input')

const searchButton= document.getElementById('search-button')

async function fetchRandomNews(){
    try{
     const apiUrl =  `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apikey=${apiKey}`
     const response = await fetch(apiUrl)
     const data = await response.json()
     return data.articles;
    }
    catch(error){
       console.error("Error fetching randomNews",error)
       return []

    }
}

function displayBlogs(articles){
    blogCont.innerHTML=""
    articles.forEach((article) => {
        const blogCard = document.createElement('div')
        blogCard.classList.add("blog-card")
        const img = document.createElement('img')
        img.src = article.urlToImage
        img.alt = article.title
        const title = document.createElement('h2')
        const trucatedTtitle = article.title.length>30?article.title.slice(0,30)+"....":article.title
        title.textContent = trucatedTtitle
        const description = document.createElement('p')
        const trucatedDesc = article.description.length>120?article.description.slice(0,120)+"....":article.description
        title.textContent = trucatedTtitle
        description.textContent = trucatedDesc

        blogCard.appendChild(img)
        blogCard.appendChild(title)
        blogCard.appendChild(description)
        blogCard.addEventListener('click',()=>{
            window.open(article.url,"_blank")
        })
        blogCont.appendChild(blogCard);
    });
}

setTimeout(() => {
    tl.from(".blog-card", {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.3
    });
}, 100); 


searchButton.addEventListener('click',async()=>{
    const query = searchField.value.trim()
    if(query!=="")
        {
            try{
               const articles = await fetchNewsQuery(query)
               displayBlogs(articles)
            }

            catch(error)
            {
                console.error("Error Fetching News by Query",error)
            }
        }
})

async function fetchNewsQuery(query){
    try{
        const apiUrl =  `https://newsapi.org/v2/everything?q=${query}&pageSize=10&apikey=${apiKey}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data.articles;
       }
       catch(error){
          console.error("Error fetching randomNews",error)
          return []
       }
}



(async()=>{
    try{
    const articles = await fetchRandomNews()
    displayBlogs(articles)
    }catch(error){
    console.error("Error fetching",error)
    }
})()

// fetchRandomNews()