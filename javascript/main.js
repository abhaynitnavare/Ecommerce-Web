

function WOMenbut() {
    document.getElementById('Second-Id').style.display = 'flex'
    document.getElementById('Second-Id').style.width = '90%'
    document.getElementById('Second-Id').style.height = '25%'
    document.getElementById('Second-Id').style.marginLeft = '5%'
    document.getElementById("Second-Id").style.left = "0px"
    document.getElementById("Second-Id").style.zIndex = '1'
}

function Womenleav() {
    document.getElementById('Second-Id').style.display = 'none'
}

function menbut() {
    document.getElementById('Third-ID').style.display = 'block'
    document.getElementById('Third-ID').style.display = 'flex'
    document.getElementById('Third-ID').style.width = '90%'
    document.getElementById('Third-ID').style.height = '25%'
    document.getElementById("Third-ID").style.marginLeft = '5%'
    document.getElementById("Third-ID").style.left = "0px"
    document.getElementById("Third-ID").style.zIndex = "2"


}
function menleav() {
    document.getElementById("Third-ID").style.display = 'none'
}
function Kidsbut() {
    document.getElementById("Fourth-ID").style.display = 'flex'
    document.getElementById('Fourth-ID').style.display = 'flex'
    document.getElementById('Fourth-ID').style.width = '90%'
    document.getElementById('Fourth-ID').style.height = '25%'
    document.getElementById("Fourth-ID").style.marginLeft = '5%'
    document.getElementById("Fourth-ID").style.left = "0px"
    document.getElementById("Fourth-ID").style.zIndex = "1"

}
function kidsleave() {
    document.getElementById('Fourth-ID').style.display = 'none'
}





//  for user name javascript code

let Profile = localStorage.getItem('User')

let acDetails = document.getElementById('acDetails')
let acUser = document.getElementById('User')
let logIn = document.getElementById('loginHide')
let logOut = document.getElementById('logoutBtn')
// let Register = document.getElementById('Register_but')


window.addEventListener('load', () => {
    if (Profile == "") {
        acUser.innerText = ""
        acDetails.style.display = "none"
        logOut.style.display = "none"
    }
    else {
        console.log("load page")
        acUser.innerText = Profile
        acDetails.style.display = "block"
        logIn.style.display = "none"

    }

})
function outfun() {
    localStorage.setItem("User", "")
    logIn.style.display = "block"
    // Register.style.display="block"
    acDetails.style.display = "none"
    logOut.style.display = "none"
    acUser.innerHTML = ""
}




let firstId = document.getElementById('First-id');
let cancelbut = document.getElementById('cancel-but');

firstId.style.display = "none"
cancelbut.style.display = "none"
function Show() {
    console.log("Hello")
    if (firstId.style.display == "none") {
        firstId.style.display = "flex"
        cancelbut.style.display = 'inline-block'
    }
    else {
        firstId.style.display = "none"
        cancelbut.style.display = "none"
    }
    // document.querySelector('#First-id').style.display='flex'
    document.getElementById("First-id").style.width = '90%'
    document.getElementById("First-id").style.height = '25%'
    document.getElementById("First-id").style.marginLeft = '5%'
    document.getElementById("First-id").style.zIndex = '1'
    document.getElementById("First-id").style.left = "0px"
}




function closebutton() {
    if (cancelbut.style.display == "none") {
    }
    else {
        cancelbut.style.display = "none"
    }
}





// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//       document.getElementById("header").style.top = "0";
//     } else {
//       document.getElementById("header").style.top = "0px";
//     }
//   }

// HamBurger Menu
let hamMenu = document.querySelector('.hamburgerMenu');
let conBar = document.getElementById('bar1');

function menu() {
    let hmenu = document.getElementById('hMenu')
    document.querySelector('#Main-ol').style.display = "none"

    document.getElementById('ul-bar').style.display = "none"
    if (!hmenu.className.includes('icons')) {
        document.getElementById('hMenu').classList.add('icons')
        document.getElementById('ul-bar').style.display = "flex"
        document.getElementById('ul-bar').classList.add('HamUlbar')
        document.getElementById('ul-bar').style.width = '20%'
        document.getElementById('bgMenu').classList.add('hamBg')
        console.log('1')
    }
    else {
        document.getElementById('hMenu').classList.remove('icons')
        document.getElementById('ul-bar').style.display = "none"
        document.getElementById('ul-bar').classList.remove('HamUlbar')
        document.getElementById('bgMenu').classList.remove('hamBg')
        // console.log('12')

    }
}

