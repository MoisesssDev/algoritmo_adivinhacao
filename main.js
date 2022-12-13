
// chama um número aleátorio
function random() {
    var numero = Math.round(Math.random()*10);

    return numero;
}
var numeroPensado = random();
// console.log(numeroPensado);

// Verifica se o número escolhido é igual ao número que o usuario escolheu
function verifica () {
    if(input.value == numeroPensado) {
        document.write(msg_alerta_acertou);
        } else {
            document.write(msg_alerta_errou);
        }
    // Recarrega a página atual sem usar o cache
    // document.location.reload(true);

}

// pega o valor do input do html
var input = document.querySelector("input");

// head do HTML
let head = '<head>'
+'<meta charset="UTF-8">'
+'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
+'<meta name="viewport" content="width=device-width, initial-scale=1.0">'
+'<link rel="stylesheet" href="style.css">'
+'<link rel="preconnect" href="https://fonts.googleapis.com">'
+'<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
+'<link href="https://fonts.googleapis.com/css2?family=Aboreto&family=Anek+Telugu:wght@300;400;500;600&family=EB+Garamond:ital,wght@1,500&family=Rubik+Vinyl&display=swap" rel="stylesheet">'
+'<title>Jogo advinhação</title>'
+'</head>'

let msg_alerta_acertou = head
+'<section>'
    +'<div class="box">'
        +'<h1>Jogo de advinhação</h1>'
        +'<img class="logo" src="./icons/logo.png" alt="">'
        +'<hr>'
        +' <p> Você acertouu!!! O número pensado foi '+ numeroPensado +  '.<\p>'
        +'<button onclick="window.location.reload()" ><img src="./icons/reload (3).png" alt=""></button>'
    +'</div>'
+'</section>';


let msg_alerta_errou =head
+'<section>'
    +'<div class="box">'
        +'<h1>Jogo de advinhação</h1>'
        +'<img class="logo" src="./icons/logo.png" alt="">'
        +'<hr>'
        +' <p> Você errou!!! O número pensado foi '+ numeroPensado +  '.<\p>'
        +'<button onclick="window.location.reload()" ><img src="./icons/reload (3).png" alt=""></button>'
    +'</div>'
+'</section>';
