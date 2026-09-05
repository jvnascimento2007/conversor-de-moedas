async function converter() {
    const usd = document.getElementById('usd').value;
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL');
        const data = await response.json();
        const rate = data.USDBRL.bid;
        document.getElementById('resultado').innerText = 'R$ ' + (usd * rate).toFixed(2);
    } catch(err) {
        document.getElementById('resultado').innerText = 'Erro ao buscar cotação.';
    }
}
