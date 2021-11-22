var urlEnString = window.location.href; 
var url = new URL(urlEnString);
var productId = url.searchParams.get("prodId");
console.log("productID: " + productId);