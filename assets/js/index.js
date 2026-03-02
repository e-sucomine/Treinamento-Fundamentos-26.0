// Código JS aqui!

const botoes = document.querySelectorAll("button");
const numero = document.getElementById("numeroCarrinho");

    let contador = 0;

        botoes.forEach(function(botao) {
            botao.addEventListener("click", function() {

                if (botao.textContent === "Comprar") {
                    botao.textContent = "Remover";
                    botao.style.backgroundColor = "hsl(0, 100%, 50%)";
                    botao.style.border = "1px solid hsl(0, 84%, 14%)";
                    contador++;
                }
                else {
                    botao.textContent = "Comprar";
                    botao.style.backgroundColor = "hsl(113,69%, 50%)";
                    botao.style.border = "1px solid hsl(113, 69%, 22%)";
                    contador--;
                }

                numero.textContent = contador;
            });
        });