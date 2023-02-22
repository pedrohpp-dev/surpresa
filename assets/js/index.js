var nomeSecreto = 'Larissa';
var tentativas = 10;

while (tentativas > 0) {
    var chute = prompt('Tente adivinhar quem é o amor do Pedro!');

    if (chute == nomeSecreto) {
        alert('Você acertou! O amor do Pedro é ' + nomeSecreto);
        break;
    }  else if (chute != nomeSecreto) {
         tentativas = tentativas - 1;
         alert('Você errou! Tente novamente. Você possui ' + tentativas + ' tentativas');
    } else if (tentativas == 5) {
         tentativas = tentativas - 1;
         alert('Você está me decepcionado... Ainda restam ' + tentativas + ' tentativas');  
    } else if (tentativas == 0) {
         alert('Você excedeu o número de tentativas. Estou muito triste :/');
    }
}

if (tentativas == 5) {
    alert('Você está me decepcionando... Ainda restam ' + tentativas + ' tentativas');
}