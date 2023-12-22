import React from "react";
import { useParams } from "react-router-dom";
import ComponentOneDetail from "../components/detail_component/component_one";
import NavBar from "../global_components/navbar";
import ComponentTwoDetail from "../components/detail_component/component_two";
import ComponentThreeDetail from "../components/detail_component/component_three";
import ComponentFourDetail from "../components/detail_component/component_four";
import ComponentFiveDetail from "../components/detail_component/component_five";
import ComponentSixDetail from "../components/detail_component/component_six";
import ComponentSevenDetail from "../components/detail_component/component_seven";
import FooterComponent from "../global_components/footer";
import provinsiDetailData from "../utils/provinsiDetailData";

function DetailPage() {
  const { id } = useParams(); // Gunakan useParams dari react-router-dom

  // Cari provinsi sesuai ID dari provinsiDetailData
  const provinsi = provinsiDetailData.find((prov) => prov.id === parseInt(id, 10));

  // Pastikan provinsi ditemukan
  if (!provinsi) {
    return <div>Provinsi tidak ditemukan</div>;
  }
  return (
    <>
      <div className="bg-basicColor ">
        <NavBar />
        <ComponentOneDetail 
            namaProvinsi={provinsi.namaProvinsi}
            deskripsiProvinsi={provinsi.descProvinsi}
            imageHeroOne={provinsi.imageHeroOne}
            imageHeroTwo={provinsi.imageHeroTwo}
            imageHeroThree={provinsi.imageHeroThree}
        />
        <ComponentTwoDetail/>
        <ComponentThreeDetail/>
        <ComponentFourDetail/>
        <ComponentFiveDetail/>
        <ComponentSixDetail/>
        <ComponentSevenDetail/>
        <FooterComponent/>
      </div>
    </>
  );
}

export default DetailPage;
