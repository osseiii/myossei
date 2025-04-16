
const userName = prompt('Enter your name:');


if (userName !== null && userName !== '') {
    document.querySelector('h1').textContent = `Welcome, ${userName.toUpperCase()}!`;
} 
else {
    document.querySelector('h1').textContent = `Hey, Anonymous welcome!`
}
