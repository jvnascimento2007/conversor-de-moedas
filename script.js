async function converter() {
    const valor = document.getElementById('valor').value;
    const origem = document.getElementById('moedaOrigem').value;
    const destino = document.getElementById('moedaDestino').value;
    const res = document.getElementById('resultado');
    
    if(!valor) { res.innerText = 'Digite um valor'; return; }
    if(origem === destino) { res.innerText = 'Escolha moedas diferentes'; return; }
    
    try {
        const par = `${origem}-${destino}`;
        const response = await fetch('https://economia.awesomeapi.com.br/last/' + par);
        const data = await response.json();
        
        const key = origem + destino;
        const rate = data[key].bid;
        res.innerText = (valor * rate).toFixed(2) + ' ' + destino;
    } catch(err) {
        res.innerText = 'Par não disponível.';
    }
}
