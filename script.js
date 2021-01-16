const AllChars = ["\t", "\n", "\r"];
for (var i=32; i<127; i++)
  AllChars.push(String.fromCharCode(i));

  for (var i=161; i<256; i++)
  AllChars.push(String.fromCharCode(i));



const encrypt = (word, password) => {
    let newWord = ""
    word.split("").forEach((char, index) => {
        newWord += AllChars[(AllChars.indexOf(char) + AllChars.indexOf(password[index % password.length])) % AllChars.length]
    });
    return newWord
}

const decrypt = (word, password) => {
    let newWord = ""
    let newIndex = 0
    word.split("").forEach((char, index) => {
        newIndex = AllChars.indexOf(char) - AllChars.indexOf(password[index % password.length])   
        
        if (newIndex < 0) {
            newIndex = AllChars.length + newIndex
            
        } else {
            newIndex = newIndex % AllChars.length
        }
        newWord += AllChars[newIndex]
    });
    return newWord
}


const HTML_encript = () => {
    const html_text = document.getElementById("Input-area").value
    const html_pass = document.getElementById("pass").value

    if (!html_pass || !html_text) {
        alert("Por favor, introduce un texto y una contraseña")
        return
    }

    const encripted_text = encrypt(html_text, html_pass)

    document.getElementById("result-container").style.display = "inline"
    document.getElementById("out").innerHTML = encripted_text

}

const HTML_decript = () => {
    const html_text = document.getElementById("Input-area").value
    const html_pass = document.getElementById("pass").value

    if (!html_pass || !html_text) {
        alert("Por favor, introduce un texto y una contraseña")
        return
    }

    const decripted_text = decrypt(html_text, html_pass)

    document.getElementById("result-container").style.display = "inline"
    document.getElementById("out").innerHTML = decripted_text

}


