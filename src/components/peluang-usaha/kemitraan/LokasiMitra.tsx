"use client";

import { useState } from "react";
import GradientTitle from "@/components/common/GradientTitle";
import MitraMap from "../map/MitraMap";
import Combobox from "@/components/peluang-usaha/combobox/ComboBox";


const LokasiMitra = () => {
  
  type Cities = {
    [key: string]: string[];
  };
  
  type CardData = {
    [key: string]: {
      [key: string]: { title: string; desc: string }[];
    };
  };
  
  const allCities: Cities = {
    "Daerah Istimewa Yogyakarta":["Yogyakarta"],
    "Jawa Tengah":["Semarang","Surakarta","Kendal","Salatiga","Karanganyar",],
    "Jawa Timur":["Surabaya", "Kediri"],
    "Jawa Barat":["Bandung","Cirebon","Sukabumi"],
    "DKI Jakarta":["Jakarta Utara","Jakarta Selatan","Jakarta Barat","Jakarta Timur","Jakarta Pusat"],
    "Banten":["Tangerang","Serang","Cilegon"],
    "Bali":["Denpasar"],
    "Lampung":["Bandar Lampung"],
    "Riau":["Pekanbaru"],
    "Sumatra Selatan":["Palembang"],
    "Sulawesi Tenggara":["Kendari"],
    "Sulawesi Utara":["Manado"],
    "Sulawesi Selatan":["Makassar"],
    "Kalimantan Barat":["Pontianak"],
    "Kalimantan Timur":["Balikpapan"],
    "Kalimantan Tengah":["Palangkaraya"],
    "Kalimantan Selatan":["Banjarmasin"],
    "Kalimantan Utara":["Tarakan"],
    "Nusa Tenggara Barat":["Mataram"],
    "Papua":["Jayapura"]
    

  };
  const provinces = ["Daerah Istimewa Yogyakarta","Jawa Tengah","Jawa Timur","Jawa Barat","DKI Jakarta","Banten","Bali","Lampung","Riau","Sumatra Selatan","Sulawesi Tenggara","Sulawesi Utara","Sulawesi Selatan","Kalimantan Barat","Kalimantan Timur","Kalimantan Tengah","Kalimantan Selatan","Kalimantan Utara","Nusa Tenggara Barat","Papua"];
  const allCardData: CardData = {
    "Daerah Istimewa Yogyakarta": {
      "Yogyakarta": [
        {
          title: "PINELEAF MITRA CONDONGCATUR",
          desc: "JALAN SUPER RAYA 210 KARANGASEM CONDONGCATUR, SLEMAN, YOGYAKARTA",
        },
        {
          title: "PINELEAF MITRA KARANGGAYAM",
          desc: "JL. CINDE KEMBANG NO.30 B, KARANGGAYAM CT VIII, DEPOK, SLEMAN, YOGYAKARTA",
        },
      ],
    },
    "Jawa Tengah": {
      "Semarang": [
        {
          title: "PINELEAF MITRA NGALIYAN BE WASH SHOES, BAG & STROLLER CARE",
          desc: "JALAN PROF. Dr. HAMKA NO 18 TAMBAKHAJI NGALIYAN, SEMARANG",
        },
        {
          title: "PINELEAF MITRA TRI LOMBA JUANG",
          desc: "RUKO NO.8, JL. MUGASSARI TRI LOMBA JUANG, SEMARANG",
        },
      ],
      "Surakarta": [
        {
          title: "PINELEAF MITRA KLECO",
          desc: "JALAN TEMUGIRING NO. 45 KLECO, LAWEYAN, SOLO",
        },
        {
          title: "PINELEAF MITRA UMS",
          desc: "JALAN GATAK BELAKANG KAMPUS 1 UMS PABELAN, KARTASURO, JAWA TENGAH",
        },
      ],
      "Kendal": [
        {
          title: "PINELEAF MITRA KENDAL",
          desc: "JALAN LAUT GG GEMBYANG II NO. 10 PATUKANGAN KENDAL (BELAKANG AP. DUTA FARMA)"
        }
      ],
      "Salatiga" : [
        {
          title : "PINELEAF MITRA SALATIGA",
          desc : "PERUMAHAN KOTA BARU NO. 11-12 SALATIGA"
        },
      ],
      "Karanganyar": [
        {
          title: "PINELEAF MITRA ARYA DITRA",
          desc: "JALAN RAYA LAWU DEPAN SMP N 1 JATEN (SAMPING MACHO BARBERSHOP)"
        }
      ],
    },
    "Jawa Timur": {
      "Surabaya": [
        {
          title: "PINELEAF MITRA CITO SURABAYA",
          desc: "MALL CITY OF TOMORROW FIRST FLOOR FO-07/1, JL. A. YANI NO.288, SURABAYA",
        },
      ],
      "Kediri": [
        {
          title: "PINELEAF MITRA KEDIRI",
          desc: "BANDAR LOR Gg.2B NO.39, MOJOROTO, KEDIRI",
        },
      ],
    },
    "Jawa Barat": {
      "Bandung": [
        {
          title: "MITRA PINELEAF",
          desc: "ART SHOES & BAGJALAN BELITUNG NO 25 , MERDEKA SUMUR, BANDUNG"
        }
      ],
      "Cirebon": [
        {
          title: "PINELEAF MITRA CIREBON",
          desc: "JALAN EVAKUASI PERUM.TAMAN EVAKUASI INDAH (BLOK B NO.2) SUNYARANGI ,KESAMBI,CIREBON"
        }
      ],
      "Sukabumi": [
        {
          title: "PINELEAF MITRA SUKABUMI",
          desc: "TIARA TOSERBA LT.3 JALAN JENDRAL AHMAD YANI ,SUKABUMI"
        }
      ],
    },
    "DKI Jakarta": {
      "Jakarta Utara": [
        {
          title: "PINELEAF MITRA MURTHADO",
          desc: "JALAN H. MURTADO RT 007 / 012 NO. 35, TUGU UTARA, KOJA, JAKARTA UTARA",
        },
        {
          title: "PINELEAF MITRA PADEMANGAN",
          desc: "JALAN PADEMANGAN 4 Gg. 21 No.47i, JAKARTA UTARA",
        },
      ],
      "Jakarta Selatan": [
        {
          title: "PINELEAF MITRA PEJATEN",
          desc: "KAV. 99 RESIDENCE JL. GUNUK V NO. 99E, PEJATEN, PASAR MINGGU, JAKARTA SELATAN",
        },
        {
          title: "PINELEAF MITRA KALIBATA",
          desc: "MALL KALIBATA CITY SQUARE SSG 0205, JAKARTA SELATAN",
        },
        {
          title: "PINELEAF MITRA LEBAK BULUS",
          desc: "Jalan Karang Tengah Raya No.61, Lebak Bulus, Cilandak, Jakarta Selatan"
        }
      ],
      "Jakarta Barat": [
        {
          title:"PINELEAF MITRA KEMANGGISAN",
          desc:"Jalan K.H Syahdan 16, Palmerah, Jakarta Barat"
        },
        {
          title:"PINELEAF MITRA TAWAKAL",
          desc:"Jalan Tawakal XI No.22, Grogol Petamburan, Jakarta Barat"
        },
        {
          title:"PINELEAF MITRA MERUYA",
          desc:"Jalan Meruya Selatan No.24, RT 9/RW 2, Meruya Selatan, Kembangan, Jakarta Barat"
        },
        {
          title:"PINELEAF MITRA MALL SEASON CITY",
          desc:"Mall Season City LT.UGF C3 No.2, Jakarta Barat (Di atas KFC & Sebelah Ramayana)"
        },
        
      ],
      "Jakarta Timur": [
        {
          title:"PINELEAF MITRA CIBUBUR",
          desc:"Perumahan Permata Puri 2 – Radar Auri, Jakarta Timur"
        },
      ],
      "Jakarta Pusat": [
        {
          title:"PINELEAF MITRA KELAPA DUA DEPOK",
          desc:"Ruko Lakasari No.1, Jalan Nusantara Kompleks Hankam, Kelapa Dua Depok"
        },
      ]
    },
    "Banten": {
      "Tangerang": [
        {
          title:"PINELEAF MITRA CILEDUG TANGERANG",
          desc:"Jalan Hos Cokroaminoto RT 2 RW10, Kelurahan Larangan (Dekat PHD Puri Beta 2), Tangerang"
        },
        {
          title:"PINELEAF MITRA BSD TANGERANG",
          desc:"Jalan Suplir Blok H2 No.17, Griya Loka Sektor 1-4, BSD, Tangsel"
        },
      ],
      "Serang": [
        {
          title:"PINELEAF MITRA BEKASI KEMANG PRATAMA",
          desc:"Ruko Kemang Pratama, Jalan Kemang Pratama Raya, Serang"
        },
      ],
      "Cilegon": [
        {
          title:"PINELEAF MITRA BEKASI TAMBUN",
          desc:"Perumahan Grand Wisata Blok AA 12/12, Cilegon"
        },
      ]
    },
    "Bali": {
      "Denpasar": [
        {
          title: "PINELEAF MITRA RENON",
          desc: "JALAN TUKAD BALIAN NO.53, RENON, DENPASAR, BALI",
        },
      ],
    },
    "Lampung" : {
      "Bandar Lampung": [
        {
          title: "PINELEAF MITRA LAMPUNG",
          desc: "JALAN SOEKARDI HAMDANI No. 10 LABUHAN RATU (BELAKANG UBL BANDAR LAMPUNG)",
        },
      ],
    },
    "Riau" : {
      "Pekanbaru": [
        {
          title: "PINELEAF MITRA PEKANBARU",
          desc: "JALAN IMAM MUNANDAR NO.72, TANGKERANG SELATAN, PEKANBARU, RIAU",
        },
      ],
    },
    "Sumatra Selaran": {
      "Palembang": [
        {
          title:"PINELEAF MITRA PALEMBANG",
          desc:"Palembang Square Mall, Lantai 2-139, Palembang"
        },
        {
          title:"PINELEAF MITRA PARAMESWARA",
          desc:"Jalan Alamsyah Ratu Prawiranegara No. 55 RT 04 RW 01, Bukit Baru (Parameswara, Palembang)"
        },
      ],
    },
    "Sulawesi Tenggara": {
      "Kendari": [
        {
          title:"PINELEAF MITRA KENDARI",
          desc:"Jalan Malaka No. 7 (Depan SPBU Andonohu), Kendari"
        },
      ],
    },
    "Sulawesi Utara": {
      "Manado": [
        {
          title:"PINELEAF MITRA MANADO",
          desc:"MTC GF Pintu Belakang Samping Solaria"
        },
      ]
    },
    "Sulawesi Selatan": {
      "Makassar": [
        {
          title:"PINELEAF MITRA MAKASSAR",
          desc:"Jalan Raya Baruga No. 31, Antang, Kec. Manggala, Kota Makassar"
        },
      ]
    },
    "Kalimantan Barat": {
      "Pontianak": [
        {
          title: "PINELEAF MITRA PONTIANAK",
          desc: "JL.HM.Suwignyo No.08, Pontianak Kota, Kalimantan Barat"
        }
      ]
    },
    "Kalimantan Timur": {
      "Balikpapan": [
        {
          title: "PINELEAF MITRA BALIKPAPAN",
          desc: "Jalan Sungai Ampal Blok RF 7, Kompleks Pasar Segar, Balikpapan"
        }
      ]
    },
    "Kalimantan Tengah": {
      "Palangkaraya": [
        {
          title: "PINELEAF MITRA PALANGKARAYA",
          desc: "Jalan Janah Jari 42A, Palangkaraya, Kalimantan Tengah"
        }
      ]
    },
    "Kalimantan Selatan": {
      "Banjarmasin": [
        {
          title: "PINELEAF MITRA BANJARMASIN 1",
          desc: "Jalan Simpang Adiyaksa RT 26 No. 26, Banjarmasin, Kalimantan Selatan"
        },
        {
          title: "PINELEAF MITRA BANJARMASIN 2",
          desc: "JL.Sutoyo S Gang Mulia No.2, Banjar Tengah, Banjarmasin, Kalimantan Selatan"
        }
      ]
    },
    "Kalimantan Utara": {
      "Tarakan": [
        {
          title: "PINELEAF MITRA TARAKAN",
          desc: "Jalan Mulawarman RT.27 No 57, Tarakan, Kalimantan Utara"
        }
      ]
    },
    "Nusa Tenggara Barat": {
      "Mataram": [
        {
          title: "PINELEAF MITRA MATARAM ",
          desc: "JALAN NIAGA II NO.3 AMPENAN KOTA MATARAM"
        }
      ]
    },
    "Papua": {
      "Jayapura": [
        {
          title: "PINELEAF MITRA JAYAPURA",
          desc: "MALL JAYAPURA JALAN SAMRATULANGI A.PO JAYAPURA (LANTAI 2 DEPAN HUNTING FOTO / WARUNG POJOK)"
        }
      ]
    },

  };
  
  

  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showCards, setShowCards] = useState(false);

  const cities = selectedProvince ? allCities[selectedProvince] || [] : [];
  const cardData = selectedProvince && selectedCity
    ? allCardData[selectedProvince]?.[selectedCity] || []
    : Object.values(allCardData).flatMap(province => Object.values(province).flat());

  const handleAtur = () => {
    setShowCards(true);
  };

  return (
    <div className="text-white mt-5 mx-5">
      <div className="text-2xl font-bold opacity-50">LOKASI MITRA</div>
      <GradientTitle text="DIMANA SAJA MITRA PINELEAF ?" />
      <div className="max-w-md opacity-80">
        Hingga saat ini Mitra PINELEAF telah berada di beberapa kota: Jakarta, Semarang, Surabaya, Medan, Balikpapan, Manado, dan kota lainnya.
      </div>
      <MitraMap />

      <div className="mt-5 flex items-center space-x-4">
        <button className="px-10 py-2 rounded-lg text-black bg-white" onClick={handleAtur}>
          Atur
        </button>

        <div className="">
          <Combobox
            options={provinces}
            placeholder="Pilih Provinsi"
            onChange={(value) => {
              setSelectedProvince(value);
              setSelectedCity(null);
              setShowCards(false);
            }}
          />
        </div>

        <div className="">
          <Combobox
            options={cities}
            placeholder="Pilih Kota"
            onChange={(value) => setSelectedCity(value)}
          />
        </div>
      </div>

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
};

export default LokasiMitra;
