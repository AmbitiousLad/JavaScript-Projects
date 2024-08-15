(function(){
    const customerImage = document.getElementById('customer-img')
    const customerName = document.getElementById('customer-name')
    const customerText = document.getElementById('customer-text')
    const btn = document.querySelectorAll('.btn')

    let index = 0
    const customers = []

    function Customer(img,name,text){
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img,name,text)
    {
        let Img = `./img/${img}.avif`
        let customer = new Customer(Img,name,text)

            customers.push(customer)
        
    }
    createCustomer(1,'John','Great experience')
    createCustomer(2,'Jack','Good experience')
    createCustomer(3,'Johnny','had a  experience')
    createCustomer(4,'Manuel','Amazing experience')

    btn.forEach((button)=>{
      button.addEventListener('click',(e)=>{
        if(e.target.parentElement.classList.contains('prevBtn'))
            {
                if(index === 0)
                    {
                        index = customers.length
                    }
                    index--
                    customerImage.src = customers[index].img
                    customerName.textContent = customers[index].name
                    customerText.textContent=customers[index].text 
            }
            if(e.target.parentElement.classList.contains('nextBtn'))
                {
                    index++
                    if(index === customers.length)
                        {
                            index = 0
                        }
                        customerImage.src = customers[index].img
                        customerName.textContent = customers[index].name
                        customerText.textContent=customers[index].text 
                }
      })
    })


})()