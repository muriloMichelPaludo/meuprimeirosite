function entrar(event) {
    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;

    if (usuario === "admin" && senha === "123") {
        window.location.href = "index.html";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

function comprar(produto) {
    window.location.href = "compra.html?produto=" + encodeURIComponent(produto);
}

let produtoEscolhido = document.getElementById("produtoEscolhido");

if (produtoEscolhido) {
    let parametros = new URLSearchParams(window.location.search);
    produtoEscolhido.value = parametros.get("produto") || "";
}

let formulario = document.getElementById("formCompra");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        let produto = document.getElementById("produtoEscolhido").value;
        let quantidade = document.getElementById("quantidade").value;
        let endereco = document.getElementById("endereco").value;
        let pagamento = document.getElementById("pagamento").value;

        if (!produto) {
            alert("Produto não encontrado!");
            return;
        }

        alert(
            "Compra realizada com sucesso!\n\n" +
            "Produto: " + produto +
            "\nQuantidade: " + quantidade +
            "\nEndereço: " + endereco +
            "\nPagamento: " + pagamento
        );

        window.location.href = "index.html";
    });
}
