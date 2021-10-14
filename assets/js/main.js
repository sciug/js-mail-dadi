

//creo array con email
const allowedEmails = ["mario@gmail.com",
                        "sara@gmail.com",
                        "marta@gmail.com",
                        "chiara@gmail.com",
                        "martina@gmail.com"]

// creo prompt con email da inserire
 
const confirmEmail = document.getElementById("confirm_btn")
const accessResult = document.getElementById("emailAccess")
confirmEmail.addEventListener("click", function(){
    accessResult.classList.remove("hidden")
    for (let i=0; i < allowedEmails.length; i++){
        const userEmail = document.getElementById("userEmail")
        const emailMessage = document.getElementById("email_message")
        
            if(userEmail.value == allowedEmails[i]){
                emailMessage.innerHTML = `<p class="welcome">Welcome back!<span class="emoji_happy">&#128515;</span></p>`
            }else{
                emailMessage.innerHTML = `<p class="wrong_email"><span class="ops">Oops! <span class="emoji_sad">&#128549;</span></span>something went wrong <span class="check_email">please check if your email is correct</span></p>`
        }
        }
        

})

//verifico ogni elemento dell'array con il valore del prompt
//stampo un messaggio in html a seconda se l'email inserita è corretta o meno


//creo variabili necessarie per stampare messaggio in html







const playButton= document.getElementById("startGame")
const playAgainButton = document.getElementById("play_again")
const gameMessage = document.getElementById("gameMessage")
const mainBlur = document.getElementById("main")
playButton.addEventListener("click", function(){
    const myNumber = Math.floor((Math.random() * 10) + 1);
    const pcNumber = Math.floor((Math.random() * 10) + 1);
    gameMessage.classList.remove("hidden")
    mainBlur.classList.add("blur")

    
    
    const userNumber = document.getElementById("userNumber")
    const botNumber = document.getElementById("botNumber")
    
    userNumber.innerHTML = myNumber
    botNumber.innerHTML = pcNumber
    const winOrLose = document.getElementById("winOrLose")


    
    if(myNumber == pcNumber){
        winOrLose.innerHTML = `<p class="winOrLose">It's a draw..<span class="emoji_result"> &#129300;</span></p>`
    
    }else if (myNumber > pcNumber){
        winOrLose.innerHTML = `<p class="winOrLose">you win!<span class="emoji_result">&#128515;</span></p>`
    
    }else{winOrLose.innerHTML = `<p class="winOrLose">you lost..<span class="emoji_result">&#128549;</span></p>`
    
    }
})




playAgainButton.addEventListener("click", function(){
    gameMessage.classList.add("hidden")
    mainBlur.classList.remove("blur")

    
    

})