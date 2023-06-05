import React, { useState } from "react";

export const Buscador = ({listadoState, setListadoState}) => {
    const [busqueda, setBusqueda] = useState("");
    const [noEncontrando, setNoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        // Crear estado y actualizarlo.
        setBusqueda(e.target.value);
        // El listado completo de peliculas(esto lo hicimos colocando listadoState y setListado en nuestra etiqueta buscador dentro de App.js y agregandolos como parametro dentro de esta funcion)
        
        // Filtrar para buscar coincidencias.
        let pelis_encontradas = listadoState.filter(peli => {
            return peli.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        });
    
        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis")); //de esta manera, si en el buscador ponemos solo una letra me busca todas las pelis.
            setNoEncontrado(true);
        }else{
            setNoEncontrado(true);
        }
        // Actualizar el estado del listado principal con lo que he logrado filtrar (si hay resultado).
        setListadoState(pelis_encontradas);
    };

    return (
        <>
            <div className="search">
                <h3 className="title">Buscador: {busqueda}</h3>
                {(noEncontrando == true && busqueda.length > 1) && (
                    <span className="no-encontrado">No se ha encontrado ninguna pelicula</span>
                )}
                
                <form>
                    <input
                        type="text"
                        id="search_field"
                        name="busqueda"
                        autoComplete="off"
                        value={busqueda}
                        onChange={buscarPeli}
                    />
                    <button id="search">Buscar</button>
                </form>
            </div>
        </>
    );
};
