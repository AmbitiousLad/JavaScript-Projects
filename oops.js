const user = {
    username:'Sanket',
    roll_no : 1969,
    section:'CSE-7',

    getUserinfo:function(){
        console.log("Getting data of User...")
      console.log(`${this.username}`);
      console.log(this);
    }
} 

// console.log(user.username)
// console.log(user.getUserinfo());
// console.log(this);

 function User(username,roll_no,section)
 {
    this.username = username;
    this.roll_no = roll_no;  
    this.section = section;

    return this;
 }

 const User1 = User('Sanket',1969,'CSE-7');
//  console.log(User1); 
//  console.log(User1.constructor);


const userMain = {
    username:null,
    roll_no:1969
}

function handleObj(AnyObj){
    if(AnyObj.username == null){
        console.log(`Username is null and roll no is ${AnyObj.roll_no}`)    
    }
    console.log(`Username is ${AnyObj.username} and roll no is ${AnyObj.roll_no}`)
}

handleObj(userMain)