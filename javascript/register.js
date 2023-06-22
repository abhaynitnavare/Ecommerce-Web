// let Profile=localStorage.getItem("User")


function Name() {
    let User = document.getElementById("Regist-name").value
    let valid = document.getElementById('nameVal')
    if (User == "") {
        valid.innerHTML = "*This field is required"
        return 0
    }
    else {
        valid.innerHTML = ""
        return 1
    }
}

 function Phone() {
    let RegI_phone  = document.getElementById('Regist-phone').value
    let valid = document.getElementById('PhoneVal')

    if (RegI_phone == "") {
        valid.innerHTML = "This field is required"
        return 0
    }
    else if (RegI_phone.length == 10) {
        valid.innerHTML = ""
        return 1
    }
    else {
        valid.innerHTML = "Mobile no must be 10 digit"
        return 0
    }
}


function Email() {
    let Regi_mail = document.getElementById('Regist-Email').value
    let valid = document.getElementById('EmailVal')

    if (Regi_mail == "") {
        valid.innerHTML = "This field is required"
        return 0
    }
    else if (Regi_mail.includes('@')) {
        valid.innerHTML = ""
        return 1
    }
    else {
        valid.innerHTML = "invalid Email id"
        return 0
    }
}

function Passwd() {
    let Regis_psd = document.getElementById('Regist-pass').value
    let valid = document.getElementById('PasswdVal')


    if (Regis_psd == "") {
        valid.innerHTML = "This field is required"
        return 0
    }
    else if (Regis_psd.length == 6) {
        if (Regis_psd.includes('@') || Regis_psd.includes("#")) {
            valid.innerHTML = ""
            return 1
        }
        else {
            valid.innerHTML = "Password include @ or #"
            return 0
        }

    }
    else {
        valid.innerHTML = "Password must be 6 digit"
        return 0
    }
}

 function CheckPasswd() {
    let Regis_psd = document.getElementById('Regist-pass').value
    let Regi_psd_confirm = document.getElementById('Regist-Conf-Passwd').value

    let valid = document.getElementById('PasswdValCheck')


    if (Regi_psd_confirm == "") {
        valid.innerHTML = "This field is required"
        return 0
    }
    else if (Regis_psd == Regi_psd_confirm) {
        valid.innerHTML = ""
        return 1
    }
    else {
        valid.innerHTML = "Password not match"
        return 0
    }
}

function REGISTERTOSNEAKER() {

    let User = document.getElementById("Regist-name").value
    let Regi_psd_confirm = document.getElementById('Regist-Conf-Passwd').value


    if (Name() && Phone() && Email() && Passwd() && CheckPasswd()) {
        alert("Registration successfull!")
        localStorage.setItem("User",User)
        location.assign('index.html')
    }
    
   

    

    localStorage.setItem(User, Regi_psd_confirm)
    console.log(User, Regi_mail)

}





