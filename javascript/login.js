// import { CheckPasswd,Phone } from  './register.js'


function NameValidation() {
    let User = document.getElementById('UName').value
    let valid = document.getElementById('NameVAl')

    if (User == '') {
        valid.innerHTML = "*This field is required"
        return (0)
    }
    else{ 
        valid.innerHTML=""
        return 1
    }
    
}
// function checkbtn(){
//     let chk = document.getElementById('chkvalue').checked
//     console.log(chk)
//     let valid = document.getElementById('chkval')

//     if(chk == false){
//         valid.innerHTML = "*This field is required"
//         return (0)
//     }
//     else{
//         valid.innerHTML = ''
//             return 1
//     }
// }

function passwdval() {
    let Password = document.getElementById('UPass').value
    let valid = document.getElementById('PAssVAl')

    if (Password == '') {
        valid.innerHTML = "*This field is required"
        return (0)
    }
    else if (Password.length == 6) {
        if (Password.includes('@') || Password.includes('#')) {
            valid.innerHTML = ''
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

function logintoapp() {
    let User = document.getElementById('UName').value
    let Password = document.getElementById('UPass').value
    

    console.log(User, Password)
    if(NameValidation() && passwdval() ){
        if (localStorage.getItem(User)) {
            if (localStorage.getItem(User) == Password) {  
                localStorage.setItem("User",User)
                location.assign('http://127.0.0.1:5501/index1.html/index.html')
                alert('Login sucessfull')
                document.getElementById('hederimg').style.display='none'
            
                
            


            }
            else {
    
                alert('Invalid password')
            }
        }
        else {
            alert('invalid Username')
        }
    }

}

function closeMainlogin(){
    document.getElementById('Localform').style.display = 'none'
}




