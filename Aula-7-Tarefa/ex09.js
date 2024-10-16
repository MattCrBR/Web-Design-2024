function valida(email)
{
    const partes=email.split('@');

    if(partes.length!==2)
    {
        return false;
    }
    
    const dom=partes[1];
    if(dom.indexOf('.')===-1)
    {
        return false;
    }
    
    return true;
}

console.log(valida("exemplo@gmail.com"));
console.log(valida("exemplogmail.com"));
console.log(valida("exemplo@gmail"));
console.log(valida("exemplo@gmail@gmail.com"));