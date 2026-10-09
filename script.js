const form = document.getElementById('booking-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const dogName = document.getElementById('dogName').value.trim();
  const dogSize = document.getElementById('dogSize').value;
  const hairLength = document.getElementById('hairLength').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  if (!dogName || !dogSize || !hairLength || !service || !date || !time) {
    message.textContent = 'Please complete all required fields before booking.';
    return;
  }

  message.textContent = `Thanks, ${dogName}! Your ${dogSize.toLowerCase()} dog with a ${hairLength.toLowerCase()} coat is booked for ${service} on ${date} at ${time}.`;
  form.reset();
});
