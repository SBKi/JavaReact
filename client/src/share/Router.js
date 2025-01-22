import React from "react";
import {BrowserRouter, createBrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import NewBoard from "../pages/board/new-board";
import DetailBoard from "../pages/board/detail-board";
import Login from "../pages/auth/login";
import Page404 from "../pages/Page404";
import Signup from "../pages/auth/signup";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="board-new" element={<NewBoard />} />
                    <Route path="board/:id" element={<DetailBoard />} />
                    <Route path="*" element={<Page404 />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
