function loadProducts(){

fetch("https://dummyjson.com/products")

.then(function(response){
    return response.json();
})

.then(function(data){

    let products = data.products;
    let container = document.getElementById("container");

    products.forEach(function(product){

        let card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
        <img src="${product.thumbnail}">
        <h4>${product.title}</h4>
        <p>Price: ₹${product.price}</p>
        <p>Discount: ${product.discountPercentage}%</p>
        `;

        container.appendChild(card);

    });

})

.catch(function(error){
    console.log("Error:", error);
});

}

//creat by appendchild