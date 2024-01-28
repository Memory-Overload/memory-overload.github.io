import React from "react";
import { Link } from "react-router-dom";
import Reader from "../Reader/Reader";

const TheGoodBasiliskLuzura = () => {
    return (
        <div>
            <h1>The Good Basilisk Luzura</h1>
            <h3><Link to="/">Return to Home</Link></h3>
            <div>
                <Reader story={"gbl_chunked"} />
            </div>
        </div>
    )
}

export default TheGoodBasiliskLuzura;