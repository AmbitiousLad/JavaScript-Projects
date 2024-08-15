// main.js

const url = "https://meme-api.herokuapp.com/gimme/wholesomememes";

const GenerateBtn = document.querySelector('.meme-generate-button');
const MemeCont = document.querySelector('.meme-container');
const MemeTitle = document.querySelector('.meme-title');
const MemeImg = document.querySelector('.meme-img');
const MemeAuthor = document.querySelector('.meme-author');

// GenerateBtn.addEventListener('click', async () => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         const MemeCard = document.createElement('div');
//         MemeCard.classList.add('meme-card');

//         const MemeTitle = document.querySelector('.meme-title');
//         MemeTitle.textContent = data.title;

//         const MemeImg = document.querySelector('.meme-img');
//         MemeImg.src = data.url;
//         MemeImg.alt = data.title;

//         const MemeAuthor = document.querySelector('.meme-author');
//         MemeAuthor.textContent = data.author;

//         // Append elements to meme card
//         MemeCard.appendChild(MemeTitle);
//         MemeCard.appendChild(MemeImg);
//         MemeCard.appendChild(MemeAuthor);

//         MemeCont.innerHTML = ''; // Clear previous meme cards
//         MemeCont.appendChild(MemeCard);
        
//     } catch (error) {
//         console.error("Error Fetching Meme", error);
//     }
// });


GenerateBtn.addEventListener('click',generateMeme)


const updateDetails=(url,title,author)=>{
MemeImg.setAttribute("src",url);
MemeTitle.innerHTML = title;
MemeAuthor.innerHTML = author;
}


const generateMeme = ()=>{
    fetch(url).then((response)=>{
        response.json().then(data=>{
         updateDetails(data.url,data.title,data.author)
        })
    })
}