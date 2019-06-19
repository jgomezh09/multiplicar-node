let suma = (num1, num2) => {
    return new Promise((resolve, reject) => {
        let suma = num1 + num2;

        if (!suma)
            reject(`No se puede sumar`)
        else
            resolve(suma)
    })
}


module.exports = {
    suma
}