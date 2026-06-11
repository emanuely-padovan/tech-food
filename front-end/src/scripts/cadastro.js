const formulario = document.getElementById("form-cadastro");

formulario.addEventListener("submit", async (event) => {

    event.preventDefault();

    const formData = new FormData();

    formData.append(
        "nome",
        document.getElementById("nome-prato").value
    );

    formData.append(
        "descricao",
        document.getElementById("descricao-prato").value
    );

    formData.append(
        "categoria",
        document.getElementById("categoria-prato").value
    );

    formData.append(
        "preco",
        document.getElementById("preco-prato").value
    );

    formData.append(
        "disponivel",
        document.getElementById("disponibilidade").value
    );

    formData.append(
        "imagem",
        document.getElementById("imagem").files[0]
    );

    try {

        const resposta = await fetch(
            "http://localhost:3000/produtos",
            {
                method: "POST",
                body: formData
            }
        );

        const dados = await resposta.json();

        console.log("Status:", resposta.status);
        console.log("Resposta:", dados);

        if (!resposta.ok) {
            throw new Error(
                dados.mensagem ||
                dados.erro ||
                "Erro ao cadastrar produto"
            );
        }

        alert("Produto cadastrado com sucesso!");

        formulario.reset();

    } catch (erro) {

        console.error(erro);

        alert(erro.message);

    }

});