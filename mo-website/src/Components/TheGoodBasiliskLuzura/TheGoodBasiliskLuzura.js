import React from "react";
import { Link } from "react-router-dom";
import GBL from "./GBL";

const TheGoodBasiliskLuzura = () => {
    return (
        <div>
            <h1>The Good Basilisk Luzura</h1>
            <h3><Link to="/">Return to Home</Link></h3>
            <div>
                <GBL />
            </div>
        </div>
    )
}

export default TheGoodBasiliskLuzura;