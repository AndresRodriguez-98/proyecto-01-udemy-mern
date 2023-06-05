export const GuardarEnStorage = (clave, elemento) => {
    // Conseguir los elementos que ya tenemos en el localstorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    // Comprobar si es un array
    // Agregar dentro del array nuestra peli nueva
    if (Array.isArray(elementos)) {
        elementos.push(elemento);
    } else {
        // Crear un array con la nueva peli
        elementos = [elemento];
    }

    // Guardar en el localstorage
    localStorage.setItem(clave, JSON.stringify(elementos));

    // Devolver el objeto guardado
    return elemento;
};
