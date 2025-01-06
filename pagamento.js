function finalizarPagamento() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    if (selectedPayment) {
        window.location.href = '/';
    } else {
        alert('Por favor, selecione uma forma de pagamento.');
    }
}