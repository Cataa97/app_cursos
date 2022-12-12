import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const baseURL = "http://localhost:4000/curso"


export const Search = () => {
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setCourses(response.data);
        });
    }, []);



    const deletePost = (id, e) => {
        axios
            .delete(`${baseURL}/${id}`)
            .then(() => {
                alert("Curso borrado con éxito!");
                setCourses(null)
            });

    }



    if (!courses) return null;
    console.log(courses)

    return (
        courses.map((course, i) => {
            return (
                <div key={i}>
                    <article key={courses.id} className="courses-item">
                        <div className='mask'>
                            <img src="https://www.jardineriaon.com/wp-content/uploads/2017/03/rosa-roja-1-830x551.jpg.webp" />
                        </div >
                        <div className='datos'>
                            <h3 className="title">{course.titulo}</h3>
                            <p className="description">{course.descripcion}</p>

                            <button className="edit">Editar</button>
                            <button className="delete" onClick={(e) => deletePost(course.id)} value={courses.id}>Borrar</button>
                        </div>
                    </article>
                </div>
            )
        })
    )

}
