document.getElementById('responseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const response = document.getElementById('response').value;
    
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Response:', response);
    
    // Redirect to the thank you page
    window.location.href = 'thankyou.html';
});
