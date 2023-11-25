document.getElementById('EmailForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
  
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
  
    console.log('Email:', email);
    console.log('Message:', message);
    
  });

  document.getElementById('EmailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    

    alert('Form has been submitted successfully!');
  });