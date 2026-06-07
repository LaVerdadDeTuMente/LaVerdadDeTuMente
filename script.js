document.getElementById('emailForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('emailInput').value;
    alert('¡Gracias! Revisa tu email para la guía gratis.');
    document.getElementById('emailInput').value = '';
});