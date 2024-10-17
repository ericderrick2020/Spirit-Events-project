function messageReceived() {
    const email = document.getElementById('email').value.trim();

    if (email === '') {
        alert("Please fill in your Email.");
    } else {
        alert("Thank you for subscribing");
    }
}