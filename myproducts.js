let request = new XMLHttpRequest();
request.open('GET','https://Neha987644.github.io/comp1073-lab-8/products.json');
request.responseType = 'json';
request.send();


request.onload = function(){
    loadProducts(request.response);
};

function loadProducts(data)
{
	document.getElementById("heading").textContent = data.companyName + ", "+data.headOffice + ", Since "+data.established;
	    let topDeals = data.topDeals;
		let products = document.getElementById('products');
		for (let i = 0; i < topDeals.length; i++) {
			
        let li = document.createElement('li');
        let img = document.createElement('img');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let h4 = document.createElement('h4');
		
        img.setAttribute('src', 'https://Neha987644.github.io/comp1073-lab-8/images/' + topDeals[i].image);
		
        h2.textContent = "Product : " + topDeals[i].name;
        h3.textContent = "Price : $" + topDeals[i].price;
        h4.textContent = "Main Features : " + topDeals[i].features;
		
        li.appendChild(img);
        li.appendChild(h2);
        li.appendChild(h3);
        li.appendChild(h4);
        products .appendChild(li);
    }
}