function oknoAlert() {
    alert('To jest okienko alert');
}

document.querySelector('#alert').addEventListener('click', function() {
    oknoAlert();
});