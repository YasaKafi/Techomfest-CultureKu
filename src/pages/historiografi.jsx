import React from "react";
import NavBar from "../global_components/navbar";
import ComponentOneHistoriografi from "../components/historiografi_component/component_one";

function HistoriografiPage() {
  return (
    <>
        <div className="bg-basicColor">
            <NavBar/>
            <ComponentOneHistoriografi/>
        </div>
    </>
  );
}

export default HistoriografiPage;