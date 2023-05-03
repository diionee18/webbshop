// Function that returns true if posting was successful
async function uploadProduct() {
    const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=add-product";
    const shopId = 1002;
	const data = {
		action: 'add-product',
		name: 'Water pistol',
		description: 'Fires cooling streams of water at unsuspecting foes.',
		picture: 'insert web URL here',
        price: 12,
		shopid: shopId
	}
	const options = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	}
	const response = await fetch(url, options)
	const statusObject = await response.json()
    console.log(data);
	if( statusObject.stats === 'success' ) {
		return true
	}
	return false  // if you get false, use console.log to inspect the object
}
uploadProduct()

export {uploadProduct}