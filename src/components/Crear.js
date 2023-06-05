import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

export const Crear = ({ setListadoState }) => {
    const titulo = "Añadir pelicula";

    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: "",
    });

    const conseguirDatosFormulario = (e) => {
        e.preventDefault(); // Hace que el evento se active en esta funcion nada mas, y no se genere un "bubbling"

        let titulo = e.target.titulo.value;
        let descripcion = e.target.descripcion.value;

        // Crear objeto de la peli a guardar
        let peli = {
            id: new Date().getTime(), //asi siempre conseguis que el id sea diferente. Hoy en dia se hace con un uID
            titulo,
            descripcion,
        };

        // Guardar estado
        setPeliState(peli);

        // Actualizar estado

        setListadoState((elementos) => {
            return [...elementos, peli]; //de esta forma podemos agregar a los elementos que ya haya en el listado la nueva peli
        });

        //Guardar en el almacenamiento local
        GuardarEnStorage("pelis", peli);
        console.log(peli);
    };

    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>
            <form onSubmit={conseguirDatosFormulario}>
                {/* onSubmit es el evento que tiene el formulario y ConseguirDatos es el target al cual se le aplica el evento*/}
                <input name="titulo" type="text" id="title" placeholder="Titulo" />
                <textarea name="descripcion" id="description" placeholder="Descripción"></textarea>
                <input type="submit" id="save" value="Guardar" />
            </form>
        </div>
    );
};
