let input_ = document.getElementById("input");
let verifica_ = document.getElementById("verifica");
let name_input = input_.getAttribute("name");
let msg_verifica = document.getElementById("msg_verifica");
let lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
let uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
let numbers = '0123456789';
lowercaseChars = lowercaseChars.split('')
uppercaseChars = uppercaseChars.split('')
specialChars = specialChars.split('')
numbers = numbers.split('')
const min_chars = 8;
const min_num = 2;
const min_special = 1;
const min_Upper_char = 1;
input_.addEventListener("input",(i)=>{
    let value = input_.value.split('');
    let length = value.length;
    let verifiche = check_occ(value,length);
    console.log(verifiche)
    verifica_.style.cssText = `width:${length * 12.5}%;background-color:#ccc;`;
    if(length == 0) msg_verifica.style.display="none"
    else msg_verifica.style.display = "block"
    msg_verifica.innerHTML = "Inserisci caratteri"
    msg_verifica.style.color = "#222"
    if(verifiche[0] >= min_Upper_char){
        if(verifiche[1] >= min_num){
            if(verifiche[2] >= min_special){
                if(parseInt(length) >= min_chars){
                    verifica_.style.backgroundColor="green"
                    msg_verifica.innerHTML = "Perfetto!";
                    msg_verifica.style.color="green"
                }else{
                    verifica_.style.backgroundColor="orange"
                    msg_verifica.innerHTML = "Ci sei quasi...";
                    msg_verifica.style.color="orange"
                }
            }
        }
    }    
})
function check_occ(arr,lenght){
    // [minUpperChar,minNum,minSpecial]
    let verifiche = [0,0,0];
    let upperChar = 0;
    let numChar = 0;
    let specialChar = 0;
    for(let i = 0;i<lenght;i++){
        for(let j = 0;j<26;j++){
            if(arr[i] == uppercaseChars[j]){
                upperChar++;
                verifiche[0] = upperChar;
            }
            if(arr[i] == numbers[j]){
                numChar++;
                verifiche[1] = numChar;
            }
            if(arr[i] == specialChars[j]){
                specialChar++;
                verifiche[2] = specialChar;
            }
        }
    }
    return verifiche;
}