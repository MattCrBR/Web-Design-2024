function verifica(str)
{
    const min=str.toLowerCase();
    const invertida=min.split("").reverse("").join("");
    return min===invertida;
}

console.log(verifica("arara"));
console.log(verifica("casa"));