const memoriCost = document.getElementById('memmory-cost');
const storageCost = document.getElementById('storage-cost');
const deleveryCharge=document.getElementById('delevery-charge');
const fixtedPrice = document.getElementById('fixt-price');
const total = document.getElementById('total');

 
//Laptop price
function productDefaultPrice(amount3){
    const memoriCost = document.getElementById('memmory-cost');
    let product2 = memoriCost.innerText;
    if(amount3==true){
        product2 = '0';
    }
    else if(amount3 == false){
        product2 = '180';
    }
    memoriCost.innerText = product2;
}
document.getElementById('defult-memori').addEventListener('click',function(){
    productDefaultPrice(true);
    updateTotal();
})
document.getElementById('cost-memori').addEventListener('click',function(){
    productDefaultPrice(false);
    updateTotal();
})


//upgrate ssd price
document.getElementById('defalt-ssd').addEventListener('click', function(){ 
    storageCost.innerText = '0';
    updateTotal();
})

document.getElementById('small-ssd').addEventListener('click', function(){
    storageCost.innerText = '100';
    updateTotal();
})
document.getElementById('big-ssd').addEventListener('click', function(){
    storageCost.innerText = '180';
    updateTotal();
})


//free shipping & charge
function shippingCharges(amounts){
    const deleveryCharge=document.getElementById('delevery-charge');
    let product5 = deleveryCharge.innerText;
    if(amounts==true){
        product5 = '0';
    }
    else if(amounts == false){
        product5 = '20';
    }
    deleveryCharge.innerText = product5;
}
document.getElementById('free').addEventListener('click',function(){
    shippingCharges(true);
    updateTotal();
})
document.getElementById('cost').addEventListener('click',function(){
   shippingCharges(false);
    updateTotal();
})

//total taka
function updateTotal(){
    const fixtedPric = parseFloat(fixtedPrice.innerText);
    const laptopPrice = parseFloat(memoriCost.innerText);
    const ssdPrice = parseFloat(storageCost.innerText);
    const freeShippig = parseFloat(deleveryCharge.innerText);
    const firstTotal =fixtedPric + laptopPrice + ssdPrice + freeShippig;
    total.innerText = firstTotal;
    document.getElementById('promotcode-totalTaka').innerText = total.innerText;   
}

//copun voucher 
document.getElementById('cupon').addEventListener('click', function(){
    const myRe = "stevekaku";
    const coupon = myRe.trim();
    const input = document.getElementById('promo-code');
    const inputefild = input.value;
    if(inputefild.toUpperCase() == coupon.toUpperCase()) {
       totalDiscountTk =  total.innerText - total.innerText * 0.2;
       document.getElementById('promotcode-totalTaka').innerText = totalDiscountTk;
       input.value = "";
      
    }   
})





