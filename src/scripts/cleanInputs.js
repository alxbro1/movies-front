const clearData = () => {
    document.getElementById('cleaner').addEventListener('click', function() {
        document.querySelectorAll('#formContainer input').forEach(input => input.value = '');
    });
}

module.exports = clearData