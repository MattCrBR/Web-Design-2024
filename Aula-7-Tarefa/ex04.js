function cria(nomes) 
{
    const partes = nomes.split(' ');
    const primeiro = partes[0].toLowerCase();
    const ultimo = partes[partes.length - 1].toLowerCase();
    const email = `${primeiro}.${ultimo}@facens.br`; 
    return email;
}

const nome = "Matheus Cravo Purcena Gonçalves";
const email = cria(nome);
console.log(email);
