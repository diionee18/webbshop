async function updateProduct() {
    
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=?action=edit-product";
    const shopId = 1002;
	
    const data = {
		action: 'edit-product',
		name: 'alltid roligt',
		description: 'senast',
		picture: 'postit',
        price: 12,
		shopid: shopId,
        id: 286
	}
	const options = {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
    console.log(data);

	if( statusObject.stats === 'success' ) {
		return true
	}
	return false
}
updateProduct()

export {updateProduct}