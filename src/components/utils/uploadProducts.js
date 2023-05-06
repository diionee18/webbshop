// Function that returns true if posting was successful
async function uploadProduct() {
    
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
    console.log(data);
	if( statusObject.stats === 'success' ) {
		return true
	}
	return false  // if you get false, use console.log to inspect the object
}
uploadProduct()

export {uploadProduct}