const formEl = document.querySelector('form')
const inputEl = document.querySelector('.submit-input')
const result = document.querySelector('.container h4')
const error = document.querySelector('.form h5')
formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    const value = inputEl.value;
    if(value==="")
        {
         error.style.display='block'
         gsap.from(error,{
             scale:2,
             opacity:0,
             duration:0.5,ease: "back.out(1.7)"
         })
         setTimeout(() => {
            error.style.display = 'none';
        }, 5000);
        }
        else{
                error.style.display='none'
                result.textContent = value;
                result.style.display="block"
                gsap.from(result,{
                    x:100,
                    opacity:0,
                    duration:0.5
                })
        }

})