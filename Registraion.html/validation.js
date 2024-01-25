function validateForm(){
    var firstName=document.getElementById("firstName").value;
    var lastName=document.getElementById("lastName").value;
    var dob=document.getElementById("dob").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var fullName=firstName+lastName;

    //taking error feilds 
    // var nameError=document.getElementById("nameError").value;
    // var dobError=document.getElementById("dobError").value;
    // var emailError=document.getElementById("emailError").value;
    // var phoneError=document.getElementById("phoneError").value;


    //date convert into age
    var currentDate=new Date();
    var dob=new Date(dobTake);
    // var age=currentDate.getFullYear()-birthDate.getFullYear();
    // var age = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    var age = currentDate.getFullYear() - dob.getFullYear();



    //sweet aleart
    // Function to show the Sweet Pop-up
    // function showSweetPopup() {
    //     Swal.fire({
    //         title: 'Sweet Pop-up',
    //         text: 'This is a sweet-themed pop-up!',
    //         icon: 'success',
    //         confirmButtonText: 'Got it!',
    //         confirmButtonColor: '#ffcc00', // You can customize the button color
    //     });
    // }

    // flatpickr("#dob", {
    //     dateFormat: "m/d/Y", // American date format (mm/dd/yyyy)
    //     // Additional configuration options can be added here
    // });
    
    //regular expre
    var nameReg=/^[A-Za-z]+$/;
    var emailReg=/^[^\s@]+@[^\s@]+(\.[^\s@]+)+$/;
    var phoneReg=/^(91|0)?[789][0-9]{9}$/;

    if(!nameReg.test(fullName)|| fullName.length<5) {
        // nameErrorTake.textContent='please enter valid name and name greter than 5 length';
        // document.getElementById("firstName").style.borderColor = 'red';
        // document.getElementById("lastName").style.borderColor = 'red';
        alert("please enter valid name and name greter than 5 length");
        return false;
    }else if(!emailReg.test(email)){
        //emailErrorTakeErrorTake.textContent = 'Please enter a email.';
        alert("please enter valid email");
        return false;
    }else if(!phoneReg.test(phone)){
        alert("please enter valid number");
        //phoneErrorTake.textContent = 'Please enter a valid number.';
        return false;
    }else if(age<=18){
        alert("age should be 18 or above");
        return false;
    }    else{
        Swal.fire({
            title: 'Success!',
            text: 'Form submitted successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#4CAF50',
        }).then((result) => {
            if (result.isConfirmed) {
                // Reset the form
                document.getElementById('formId').reset();
            }
        });
    
        // Prevent default form submission
        return false;
    
}

}