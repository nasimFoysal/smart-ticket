let selectedSeats = [];

const coupon = "NEW15";
const coupleCoupon = "Couple 20";
const pricePerSeat = 550;

document.getElementById('seats-container').addEventListener('click', (e)=>{
    const clickedSeat = e.target;

    if(selectedSeats.length < 4 && clickedSeat.classList.contains('seat')){
        // push to array
        selectedSeats.push(clickedSeat.innerText)

        // changing bg
        clickedSeat.classList.add('bg-[#1dd100]', 'text-white')


        // update number of remaining seats
        const availableSeats = parseInt(document.getElementById('seats-left').innerText);

        const remainingSeats = availableSeats - 1;
        document.getElementById('seats-left').innerText = remainingSeats;

        // update no of selected Seats
        document.getElementById('no-of-selected-seats').innerText = selectedSeats.length;

        // show selected seats
        const showContainer = document.getElementById('selected-seat-details');

        const div = document.createElement('div');
        div.classList.add("flex", "justify-between");

        const div1 = document.createElement('div');
        div1.innerText = clickedSeat.innerText;
        const div2 = document.createElement('div');
        div2.innerText = "Economy";
        const div3 = document.createElement('div');
        div3.innerText = 550;

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);

        showContainer.appendChild(div);

        // update total price
        const totalPrice = selectedSeats.length * 550;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        
        // update grand total
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPrice.toFixed(2);

    }
    
    

    console.log(selectedSeats);
})

// coupon button
document.getElementById('apply-coupon-btn').addEventListener('click', (e)=>{
    const couponInput = document.getElementById('coupon-field').value;

    if(couponInput === coupon || couponInput === coupleCoupon){
        document.getElementById('apply-container').classList.add('hidden')
    }
    const currentTotalPrice = parseInt(document.getElementById('total-price').innerText);
    let discount = 0;
    if(couponInput === coupon){
         discount = currentTotalPrice * .15;
    } else if(couponInput === coupleCoupon){
        discount = currentTotalPrice * .20;

    }
    const grandTotal = currentTotalPrice - discount;
    document.getElementById('grand-total').innerText = grandTotal.toFixed(2);
    
})
