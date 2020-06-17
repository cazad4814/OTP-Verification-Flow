function validateForm(){
    var x = document.getElementById('mobile').value;
    if(x.length!=10){
        alert('Enter correct Number')
    }else{
  if (x == "8770527636") {

    return true;
  }else{
      return false
  }
}
}



function verifyOTP(){
    var y = document.getElementById('mobileOtp').value;
      if(y=='1234'){
          alert('Success')
      }else{
        alert('Failed to match OTP')
      }
}