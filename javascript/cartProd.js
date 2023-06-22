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



function getProdList(){
    let productList = document.querySelector('#productList')
    cartIdList = localStorage.getItem('cart-list').split(",")

    console.log(cartIdList)

    newProdCartList = []

    cartIdList.forEach((id)=>{
    console.log(id)
    for(let ObjData of sneakes_Shoes){
        if(id == ObjData["id"]){
            newProdCartList.push(ObjData)
        }
        else{
            continue
        }

    }
 })

 console.log(newProdCartList)
 list =""
 for(let cartData of newProdCartList){
    list += `
        <li>
            <img src=${cartData.img} >
            <h2>${cartData.name}</h2>
            <h4> Price:${cartData.price}</h4>
            <button>-<button>
            <button>+<button>
        </li>
    `
 }

 productList.innerHTML = list


}


getProdList()