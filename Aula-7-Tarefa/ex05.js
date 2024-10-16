let resultado = "";
let i;

for (i = 1; i <= 10; i++) 
{
    resultado += i;
    if (i < 10) 
    {
        resultado += "-";
    }
}

console.log(resultado);