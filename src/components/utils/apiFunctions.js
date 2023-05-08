

export async function getUsers() {
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=get-users&shopid=1002";
    try {
        const response = await fetch(url);
        const data = await response.json();
       
        return data;
    } catch (error) {
        console.log("Use console.log to find out what the error is.");
    }
    return null;
}


export async function addUser() {
    
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=add-user";
    const shopId = 1002;
	
    const data = {
		shopid: shopId,
        username:"David",
        password:"david123"
	}
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
    
	if( statusObject.stats === 'success' ) {
		return true
	}
	return false 
}

export async function deleteProduct(){
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=delete-product";
   const shopId = 1002;
   
   const data = {
       shopid: shopId,
       productid: 36,
   }
   
   const options ={
       method: "DELETE",
       headers: {'content-type': 'application/json'},
       body: JSON.stringify(data)
   }
   const response = await fetch(url, options)
   const statusObject = await response.json()
 
   if (statusObject.status === "success"){
       return true
   }
   return false
}

export async function getProducts() {
    const url = "https://www.forverkliga.se/JavaScript/api/fe/";
    const shopId = 1002;
    let urlWithQuery = url + "?action=get-products&shopid=" + shopId;
    try {
        const response = await fetch(urlWithQuery);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log("Use console.log to find out what the error is.");
    }
    return null;
}



export async function updateProduct(productName,productPrice,productInfo,productImg, productId) {
    
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=edit-product";
    const shopId = 1002;
	
    const data = {
		action: 'edit-product',
		name: productName,
		description: productInfo,
		picture: productImg,
        price: productPrice,
		shopid: shopId,
        productid: productId
	}
	const options = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
    console.log(statusObject);
   

	if( statusObject.stats === 'success' ) {
		return true
	}
	return false
}


export async function uploadProduct() {
    
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=add-product";
    const shopId = 1002;
	
    const data = {
		action: 'add-product',
		name: 'rally',
		description: 'A car ',
		picture: 'https://cdn.shopify.com/s/files/1/0334/4036/6725/files/iStock-1270389581_1_2000x1334_crop_center.jpg?v=1671722815',
        price: 12,
		shopid: shopId,
	}
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
   
	if( statusObject.stats === 'success' ) {
		return true
	}
	return false  
}