import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import NewBoard from "../pages/board/new-board";
import DetailBoard from "../pages/board/detail-board";

const Router = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/board-new" element={<NewBoard />} />
                    <Route path="/board/:id" element={<DetailBoard />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default Router;
