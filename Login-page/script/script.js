function validateForma(){
    var formaData = document.getElementById("forma");
    var name = formaData.elements.namedItem("uname").value;
    var nameErr = document.getElementById("name-error");
    name = name.trim();

    if(name == null || name === ""){
        Err = "Name can't be blank";
        nameErr.textContent = Err;
        return false;
    }
}

function validateFormb(){
    var formbData = document.getElementById("formb");
    var psw1 = formbData.elements.namedItem("psw").value;
    var psw2 = formbData.elements.namedItem("psw-repeat").value;

    if(psw2 == psw1){
        return true;
    }
    else{
        alert("Password must be same!")
    }
}
