'use client';
import GradientTitle from "@/components/common/GradientTitle";
import { NextPage } from "next";
import MitraMap from "../map/MitraMap";
import { useState } from "react";
import DropDown from "../dropdown/DropDown";

const LokasiMitra: NextPage = () => {
  // Daftar provinsi dan kota
  const provinces = ["Jawa Tengah", "Jawa Barat", "Jawa Timur", "DKI Jakarta"];
  const allCities = {
    "Jawa Tengah": ["Surakarta", "Magelang"],
    "Jawa Timur": ["Surabaya"],
    "DKI Jakarta": ["Jakarta Pusat"],
  };

  const allCardData = {
    "Jawa Tengah": {
      "Surakarta": [
        { title: "RICHDUDS STORE", desc: "JALAN PERINTIS KEMERDEKAAN NO 44 , SONDAKAN , LAWEYAN" },
        { title: "TRUZ STORE", desc: "JALAN MH THAMRIN NO 9 MANAHAN , BANJARSARI" },
      ],
      "Magelang": [
        { title: "SICKILL SHOES STORE", desc: "JALAN PAHLAWAN NO 52 , KRAJAN , TEGALREJO" }
      ]
    },
    "Jawa Timur": {
      "Surabaya": [
        { title: "DUNIA LAUNDRY STORE", desc: "JALAN MENUR 3 NO 27D" }
      ]
    },
    "DKI Jakarta": {
      "Jakarta Pusat": [
        { title: "Solusi Laundry Tanah Abang", desc: "Jl. Jembatan Tinggi Gang Tikev No. 9 RT.02 RW.09 Jati Bunder Kelurahan Kebon Kacang Kecamatan Tanah Abang Kotamadya Jakarta Pusat Kode Pos 10240" }
      ]
    }
  }

  // State untuk menyimpan provinsi dan kota yang dipilih
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showCards, setShowCards] = useState(false);

  // Mendapatkan kota berdasarkan provinsi yang dipilih
  const cities = selectedProvince ? allCities[selectedProvince] : [];

  // Mendapatkan data kartu berdasarkan provinsi dan kota
  const cardData = selectedProvince && selectedCity
    ? allCardData[selectedProvince][selectedCity]
    : Object.values(allCardData).flatMap(province => Object.values(province).flat()); // Menampilkan semua kartu jika tidak ada filter

  // Mengubah provinsi
  const handleProvinceChange = (province: string) => {
    setSelectedProvince(province);
    setSelectedCity(null);  // Reset kota saat provinsi berubah
    setShowCards(false);    // Reset kartu saat provinsi berubah
  }

  // Tombol "Atur" yang menampilkan kartu setelah filter
  const handleAtur = () => {
    setShowCards(true);
  }

  return (
    <div className="text-white mt-5 mx-5">
      <div className="text-2xl font-bold opacity-50">LOKASI MITRA</div>
      <div>
        <GradientTitle text="DIMANA SAJA MITRA PINELEAF ?" />
      </div>
      <div className="max-w-md opacity-80">
        Hingga saat ini Mitra PINELEAF telah berada di beberapa kota: Jakarta, Semarang, Surabaya, Medan, Balikpapan, Manado dan kota lainnya
      </div>
      <MitraMap />

      <div className="mt-5 flex items-center space-x-4">
        <button className="px-10 py-2 rounded-lg text-black bg-white" onClick={handleAtur}>Atur</button>

        <div className="ml-5">
          <DropDown
            options={provinces}
            placeholder="Provinsi"
            onChange={(value: string) => handleProvinceChange(value)}
          />
        </div>

        {/* Dropdown untuk kota yang bergantung pada provinsi yang dipilih */}
        <DropDown
          options={cities}
          placeholder="Kab/Kota"
          onChange={(value: string) => setSelectedCity(value)}
        />
      </div>

      {/* Menampilkan semua kartu atau kartu yang difilter setelah tombol "Atur" ditekan */}
      {showCards && cardData.length > 0 && (
        <div className="mt-8 grid grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <div key={index} className="bg-gray-500 rounded-lg p-4">
              <div className="text-lg font-semibold mt-2">{card.title}</div>
              <div className="text-sm opacity-50">{card.desc}</div>
            </div>
          ))}
        </div>
      )}

      {/* Menampilkan kartu tanpa filter */}
      {!showCards && (
        <div className="mt-8 grid grid-cols-3 gap-4">
          {Object.values(allCardData).flatMap(province => 
            Object.values(province).flat()).map((card, index) => (
            <div key={index} className="bg-gray-500 rounded-lg p-4">
              <div className="text-lg font-semibold mt-2">{card.title}</div>
              <div className="text-sm opacity-50">{card.desc}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LokasiMitra;
