function pdobro(num)
{
    if(num<=0)
    {
        console.log("Só é aceito números positivos maiores que zero");
    }
    else
    {
        let dobro=num*2;
        console.log(`O dobro de ${num} é ${dobro}`);
    }
}

pdobro(-123);
pdobro(15);
pdobro(500);
pdobro(0);
pdobro(4);