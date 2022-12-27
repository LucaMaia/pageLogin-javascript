function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha === "admin"){
        alert("sucesso")
        location.href = "home.html";
    }else {
        alert('Usuário ou senha incorretos!')
    }
    console.log("Testando função")
}

