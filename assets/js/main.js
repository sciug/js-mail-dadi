

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

for (let i=0; i < allowedEmails.length; i++){
    if(userEmail == allowedEmails[i]){
        console.log("ok") 
    }else{
        console.log("NO")
    }
}