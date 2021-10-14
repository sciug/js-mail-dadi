

//creo array con email
const allowedEmails = ["mario@gmail.com",
                        "sara@gmail.com",
                        "marta@gmail.com",
                        "chiara@gmail.com",
                        "martina@gmail.com"]

// creo prompt con email da inserire
const userEmail = prompt("insert ypur email")


//verifico ogni elemento dell'array con il valore del prompt
//stampo un messaggio in html a seconda se l'email inserita è corretta o meno


//creo variabili necessarie per stampare messaggio in html




for (let i=0; i < allowedEmails.length; i++){
const emailMessage = document.getElementById("email_message")

    if(userEmail == allowedEmails[i]){
        emailMessage.innerHTML = `<p class="welcome">Welcome back!<span class="emoji_happy">&#128515;</span></p>`
    }else{
        emailMessage.innerHTML = `<p class="wrong_email"><span class="ops">Oops! <span class="emoji_sad">&#128549;</span></span>something went wrong <span class="check_email">please check if your email is correct</span></p>`
}
}




const myNumber = Math.floor((Math.random() * 10) + 1);
const pcNumber = Math.floor((Math.random() * 10) + 1);


const userNumber = document.getElementById("userNumber")
const botNumber = document.getElementById("botNumber")

userNumber.innerHTML = myNumber
botNumber.innerHTML = pcNumber

if(myNumber == pcNumber){

}else if (myNumber > pcNumber){

}else{
    
}