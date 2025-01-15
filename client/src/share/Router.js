import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import NewBoard from "../pages/board/new-board";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/new-board" element={<NewBoard />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
