document.getElementById('myForm').addEventListener('submit',validateForm);
function validateForm (event) {
    let inputField = document.getElementById('inputField').value;
    let regex = /^[a-zA-Z0-9]*$/;
    if (!regex.test(inputField)) { 
        alert('Invalid format. Please input an alphanumeric value.');
        event.preventDefault();
   
    } else if (inputField === '') {
        alert('ERROR: Input required before proceeding')
        event.preventDefault();
    } else {
        alert('Thank you! Form has been submitted.')
    }
}
