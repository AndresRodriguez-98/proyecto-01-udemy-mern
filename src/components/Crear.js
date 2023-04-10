import React from "react";

export const Crear = () => {

    const titulo = "Añadir pelicula";

    return (
        <>
            <div className="add">
                <h3 className="title">{titulo}</h3>
                <form>
                    <input type="text" id="title" placeholder="Titulo" />
                    <textarea id="description" placeholder="Descripción"></textarea>
                    <input type="submit" id="save" value="Guardar" />
                </form>
            </div>
        </>
    );
};
