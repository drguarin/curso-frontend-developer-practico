const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsConteiner = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
   desktopMenu.classList.add('inactive');
   mobileMenu.classList.add('inactive');
   productDetailContainer.classList.add('inactive');
   shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside (){
    productDetailContainer.classList.remove('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    shoppingCartContainer.classList.add('inactive');
    }
    
    function closeProductDetailAside (){
        productDetailContainer.classList.add('inactive');
    }

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productinfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productinfoDiv.appendChild(productPrice);
        productinfoDiv.appendChild(productName);
    
        const productinfoFigure = document.createElement('figure');
        const productimgCart = document.createElement('img');
        productimgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productinfoFigure.appendChild(productimgCart);
    
        productInfo.appendChild(productinfoDiv);
        productInfo.appendChild(productinfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsConteiner.appendChild(productCard);
    }
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKU9FNh0vgI0WDviYsedwbG3jWfHapNP8tXrdO2znOob1QYi7-kwJjXU5urLc-WOQr0wI&usqp=CAU',
});
productList.push({
    name: 'Laptop',
    price: 420,
    image: 'https://i5.walmartimages.com.mx/mg/gm/1p/images/product-images/img_large/00088411638515l.jpg',
});

renderProducts(productList);