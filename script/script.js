document.addEventListener("DOMContentLoaded", () => {
  const phrases = ["Forex Trader", "Bot Builder", "Web Developer", "Software Engineer"];
  const animatedText = document.getElementById("mbwa");
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let typing = true;

  function type() {
      if (typing) {
          if (currentCharIndex < phrases[currentPhraseIndex].length) {
              animatedText.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
              currentCharIndex++;
              setTimeout(type, 100);
          } else {
              typing = false;
              setTimeout(type, 2000);
          }
      } else {
          if (currentCharIndex > 0) {
              animatedText.textContent = animatedText.textContent.slice(0, -1);
              currentCharIndex--;
              setTimeout(type, 100);
          } else {
              typing = true;
              currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
              setTimeout(type, 500);
          }
      }
  }

  type();
});

//trail
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      if (response.ok) {
        alert('Thank you! Your message has been sent.');
        form.reset(); // Reset the form fields
      } else {
        alert('Oops! There was a problem submitting your form.');
      }
    }).catch(error => {
      alert('Oops! There was a problem submitting your form.');
      console.error(error);
    });
  });

//app

  document.getElementById('de').addEventListener('click', function() {
    // Define the phone number and message
    const phoneNumber = '+254794320296';
    const message = encodeURIComponent('I WANT TO PURCHASE DERIV BOT');
    
    // Create the WhatsApp URL
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open the URL in a new window/tab
    window.open(url, '_blank');
  });

  document.getElementById('mt').addEventListener('click', function() {
    // Define the phone number and message
    const phoneNumber = '+254794320296';
    const message = encodeURIComponent('I WANT TO PURCHASE META TRADER BOT');
    
    // Create the WhatsApp URL
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open the URL in a new window/tab
    window.open(url, '_blank');
  });
