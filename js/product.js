function createProduct() {
    // 1.Truy cập node để lấy dữ liệu
    let image = document.getElementById('product-img').value;
    document.getElementById('product-img').value = '';
    let name = document.getElementById('product-name').value;
    document.getElementById('product-name').value = '';
    let price = document.getElementById('product-price-old').value;
    document.getElementById('product-price-old').value = '';
    let discount = document.getElementById('product-discount').value;
    document.getElementById('product-discount').value = '';
    let tradeMark = document.getElementById('product-trademark').value;
    document.getElementById('product-trademark').value = '';
    let origin = document.getElementById('product-origin').value;
    document.getElementById('product-origin').value = '';
    if (_.isEmpty(image)) {
        image = '';
        document.getElementById('img-error').innerHTML = 'Vui lòng nhập hình ảnh'
    } else {
        document.getElementById('img-error').innerHTML = '';

    }
    if (_.isEmpty(name)) {
        name = '';
        document.getElementById('name-error').innerHTML = 'Vui lòng nhập tên sản phẩm'
    } else {
        document.getElementById('name-error').innerHTML = '';
    }
    if (_.isEmpty(price)) {
        price = '';
        document.getElementById('price-old-error').innerHTML = 'Vui lòng nhập giá gốc'
    } else {
        document.getElementById('price-old-error').innerHTML = '';

    }
    if (_.isEmpty(discount)) {
        discount = '';
        document.getElementById('discount-error').innerHTML = 'Vui lòng nhập phần trăm giảm giá'
    } else {
        document.getElementById('discount-error').innerHTML = '';

    }
    if (_.isEmpty(tradeMark)) {
        tradeMark = '';
        document.getElementById('trademark-error').innerHTML = 'Vui lòng nhập thương hiệu'
    } else {
        document.getElementById('trademark-error').innerHTML = '';

    }
    if (_.isEmpty(origin)) {
        origin = ''
        document.getElementById('origin-error').innerHTML = 'Vui lòng nhập phần xuất xứ'
    } else {
        document.getElementById('origin-error').innerHTML = '';

    }
    if (image && name && price && discount && tradeMark && origin) {
        let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
        products.push({
            image: image,
            name: name,
            price: price,
            discount: discount,
            tradeMark: tradeMark,
            origin: origin,
        })
        localStorage.setItem('products', JSON.stringify(products));
        this.renderListProduct();
    }
}

function renderListProduct() {
    let products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

    let tableContent = ` `;
    products.forEach((product, index) => {
        index++;
        tableContent += `<div class="grid__column-2-4">
        <a class="home-product-item click-item" href="./detailProduct.html">
            <div class="home-product-item__img " style="background-image: url(${product.image}) ">
            </div>
            <h5 class="home-product-item__name ">${product.name}</h5>
            <div class="home-product-item__price ">
                <span class="home-product-item__price-old ">${product.price}</span>
                <div class="home-product-item__price-current ">${product.discount}</div>
            </div>
            <div class="home-product-item__action ">
                <span class="home-product-item__like ">
                    <!-- <i class=" far fa-heart "></i> -->
                    <i class=" fas fa-heart "></i>
                </span>
                <div class="home-product-item__star ">
                    <i class="home-product-item__gold fas fa-star "></i>
                    <i class="home-product-item__gold fas fa-star "></i>
                    <i class="home-product-item__gold fas fa-star "></i>
                    <i class="home-product-item__gold fas fa-star "></i>
                    <i class="fas fa-star "></i>
                </div>
              
            </div>
            <div class="home-product-item__origin ">
                <span>${product.tradeMark}</span>
                <span>${product.origin}</span>
            </div>
            <div class="home-product-item__favourite ">
                <i class="fas fa-check "></i>
                <span>Yêu thích</span>
            </div>
            <div class="home-product-item__sale-off ">
                <span class="home-product-item__sale-off-percent ">43%</span>
                <span class="home-product-item__sale-off-label ">GIẢM</span>
            </div>

        </a>
    </div>`

    })
    document.getElementById('grid-products').innerHTML = tableContent;

}