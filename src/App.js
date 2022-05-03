import React from "react";
import { UseEffectScroll } from 'react-use-smooth-scroll'
import 'react-use-smooth-scroll/dist/index.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import "./styles/GlobalStyle.scss";

const App = () => {

    return (
        <>
            <CustomCursor />
            <Navbar />
            <UseEffectScroll>
                <Home />
                <Footer />
            </UseEffectScroll>
        </>
    );
};
export default App;