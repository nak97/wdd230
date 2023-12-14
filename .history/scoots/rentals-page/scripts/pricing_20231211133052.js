const url = './data/pricing.json'
async function getPrice() {
 const response = await fetch(url);
 const data = await response.json();
//  console.log(data)
 document.getElementById('price-half-metro').innerText = data.reservation[0].hd;
 document.getElementById('price-f-metro').innerText = data.reservation[0].fd ;
 document.getElementById('price-h-w').innerText = data.walk[0].hd;
 document.getElementById('price-f-w').innerText = data.walk[0].fd;

 Document.getElementById('dio-h-r').innerText = data.reservation[1].hd;
 Document.getElementById('dio-f-r').innerText = data.reservation[1].fd;
 Document.getElementById('dio-h-w').innerText = data.walk[1].hd;
 Document.getElementById('dio-f-w').innerText = data.walk[1].fd;








}
getPrice();