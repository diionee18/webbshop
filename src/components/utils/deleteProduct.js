async function deleteProduct(){
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
    console.log(response);
    if (statusObject.status === "success"){
        return true
    }
    return false
}
deleteProduct()