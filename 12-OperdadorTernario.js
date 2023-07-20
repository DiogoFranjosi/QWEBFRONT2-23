//Senha do usuário recebida do Banco de Dados
const BDsenha = 12345;

const senhaInformada = 12345;
let usuarioLogado;

if(senhaInformada == BDsenha){
    usuarioLogado = true
} else {
    usuarioLogado = false
}   

console.log((usuarioLogado?"=== ACESSANDO USUÁRIO ===" : "=== SENHA INCORRETA, VERIFIQUE SUA SENHA! ==="))
