
const form = document.getElementById('card-form');
const bankLogo = document.getElementById('bank-logo');
const paymentLogo = document.getElementById('payment-logo');
const thumbnail = document.getElementById('card-thumbnail');
const tableBody = document.querySelector('#card-table tbody');

form.addEventListener('input', (event) => {
  const bankName = document.getElementById('bank-name').value;
  const paymentType = document.getElementById('payment-type').value;


  if (bankName === 'Sber') {
    bankLogo.src = 'https://toplogos.ru/images/logo-sber.png';
  } else if (bankName === 'VTB') {
    bankLogo.src = 'https://www.vtb.ru/-/media/Files/V/logo.png';
  } else {
    bankLogo.src = '';
  }

  if (paymentType === 'visa') {
    paymentLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png';
  } else if (paymentType === 'mastercard') {
    paymentLogo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Mastercard-logo.png/200px-Mastercard-logo.png';
  } else {
    paymentLogo.src = '';
  }
});


form.addEventListener('submit', (event) => {
  event.preventDefault(); 


  const bankName = document.getElementById('bank-name').value;
  const paymentType = document.getElementById('payment-type').value;
  const cardNumber = document.getElementById('card-number').value;
  const cardHolder = document.getElementById('card-holder').value;
  const expiryDate = document.getElementById('expiry-date').value;

 
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${bankName}</td>
    <td>${paymentType}</td>
    <td>${cardNumber}</td>
    <td>${cardHolder}</td>
    <td>${expiryDate}</td>
  `;
  tableBody.appendChild(newRow);


  form.reset();


  bankLogo.src = '';
  paymentLogo.src = '';
});