import React, { useEffect, useState } from "react";
import { Editar } from "./Editar";

export const Listado = ({ listadoState, setListadoState }) => {
    /* const [listadoState, setListadoState] = useState([]); */
    const [editar, setEditar] = useState(0);
    
    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);

        return peliculas;
    };

    const borrarPeli = (id) => {
        // Conseguir peliculas almacenadas
        let pelis_guardadas = conseguirPeliculas();

        // Filtrar esas peliculas para que elimine del array la que no quiero
        let nuevo_array_peliculas = pelis_guardadas.filter((peli) => peli.id !== parseInt(id)); //de esta manera, recorremos todo el array de pelis que tenemos y lo filtramos, quedandonos unicamente con aquellas pelis que tengan un id distinto al que le pasamos por parametro.

        // Actualizar estado del listado
        setListadoState(nuevo_array_peliculas);

        // Actualizr los datos en el localStorage
        localStorage.setItem("pelis", JSON.stringify(nuevo_array_peliculas));
    };

    return (
        <>
            {listadoState ? (
                listadoState.map((peli) => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="description">{peli.descripcion}</p>
                            <button
                                className="edit"
                                onClick={() => {
                                    setEditar(peli.id);
                                }}
                            >
                                Editar
                            </button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>
                                Borrar
                            </button>
                            {/*formulario para Editar*/}
                            {editar === peli.id && (
                                <Editar
                                    peli={peli}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar={setEditar}
                                    setListadoState={setListadoState}
                                />
                            )}
                        </article>
                    );
                })
            ) : (
                <h2>No hay peliculas para mostrar</h2>
            )}
        </>
    );
};
