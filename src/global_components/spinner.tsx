import React, { useState, CSSProperties } from "react";
import ClockLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "blue",
};

function Spinner() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#11CB8A");

    return (
        <div className="sweet-loading">
            <ClockLoader
                color={color}
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}

export default Spinner;

