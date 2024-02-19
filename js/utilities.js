// enable next botton
const nextBtnEnable = () =>{
    const nextBtn = document.getElementById('next-btn');
    const phoneNumber = document.getElementById('passenger-phone-number').value;
    if(selectedSeats.length >0 && phoneNumber){
        nextBtn.removeAttribute('disabled', false)
    }

}

// phone navbar
const phoneNav = () =>{
    document.getElementById('nav-phone').classList.toggle('hidden');
}