

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
        emailMessage.textContent = "Welcome Back!"
    }else{
        emailMessage.textContent = "Oops!sara@gmail.com something went wrong"
    }
}