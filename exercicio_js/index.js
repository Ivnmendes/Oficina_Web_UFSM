function separaParesImpares(numeros) {
    let impares = [];
    let pares = [];

    
    numeros.filter((numero) => {
        if (numero % 2 === 0) {
            pares.push(numero);
        } else {
            impares.push(numero);
        }
    });

    const vetores = {
        pares,
        impares,
        nPares: pares.length,
        nImpares: impares.length
    };

    console.log(vetores);
    return vetores;
}