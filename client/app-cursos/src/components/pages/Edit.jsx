import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export function Edit() {

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

    function updatePost(id) {
        e.preventDefault();
        axios
            .patch(`${baseURL}/${id}`, {
                titulo: data.titulo,
                descripcion: data.descripcion
            })
            .then(res => {
                updatePost(response.data);
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
                <h1>Editar Curso</h1>

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
                    <button onClick={updatePost}>Update Post</button>
                </form>
            </div>
        </>
    )


}

