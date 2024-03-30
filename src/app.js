

let numeroPessoas = document.getElementById('quantidadePessoas');
let valorTotal = document.getElementById('valorComanda');
let resultado = document.getElementById('resultado');
let botao = document.querySelector('button');
let pix = document.getElementById('pix');



function resultadoConta(pessoas, valor) {
    if (pix.checked) {
        let total = (valor - ((10 * valor) / 100)) / pessoas;
        let mensagem = `Com 10% de desconto, fica\n ${total.toFixed(2)} \n para cada um.`;
        return mensagem;
    } else {
        let total = valor / pessoas;
        let mensagem = `fica\n${total}\npara cada um.`
        return mensagem;
    }

}


botao.onclick = () => {
    let v1 = Number(numeroPessoas.value);
    let v2 = Number(valorTotal.value);
    resultado.innerText = resultadoConta(v1, v2);


}

