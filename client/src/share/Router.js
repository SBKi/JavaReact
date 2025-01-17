import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import NewBoard from "../pages/board/new-board";
import DetailBoard from "../pages/board/detail-board";
import Login from "../pages/auth/login";
import Page404 from "../pages/Page404";
import Singup from "../pages/auth/singup";

const Router = () => {
    // let isAuthorized = sessionStorage.getItem("isAuthorized");
    const flag = false
    return flag?(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/board-new" element={<NewBoard />} />
                    <Route path="/board/:id" element={<DetailBoard />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    ):(
        <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Singup />} />
                    <Route path="*" element={<Page404 />} />
                </Routes>
        </BrowserRouter>
    );
};

export default Router;
