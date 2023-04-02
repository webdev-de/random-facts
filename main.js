// JP 
const date = new Date();
const currentYear = date.getFullYear();
const creator = 'Mister WebDev';
const copyrightText = `&copy; ${currentYear} by ${creator}`;
const copyrightSpan = document.querySelector('.copyright');
copyrightSpan.innerHTML = copyrightText;