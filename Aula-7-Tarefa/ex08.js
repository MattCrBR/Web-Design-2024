function conta(str) 
{
    let cont = 0;
    const vogal = ['a', 'e', 'i', 'o', 'u'];
    let char

    for (char of str) 
    {
        if (vogal.includes(char)) 
        {
            cont++;
        }
    }
    
    return cont;
}

// Exemplo de uso:
const string = "piauiense";
console.log(conta(string)); // Saída: 5