// category
function Category() {
    let mandrp = document.getElementById('Main-ol')
    // document.getElementById('manudrp').innerHTML
    let manudrp=document.getElementById('manudrp')

    console.log('clucked')

    if (document.querySelector('#Main-ol').style.display = "none") {
        document.getElementById('Main-ol').classList.add('Mainol')
        document.getElementById('Main-ol').style.display = 'flex'
        document.getElementById('Main-ol').style.width = '20%'

    }
    else {
        document.querySelector('#Main-ol').style.display="none"

    }
    // manudrp.innerHTML=mandrp.textContent
}

function login(){
    document.getElementById('Localform').style.display='block'
    console.log('hiii stop')


}
var modal = document.getElementById('Localform');
window.onclick = function(event){
    if(event.target == modal){
        modal.style.display='none'
    }
}

let sneakes_Shoes = [
    {

        "id":1,
        "name":"POWER",
        "img":"https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600",
        "price":2500,
        "sizes":[6,7,8,9,10]
    },
    {
        "id":2,
        "name":"JUMP",
        "img":"https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg?auto=compress&cs=tinysrgb&w=600",
        "price":1500,
        "sizes":[6,7,8,9,10]
    },
    {
        "id":3,
        "name":"NIKE",
        "img":"https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=600",
        "price":7500,
        "sizes":[6,7,8,9,10]
    },
    {

        "id":4,
        "name":"SPEED",
        "img":"https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&w=600",
        "price":5500,
        "sizes":[6,7,8,9,10]
    },
    {

        "id":5,
        "name":"SPEED",
        "img":"https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&w=600",
        "price":5500,
        "sizes":[6,7,8,9,10]
    },
    {

        "id":6,
        "name":"SPEED",
        "img":"https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&w=600",
        "price":5500,
        "sizes":[6,7,8,9,10]
    },
    {

        "id":7,
        "name":"SPEED",
        "img":"https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&w=600",
        "price":5500,
        "sizes":[6,7,8,9,10]
    },
    {

        "id":8,
        "name":"SPEED",
        "img":"https://images.pexels.com/photos/847371/pexels-photo-847371.jpeg?auto=compress&cs=tinysrgb&w=600",
        "price":5500,
        "sizes":[6,7,8,9,10]
    }
]


let shoesCard  = document.getElementById('shoesCard')
let card = ""
let i=1
function getDetails(){
    
    sneakes_Shoes.forEach((data)=>{
        console.log(data)
        card += `
            <div class="Scard" id="cards-${i}">
                    <img src=${data.img} >
                    <h2>${data.name}</h2>
                    <h2>Price: ${data.price}</h2>
                    <h4>Sizes:
                            <span>${data.sizes[0]}</span>
                            <span>${data.sizes[1]}</span>
                            <span>${data.sizes[2]}</span>
                            <span>${data.sizes[3]}</span>
                            <span>${data.sizes[4]}</span>
                    </h4>
                    <button class="Add_CART" onclick="addtoCart(${data.id})">ADD TO CART</button>   
            </div>
         ` 
        i++
        // console.log(card)
    })
    shoesCard.innerHTML = card
}
getDetails()



let backet = []
let localStg = localStorage.getItem('cart-list')
function addtoCart(val){
    if(localStg == ""){
        backet.push(val)
        localStorage.setItem('cart-list',backet)
    }
    else{
        backet = localStorage.getItem('cart-list').split(",")
        console.log(typeof(backet))
        backet.push(val)
        localStorage.setItem('cart-list',backet)
    }
}


let CartSpan = document.getElementById('Cart-span')
setInterval(()=>{
    localStg = localStorage.getItem('cart-list')
    if(localStg == ""){
       let  len = localStg.length
        CartSpan.innerText = len
    }
    else{
        let len = localStg.split(',').length
        CartSpan.innerText = len
    }
},500)







