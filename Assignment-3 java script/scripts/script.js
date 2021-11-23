function OnPageLoad()
{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((ProductsData) => {
      buildProductsList(ProductsData);
    });
}

function buildProductsList(ProductsData)
{
    let Data = "";
    for (let product of ProductsData)
    {
        Data += `<div class="ProductClass">
        <div class = "check"><input type="checkbox" value="${product.title}" id=${product.id} onclick="AddCartList('${product.id}')"></div>
        <div class = "product-image"><img src="${product.image}" height="100" width="100"></div>
        
        <div>
        <div class = "product-title"><h4>${(product.title).substring(0,80)}</h4></div>
        <div><p>${(product.description).substring(0,77)}</p></div>
        <div ><p>${product.category}</p></div>
        </div>
        <div class = "product-price"><p>$${product.price}</p></div>
        
    </div>`;

    }
    document.getElementById("Product").innerHTML = Data;
}

var cartItems = [];

function AddCartList(productId)
{
    var checkbox = document.getElementById(productId);
    if(checkbox.checked == true)
    {
        cartItems.push(checkbox.value);
    }
    else
    {
        cartItems.pop(checkbox.value);
    }  
    document.getElementById("cart").innerHTML = cartItems;
}
