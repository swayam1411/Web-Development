function ClickMe()
{
    fetch('https://fakestoreapi.com/products')
    .then((response) => response.json())
    .then((jsonBody) => {
      buildProductsList(jsonBody);
    });
}

function buildProductsList(products)
{
    let product1 = "";
    for (let product of products)
    {
        product1 += `<div class="Product2">
        <div class = "check"><input type="checkbox" value="${product.title}" name ="title" onclick="AddCartList()"></div>
        <div class = "product-image"><img src="${product.image}" height="100" width="100"></div>
        
        <div>
        <div class = "product-title"><h4>${(product.title).substring(0,80)}</h4></div>
        <div><p>${(product.description).substring(0,77)}</p></div>
        <div ><p>${product.category}</p></div>
        </div>
        <div class = "product-price"><p>$${product.price}</p></div>
        
    </div>`;

    document.getElementById("Product").innerHTML = product1;
    }
}

function AddCartList()
{
    var checkboxes = document.getElementsByName("title");
    var cart = document.getElementById("cart");

    for(var i = 0 ; i < checkboxes.length;i++)
    {
        var list = document.createElement("div");
        if(checkboxes[i].checked == true)
        {
            list.innerHTML = checkboxes[i].value;
            cart.appendChild(list);
        }
    }
}