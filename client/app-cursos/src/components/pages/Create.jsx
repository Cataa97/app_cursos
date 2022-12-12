import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export function Create() {

    let baseURL = "http://localhost:4000/curso"

    const [data, setData] = useState({
        titulo: "",
        date: "",
    });

    useEffect(() => {
        axios.get(`${baseURL}`).then((res) => {
            setData(res.data);
        });
    }, []);

    function submit(e) {
        e.preventDefault();
        axios
            .post(baseURL, {
                titulo: data.titulo,
                descripcion: data.descripcion
            })
            .then(res => {
                console.log(res.data)
            })
    }
    function handle(e) {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value;
        setData(newdata);
        console.log(newdata)
    }

    const fileInput = document.querySelector("#file");
    return (
        <>
            <div className='jumbo'>
                <h1>Crear Curso</h1>
                <p>Formulario para crear curso</p>

                <form className='formulario' onSubmit={(e) => submit(e)}>
                    <div className='form-group'>
                        <label htmlFor='titulo'>Título</label>
                        <input type="text" name="titulo" id="titulo" value={data.titulo} onChange={(e) => handle(e)} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='descripcion'>Descripción</label>
                        <textarea type="text" name="descripcion" id="descripcion" value={data.descripcion} onChange={(e) => handle(e)} />
                    </div>
                    {/* <div className='form-group'>
                        <label htmlFor='file0'>Imagen</label>
                        <input type="file" name="file0" id="file" />
                    </div> */}
                    <input type="submit" className='btn btn-success' />
                </form>
            </div>
        </>
    )


}

