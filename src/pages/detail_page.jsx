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

function DetailPage({ provinsiData, budayaData }) {
  const { id } = useParams(); // Gunakan useParams dari react-router-dom

  // Cari provinsi sesuai ID dari provinsiDetailData
  const provinsi = provinsiData.find((prov) => prov.id_provinsi === parseInt(id, 10));

  const budayaTari = budayaData.filter((b) => b.id_provinsi === parseInt(id, 10) && b.id_jenis_budaya === 2);
  const budayaMakanan = budayaData.filter((b) => b.id_provinsi === parseInt(id, 10) && b.id_jenis_budaya === 3);
  const budayaUpacara = budayaData.filter((b) => b.id_provinsi === parseInt(id, 10) && b.id_jenis_budaya === 4);
  const budayaSenjata = budayaData.filter((b) => b.id_provinsi === parseInt(id, 10) && b.id_jenis_budaya === 5);

  console.log(budayaTari);

  // Pastikan provinsi ditemukan
  if (!provinsi || budayaTari.length === 0 || budayaMakanan.length === 0 || budayaUpacara.length === 0 || budayaSenjata.length === 0) {
    return <div>Data tidak ditemukan</div>;
  }
  return (
    <>
      <div className="bg-basicColor ">
        <NavBar provinsiData={provinsiData}/>
        <ComponentOneDetail 
            namaProvinsi={provinsi.nama_provinsi}
            deskripsiProvinsi={provinsi.deskripsi_provinsi}
            imageHeroOne={provinsi.image_provinsi_satu}
            imageHeroTwo={provinsi.image_provinsi_dua}
            imageHeroThree={provinsi.image_provinsi_tiga}
        />
        <ComponentTwoDetail
            namaProvinsi={provinsi.nama_provinsi}
            imageBudayaSatu={budayaTari[0].image_budaya}
            imageBudayaDua={budayaTari[1].image_budaya}
            imageBudayaTiga={budayaTari[2].image_budaya}
            imageBudayaEmpat={budayaTari[3].image_budaya}
            imageBudayaLima={budayaTari[4].image_budaya}
            namaBudayaSatu={budayaTari[0].nama_budaya}
            namaBudayaDua={budayaTari[1].nama_budaya}
            namaBudayaTiga={budayaTari[2].nama_budaya}
            namaBudayaEmpat={budayaTari[3].nama_budaya}
            namaBudayaLima={budayaTari[4].nama_budaya}
            deskripsiBudayaSatu={budayaTari[0].deskripsi_budaya}
            deskripsiBudayaDua={budayaTari[1].deskripsi_budaya}
            deskripsiBudayaTiga={budayaTari[2].deskripsi_budaya}
            deskripsiBudayaEmpat={budayaTari[3].deskripsi_budaya}
            deskripsiBudayaLima={budayaTari[4].deskripsi_budaya}
        />
        <ComponentThreeDetail
            namaProvinsi={provinsi.nama_provinsi}
            namaBudaya={budayaMakanan[0].nama_budaya}
            deskripsiBudaya={budayaMakanan[0].deskripsi_budaya}
            imageBudaya={budayaMakanan[0].image_budaya}
            imageSide={budayaMakanan[0].image_side}
        />
        <ComponentFourDetail
            namaBudaya={budayaMakanan[1].nama_budaya}
            deskripsiBudaya={budayaMakanan[1].deskripsi_budaya}
            imageBudaya={budayaMakanan[1].image_budaya}
            imageSide={budayaMakanan[1].image_side}
        />
        <ComponentFiveDetail
            namaBudaya={budayaMakanan[2].nama_budaya}
            deskripsiBudaya={budayaMakanan[2].deskripsi_budaya}
            imageBudaya={budayaMakanan[2].image_budaya}
            imageSide={budayaMakanan[2].image_side}
        />
        <ComponentSixDetail
            namaBudaya={budayaUpacara[0].nama_budaya}
            deskripsiBudaya={budayaUpacara[0].deskripsi_budaya}
            imageBudaya={budayaUpacara[0].image_budaya}
            imageSide={budayaUpacara[0].image_side}
        />
        <ComponentSevenDetail
            namaProvinsi={provinsi.nama_provinsi}
            imageBudayaSatu={budayaSenjata[0].image_budaya}
            imageBudayaDua={budayaSenjata[1].image_budaya}
            imageBudayaTiga={budayaSenjata[2].image_budaya}
            imageBudayaEmpat={budayaSenjata[3].image_budaya}
            namaBudayaSatu={budayaSenjata[0].nama_budaya}
            namaBudayaDua={budayaSenjata[1].nama_budaya}
            namaBudayaTiga={budayaSenjata[2].nama_budaya}
            namaBudayaEmpat={budayaSenjata[3].nama_budaya}
            deskripsiBudayaSatu={budayaSenjata[0].deskripsi_budaya}
            deskripsiBudayaDua={budayaSenjata[1].deskripsi_budaya}
            deskripsiBudayaTiga={budayaSenjata[2].deskripsi_budaya}
            deskripsiBudayaEmpat={budayaSenjata[3].deskripsi_budaya}
        />
        <FooterComponent/>
      </div>
    </>
  );
}

export default DetailPage;
