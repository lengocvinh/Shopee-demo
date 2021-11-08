document.querySelector(".header__cart-list").style.display = "none";
const btnProduct = document.querySelectorAll(".home-product-item__img")
let products = getProductFromLocalStorage() 
if(products.length >0) {
    renderProducts(products)
    countProduct()
}
btnProduct.forEach(function(button){
    button.addEventListener("click" , function(event)
    {

        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector(".home-product-item__img").src
        var productName = product.querySelector(".home-product-item__name").innerText
        var productCurrent = product.querySelector(".home-product-item__price-current").innerText
       
        let products = getProductFromLocalStorage() 
        products.push( 
        {
            img: productImg,
            name: productName,
            price : productCurrent
        })
        localStorage.setItem('products' , JSON.stringify(products))
        countProduct()

        renderProducts(products)

    })
})
function renderProducts(products = []) {
    content = '<ul class="header__cart-list-item">'

    products.forEach((product , index) => {
        content+=`<li class="header__cart-item">
        <img class="header__cart-item-img" src="${product.img}" alt="Lamboghini Urus">
        <div class="header__cart-item-info">
            <div class="header__cart-item-head">
                <h5 class="header__cart-item-name">${product.name}</h5>
                <div class="header__cart-item-price-wrap">
                    <span class="header__cart-item-price">${product.price}</span>
                    <span class="header__cart-item-multiply">x</span>
                    <span class="header__cart-item-qnt">1</span>

                </div>
            </div>
            <div class="header__cart-item-body">
                <span class="header__cart-item-desc">
                    Phân Loại : Smartphone
                </span>
                <span onclick="deleteProduct(${index})" class="header__cart-item-remove">Xoá</span>
            </div>
        </div>
        </li>`
    })

    content+=`</ul>
        <a  href="checkout.html"  class="header__cart-view-cart btn btn--primary">Xem giỏ hàng</a>
    `
    document.querySelector(".header__cart-list").innerHTML = content


}
function countProduct() {
    let products = getProductFromLocalStorage() 
    document.querySelector(".header__cart-notice").innerHTML = products.length;
}
function showCart() {
    var x = document.querySelector(".header__cart-list")
    if(x.style.display == "block") {
        x.style.display = "none"
    
    }
    else {
        x.style.display = "block"
    }
    }
function getProductFromLocalStorage() {
        return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : []
    }
function deleteProduct(id) {
    if(confirm('Bạn có thực sự muốn xoá?')){
        let products = getProductFromLocalStorage() 
        products.splice(id , 1 )
        localStorage.setItem('products' , JSON.stringify(products))
        renderProducts(getProductFromLocalStorage())
        countProduct() 

    }

}
function moveCart(){
    let products = getProductFromLocalStorage() 
    let content = ''
    var sum = 0
    products.forEach((product , index) => {
        let price =  product.price.split('.').join('') * 1
        sum+=price
        content +=`
        <tr>
        <td>${index}</td>   
        <td><img src="${product.img}" alt=""></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>1</td>
        <td>${product.price}</td>
        </tr>
        `
    })
    content+=`<tr>
    <th colspan="5">Tổng đơn hàng</th>
    <th>
        <div>${sum}</div>
    </th>
</tr>`
    document.querySelector("#mycart").innerHTML = content;


}

