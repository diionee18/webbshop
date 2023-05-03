

    async function getProducts() {
        const url = "https://www.forverkliga.se/JavaScript/api/fe/";
        const shopId = 1002;
        let urlWithQuery = url + "?action=get-products&shopid=" + shopId;
        try {
            const response = await fetch(urlWithQuery);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.log("Use console.log to find out what the error is.");
        }
        return null;
    }
    getProducts()
    export {getProducts}
    //Här hämtar vi datan, jag tänker att vi kan använda oss av en tom array som har t.ex 
    // namn, pris, info och img från en recoil och sedan pushar jag in data från data som finns här.
    