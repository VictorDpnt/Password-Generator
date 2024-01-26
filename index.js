const dataLowercase = "azertyuiopqsdfghjklmwxcvbn"; 
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "@#&§!?/+=$€*£¨^;.,ùéèà";
const rangeValue = document.getElementById('password-length'); 
const passwordOutput = document.getElementById('password-output'); 



const generator = () => {
    data = [];
    password = "";

 if (lowercase.checked) {
    data.push(...dataLowercase)
 }
 if (uppercase.checked) {
    data.push(...dataUppercase)
 }
 if (number.checked){
    data.push(...dataNumbers)
 }
if (symbols.checked) {
    data.push(...dataSymbols)
}

if (data.length ===0) {
    alert("Veuillez saisir au moins un critère")
}

for (i=0; i<rangeValue.value; i++) {
    password += data[Math.floor(Math.random ()*data.length)]
}

passwordOutput.value= password

passwordOutput.select(); 
    document.execCommand("copy");

generateButton.innerHTML = "Copié !"

setTimeout ( () => {
    generateButton.innerHTML = "Générer un mot de passe !"
}, 2000)
}




generateButton.addEventListener ("click", ()=> {
    generator();
})

