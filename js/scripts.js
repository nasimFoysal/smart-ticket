const selectedSeats = [];
const pricePerSeat = 550;

document.getElementById('seats-container').addEventListener('click', (e)=>{
    const clickedSeat = e.target;

    const ifSeat = clickedSeat.classList.contains('seat');
    const isSelected = selectedSeats.includes(clickedSeat.innerText);

    if(selectedSeats.length < 4 && ifSeat && !isSelected){
        // push to array
        selectedSeats.push(clickedSeat.innerText);

        clickedSeat.classList.add('my-transition')

        // changing bg
        clickedSeat.classList.add('bg-[#1dd100]', 'text-white');


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
        div3.innerText = pricePerSeat;

        div.appendChild(div1);
        div.appendChild(div2);
        div.appendChild(div3);

        showContainer.appendChild(div);

        // update total price
        const totalPrice = selectedSeats.length * pricePerSeat;
        document.getElementById('total-price').innerText = totalPrice.toFixed(2);
        
        // update grand total
        const grandTotal = document.getElementById('grand-total');
        grandTotal.innerText = totalPrice.toFixed(2);

        // check if apply btn & field should be enabled
        const applyBtn = document.getElementById('apply-coupon-btn');
        const couponField = document.getElementById('coupon-field');
        if(selectedSeats.length === 4){
            applyBtn.removeAttribute('disabled', false);
            couponField.removeAttribute('disabled', false);
        }

        // check if next btn should be enabled
        const phoneNumber = document.getElementById('passenger-phone-number').value;
        if(phoneNumber){
            nextBtnEnable();
        }

    } else if(selectedSeats.length === 4 && ifSeat){
        alert("You can buy a maximum of 4 seats")
    } 

    // if one seat is selected twice 
    if(isSelected && selectedSeats.length !== 4){
        alert('You have already Selected this seat')
    }
})



//apply coupon button
document.getElementById('apply-coupon-btn').addEventListener('click', (e)=>{
    const coupon = document.getElementById('coupon-code').innerText;
    const coupleCoupon = document.getElementById('couple-coupon-code').innerText;

    const couponInput = document.getElementById('coupon-field').value;

    if(couponInput){
        if(couponInput === coupon || couponInput === coupleCoupon){
            document.getElementById('apply-container').classList.add('hidden');
            // -----
            const currentTotalPrice = parseInt(document.getElementById('total-price').innerText);
            let discount = 0;
            if(couponInput === coupon){
                discount = currentTotalPrice * .15;
            } else if(couponInput === coupleCoupon){
                discount = currentTotalPrice * .20;
        
            }
            document.getElementById('discount-container').classList.remove('hidden');
            document.getElementById('discount').innerText = discount.toFixed(2);
        
            const grandTotal = currentTotalPrice - discount;
            document.getElementById('grand-total').innerText = grandTotal.toFixed(2);
        } else{
            alert('Invalid coupon code!');
            document.getElementById('coupon-field').value = "";
        }
       
    } else{
        
       alert('Enter a valid coupon code!');
    }
})
