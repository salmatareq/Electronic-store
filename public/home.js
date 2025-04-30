  document.addEventListener('DOMContentLoaded', function () {
    const subscribeBtn = document.querySelector('.email-subscribe button');
    const emailInput = document.querySelector('.email-subscribe input');

    subscribeBtn.addEventListener('click', function () {
      const email = emailInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (email === "") {
        alert("Please enter your email address.");
      } else if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
      } else {
        alert("Thank you for subscribing with ${email}!");
        emailInput.value = "";
      }
    });
  });