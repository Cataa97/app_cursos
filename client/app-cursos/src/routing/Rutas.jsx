import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Courses } from "../components/pages/Courses";
import { Create } from "../components/pages/Create";
import { Home } from "../components/pages/Home";
import { Search } from "../components/pages/Search";
import { Edit } from "../components/pages/Edit";

export const Rutas = () => {
    return (

        <BrowserRouter>
            {/*LAYOUT*/}
            <Header />
            <Nav />

            {/*Contenido central y rutas*/}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/crear" element={<Create />} />
                    <Route path="/buscar/:busqueda" element={<Search />} />
                    <Route path="/editar/:id" element={<Edit />} />
                    <Route path="*" element={
                        <div className="jumbo">
                            <h1>Error 404!</h1>
                        </div>
                    } />
                </Routes>
            </section>

            <Sidebar />
            <Footer />

        </BrowserRouter>

    );
}