async function converter() {
    const valor = document.getElementById('valor').value;
    const par = document.getElementById('moeda').value;
    const res = document.getElementById('resultado');
    
    if(!valor) { res.innerText = 'Digite um valor'; return; }
    
    try {
        const response = await fetch('https://economia.awesomeapi.com.br/last/' + par);
        const data = await response.json();
        // O par retorna uma chave dinâmica baseada no nome (ex: USDBRL, EURBRL)
        const key = par.replace('-', '');
        const rate = data[key].bid;
        res.innerText = 'R$ ' + (valor * rate).toFixed(2);
    } catch(err) {
        res.innerText = 'Erro ao buscar cotação.';
    }
}
