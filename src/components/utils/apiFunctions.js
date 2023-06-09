

export async function getUsers() {
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=get-users&shopid=1002";
    try {
        const response = await fetch(url);
        const data = await response.json();
        
        
    
        return data;
      
    } catch (error) {
       
    }
   
    return null;
}


export async function addUser( username, password) {
    
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=add-user";
    const shopId = 1002;
	
    const data = {
		shopid: shopId,
        username:username,
        password:password
	}
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
    
	if( statusObject.status === 'success' ) {
		return true
	}
	return false 
}

export async function deleteUser(userId){
    const url = "http://www.forverkliga.se/JavaScript/api/fe/?action=delete-user";
   const shopId = 1002;
   
   const data = {
    action:'delete-user',
       shopid: shopId,
       userid: userId,
   }
   
   const options ={
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(data)
   }
   
   const response = await fetch(url, options)
   const statusObject = await response.json()
   
   if (statusObject.status === "success"){
       return true
    }
          
   return false
}

export async function userCredentials(userName, password) {
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=login-user";
    const shopId = 1002;
	
    const data = {
		shopid: shopId,
        username: userName,
        password: password
	}
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
   
	const response = await fetch(url, options)
	const statusObject = await response.json()
  
    
	if( statusObject.status === 'success' ) {
		return true
	}
	return false 
}

export async function deleteProduct(productId){
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=delete-product";
   const shopId = 1002;
   
   const data = {
       shopid: shopId,
       productid: productId,
   }
   
   const options ={
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
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

   

	if( statusObject.status === 'success' ) {
		return true
	}
	return false
}


export async function uploadProduct(productName, productPrice, productInfo, productImg) {
    
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=add-product";
    const shopId = 1002;
	
    const data = {
		action: 'add-product',
		name: productName,
		description: productInfo,
		picture: productImg,
        price: productPrice,
		shopid: shopId,
	}
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
   
	const response = await fetch(url, options)
	const statusObject = await response.json()
   
	if( statusObject.status === 'success' ) {
		return true
	}
	return false  
}