function validateForma(){
    var formaData = document.getElementById("forma");
    var name = formaData.elements.namedItem("uname").value;

    if(name == null || name.trim() === ""){
        var nameErr = document.getElementById("name-error").innerHTML;
        nameErr = "Name can't be blank";
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
