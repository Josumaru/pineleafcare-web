"use client";
import { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import Combobox from "@/components/peluang-usaha/combobox/ComboBox";

type MarkerData = {
  id:number;
  lat:number;
  lng:number;
  title:string;
  desc:string;
  loc:string;
  province:string;
  city:string;
};
// array yang menyimpan location dengan isi latitude, longitude, title, desc, loc
const markers : MarkerData[] = [
  {id:1, lat:-7.750428543707556 , lng:110.40982537987841, title:'PINELEAF MITRA CONDONGCATUR', desc:'JALAN SUPER RAYA 210 KARANGASEM CONDONGCATUR, SLEMAN, YOGYAKARTA', loc:'XGiuLFnoz7A79KZg8',province:'Daerah Istimewa Yogyakarta',city:'Yogyakarta'},
  {id:2, lat:-7.763115462573044, lng:110.38519757467441, title:'PINELEAF MITRA KARANGGAYAM', desc:'JL.CINDE KEMBANG NO.30 B,KARANGGAYAM CT VIII,DEPOK,SLEMAN,YOGYAKARTA', loc:'KRgUUafUNfiZwtsa8',province:'Daerah Istimewa Yogyakarta',city:'Yogyakarta'},
  {id:3, lat:-6.988340461323502, lng:110.35728403701142, title:'PINELEAF MITRA NGALIYAN BE WASH SHOES, BAG & STROLLER CARE', desc:'JALAN PROF. Dr. HAMKA NO 18 TAMBAKHAJI NGALIYAN , SEMARANG', loc:'L41pnE5C3HPHft6x9',province:'Jawa Tengah',city:'Semarang'},
  {id:4, lat:-6.988827608900429, lng:110.41787355235529, title:'PINELEAF MITRA TRI LOMBA JUANG ', desc:'RUKO NO8. GO.TRI LOMBA JUANG JL.MUGASSARI SEMARANG', loc:'iDiU1vwu2GiXzPFn9',province:'Jawa Tengah',city:'Semarang'},  
  {id:5, lat:-6.976165349554066, lng:110.36999457933936, title:'PINELEAF MITRA GRAHA PADMA', desc:'jalan Ruko Graha Padma Boulevard Blok AA1 NO 33 SEMARANG', loc:'TpZQysDdqkz4MJF56',province:'Jawa Tengah',city:'Semarang'},  
  {id:6, lat:-7.558999764382082 , lng:110.7787362306144, title:'PINELEAF MITRA KLECO', desc:' JALAN TEMUGIRING NO. 45 KLECO,LAWEYAN,SOLO', loc:'6WcuPxZW7HSKvn6R8',province:'Jawa Tengah',city:'Surakarta'},  
  {id:7, lat:-7.556209080818795, lng:110.76744915432197, title:'PINELEAF MITRA UMS', desc:'JALAN GATAK BELAKANG KAMPUS 1 UMS PABELAN KARTASURO JAWA TENGAH', loc:'BN2NBCbmdhUTHAUSA',province:'Jawa Tengah',city:'Surakarta'},  
  {id:8, lat:-6.919878480273213, lng:110.2048169486831, title:'PINELEAF MITRA KENDAL', desc:'JALAN LAUT GG GEMBYANG II NO. 10 PATUKANGAN KENDAL (BELAKANG AP. DUTA FARMA)', loc:'bTvCuMi1GkUfixh9A',province:'Jawa Tengah',city:'Kendal'},  
  {id:9, lat:-7.575799, lng:110.889151, title:'PINELEAF MITRA ARYA DITRA', desc:'JALAN RAYA LAWU DEPAN SMP N 1 JATEN (SAMPING MACHO BARBERSHOP)', loc:'jNRErnP3kCy8p4hi9',province:'Jawa Tengah',city:'Karanganyar'},  
  {id:10, lat:-6.128558, lng:106.908872, title:'PINELEAF MITRA MURTHADO', desc:'JALAN H. MURTADO RT 007 / 012 NO. 35 TUGU UTARA KOJA JAKARTA UTARA', loc:'PqeSUfj9XHmEHLW66',province:'DKI Jakarta',city:'Jakarta Utara'},  
  {id:11, lat:-6.136649372371816, lng:106.84204471539019, title:'PINELEAF MITRA PADEMANGAN', desc:'JALAN PADEMANGAN 4 Gg 21 No.47i  JAKARTA UTARA', loc:'mPogvdznmt1YMpsr5',province:'DKI Jakarta',city:'Jakarta Utara'},  
  {id:12, lat:-6.291346, lng:106.852573, title:'PINELEAF MITRA PEJATEN', desc:'KAV. 99 RESIDENCE JL. GUNUK V NO. 99E PEJATEN , PASAR MINGGU, JAKARTA SELATAN', loc:'6xXoqffmaySWgbLM9',province:'DKI Jakarta',city:'Jakarta Selatan'},  
  {id:13,lat:-6.256058, lng:106.852285, title:'PINELEAF MITRA KALIBATA ', desc:'MALL KALIBATA CITY SQUARE SSG 0205 JAKARTA SELATAN', loc:'jHCGgMo4JHwaHMvT7',province:'DKI Jakarta',city:'Jakarta Selatan'},  
  {id:14, lat:-6.309053993054586, lng:106.79145852514014, title:'', desc:'JALAN KARANG TENGAH RAYA NO.61 LEBAK BULUS,CILANDAK,JAKARTA SELATAN', loc:'k2f4p5ffVzFkavPM9',province:'DKI Jakarta',city:'Jakarta Selatan'},  
  {id:14, lat:
    -6.371326, lng:106.877504, title:'PINELEAF MITRA CIBUBUR', desc:'PERUMAHAN PERMATA PURI 2 – RADAR AURI,JAKARTA TIMUR', loc:'Mz4Unim9qhHq3oSz6',province:'DKI Jakarta',city:'Jakarta Timur'},  
  {id:15, lat:-6.200117, lng:106.783858, title:'PINELEAF MITRA KEMANGGISAN', desc:'JALAN K.H SYAHDAN 16. PALMERAH ,JAKARTA BARAT', loc:'8945WFwedcoLZ8Jr5',province:'DKI Jakarta',city:'Jakarta Barat'},  
  {id:16, lat:-6.168479093214018, lng:106.7966525523466, title:'PINELEAF MITRA TAWAKAL', desc:'JALAN TAWAKAL XI NO.22 GROGOL PETAMBURAN,JAKARTA BARAT', loc:'ovoGhczyDMDUuue49',province:'DKI Jakarta',city:'Jakarta Pusat'},  
  {id:17, lat:-6.209038, lng:106.737208, title:'PINELEAF MITRA MERUYA', desc:'JALAN MERUYA SELATAN NO.24,RT 9/RW 2 MERUYA SELATAN ,KEMBANGAN,JAKARTA BARAT ', loc:'yZKDrzjoWWe4W7y66',province:'DKI Jakarta',city:'Jakarta Barat'},  
  {id:18, lat:-6.149274, lng:106.795621, title:'PINELEAF MITRA MALL SEASON CITY', desc:'MALL SEASON CITY LT.UGF C3 NO.2 (DIATAS KFC & SEBERANG RAMAYAN) JAKARTA BARAT', loc:'duVC6YyRenGxRXfc9',province:'DKI Jakarta',city:'Jakarta Barat'},  
  {id:19, lat:-6.229805, lng:106.724258, title:'PINELEAF MITRA CILEDUG TANGERANG', desc:'JALAN HOS COKROAMINOTO RT 2 RW10 KELURAHAN LARANGAN (DEKAT PHD PURI BETA 2) TANGERANG', loc:'y1dcQgevz6U6CaYB9',province:'Banten',city:'Tangerang'},
  {id:20, lat:-6.911661086151309, lng:107.61539799468251, title:'MITRA PINELEAF ART SHOES & BAG', desc:'JALAN BELITUNG NO 25 , MERDEKA SUMUR, BANDUNG', loc:'jNvLZ7645jEMX8Ak6',province:'Jawa Barat',city:'Bandung'},  
  {id:21, lat:-6.739847 , lng:108.541639, title:'PINELEAF MITRA CIREBON', desc:'JALAN EVAKUASI PERUM.TAMAN EVAKUASI INDAH (BLOK B NO.2) SUNYARANGI ,KESAMBI,CIREBON', loc:'UU2RybjrE3GjKM748',province:'Jawa Barat',city:'Cirebon'},  
  {id:22, lat:-6.921520, lng:106.923032, title:'PINELEAF MITRA SUKABUMI', desc:'TIARA TOSERBA LT.3 JALAN JENDRAL AHMAD YANI, SUKABUMI', loc:'qEwbxWcK2XCERUtv9',province:'Jawa Barat',city:'Sukabumi'},  
  {id:23, lat:-7.3450977952056435, lng:112.72757932537515, title:'PINELEAF MITRA CITO SURABAYA', desc:'MALL CITY OF TOMORROW FIRST FLOOR FO-07/1.JL.A.YANI NO.288 SURABAYA', loc:'xKngKDgb9BY3gYoq8',province:'Jawa Timur',city:'Surabaya'},  
  {id:24, lat:-7.819498, lng:111.999422, title:'PINELEAF MITRA KEDIRI', desc:'BANDAR LOR Gg.2B NO.39 ,MOJOROTO KEDIRI', loc:'gfnDhWAxJi78Gjy59',province:'Jawa Timur',city:'Kediri'},  
  {id:25, lat:-8.679550 , lng:115.242298, title:'PINELEAF MITRA RENON', desc:'JALAN TUKAD BALIAN NO.53 RENON DERNPASAR BALI (150M SELATAN PASAR RENON DEPAN JFC CHICKEN)', loc:'MmjHjwR4Ty4aaMVL7',province:'Bali',city:'Denpasar'},  
  {id:26, lat:-5.380764900339614, lng:105.25119453699526, title:'PINELEAF MITRA LAMPUNG', desc:'JALAN SOEKARDI HAMDANI No. 10 LABUHAN RATU', loc:'y69hfeVpXM72dM3p7',province:'Lampung',city:'Bandar Lampung'},  
  {id:27, lat:0.499526, lng:101.457832, title:'PINELEAF MITRA PEKANBARU', desc:'JALAN IMAM MUNANDAR NO.72 TANGKERANG SELATAN,PEKANBARU,RIAU', loc:'MBuv46vad99khNYs7',province:'Riau',city:'Pekanbaru'},  
  {id:28, lat:-4.000462, lng:122.533906, title:'PINELEAF MITRA KENDARI', desc:'JALAN MALAKA NO. 7 (DEPAN SPBU ANDONOHU), KENDARI', loc:'tFUxEPM9V57vkDcx9',province:'Sulawesi Tenggara',city:'Kendari'},  
  {id:29, lat:-5.157098130544643, lng:119.48750905048543, title:'PINELEAF MITRA MAKASSAR', desc:'JALAN RAYA BARUGA NO.31 ,ANTANG KEC.MANGGALA ,KOTA MAKASSAR', loc:'QbP5kMkUfNZNZ3yn9',province:'Sulawesi Selatan',city:'Makassar'},  
  {id:30, lat:-0.022694594441817477, lng:109.31523422347964, title:'PINELEAF MITRA PONTIANAK ', desc:'JL.HM.SUWIGNYO NO.08 PONTIANAK KOTA,KALIMANTAN BARAT', loc:'UrZDjQKEnN2xhVYY8',province:'Kalimantan Barat',city:'Pontianak'},  
  {id:31, lat:-1.243983, lng:116.857488, title:'PINELEAF MITRA BALIKPAPAN ', desc:'JALAN SUNGAI AMPAL BLOK RF 7 KOMPLEKS PASAR SEGAR BALIKPAPAN,KALIMANTAN TIMUR', loc:'9pcgZu9XbTZW6BFR8',province:'Kalimantan Timur',city:'Balik Papan'},  
  {id:32, lat:-2.226405, lng:113.924680, title:'PINELEAF MITRA PALANGKARAYA ', desc:' JALAN JANAH JARI 42A PALANGKARAYA KALIMANTAN TENGAH', loc:'ben3kr44qqXjFHu46',province:'Kalimantan Tengah',city:'Palangkaraya'},  
  {id:33, lat:-3.318714, lng:114.583351, title:'PINELEAF MITRA BANJARMASIN', desc:'JL.SUTOYO S GANG MULIA NO.2 BANJAR TENGAH BANJARMASIN,KALIMANTAN SELATAN', loc:'LPMPbshKcsaFn4Zt8',province:'Kalimantan Selatan',city:'Banjarmasin'},        
  {id:34, lat:-8.571661, lng:116.076972, title:'PINELEAF MITRA MATARAM ', desc:'JALAN NIAGA II NO.3 AMPENAN KOTA MATARAM', loc:'WuFz5fLDgwohkd5B8',province:'Nusa Tenggara Barat',city:'Mataram'},        
  {id:35, lat:-2.534877, lng:140.706187, title:'PINELEAF MITRA JAYAPURA', desc:'MALL JAYAPURA JALAN SAMRATULANGI A.PO JAYAPURA (LANTAI 2 DEPAN HUNTING FOTO / WARUNG POJOK)', loc:'ibyV31xFR8Sav78x5',province:'Papua',city:'Jayapura'},     
  {id:36, lat:-2.9758353946931715,lng:104.74177287193454,title:'PINELEAF MITRA PALEMBANG',desc:'Palembang Square Mall, Lantai 2-139',loc:'D6eDTbtQaCJ55GEv5',province:'Sumatra Selatan',city:'Palembang'}   
];



type CardData = {
  [key: string]: {
    [key: string]: { title: string; desc: string }[];
  };
};

// list yang berisi provinsi dan kota
const province = ['Daerah Istimewa Yogyakarta','Jawa Tengah','Jawa Timur','Jawa Barat','DKI Jakarta','Banten','Bali','Lampung','Riau','Sumatera Selatan','Sulawesi Tenggara','Sulawesi Utara','Sulawesi Selatan','Kalimantan Barat','Kalimantan Timur','Kalimantan Tengah','Kalimantan Selatan','Kalimantan Utara','Nusa Tenggara Barat','Papua']
const city = [
  {city:['Yogyakarta'],province:'Daerah Istimewa Yogyakarta'},
  {city:["Semarang","Surakarta","Kendal","Salatiga","Karanganyar"],province:'Jawa Tengah'},
  {city:["Surabaya", "Kediri"],province:'Jawa Timur'},
  {city:["Bandung","Cirebon","Sukabumi"],province:'Jawa Barat'},
  {city:["Jakarta Utara","Jakarta Selatan","Jakarta Barat","Jakarta Timur","Jakarta Pusat"],province:'DKI Jakarta'},
  {city:["Tangerang"],province:'Banten'},
  {city:["Denpasar"],province:'Bali'},
  {city:["Bandar Lampung"],province:'Lampung'},
  {city:["Pekanbaru"],province:'Riau'},
  {city:["Palembang"],province:'Sumatera Selatan'},
  {city:["Kendari"],province:'Sulawesi Tenggara'},
  {city:["Manado"],province:'Sulawesi Utara'},
  {city:["Makassar"],province:'Sulawesi Selatan'},
  {city:["Pontianak"],province:'Kalimantan Barat'},
  {city:["Balikpapan"],province:'Kalimantan Timur'},
  {city:["Palangkaraya"],province:'Kalimantan Tengah'},
  {city:["Banjarmasin"],province:'Kalimantan Selatan'},
  {city:["Tarakan"],province:'Kalimantan Utara'},
  {city:["Mataram"],province:'Nusa Tenggara Barat'},
  {city:["Jayapura"],province:'Papua'},

];
// array yang yang berisi card 
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
const MitraMap = () => {
  const [selectedProvince, setSelectedProvince] = useState<string | null>(null);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showCards, setShowCards] = useState(false);
  const filteredMarkers = markers.filter((marker) =>{
    if(selectedProvince && marker.province !== selectedProvince) return false;
    if(selectedCity && marker.city !== selectedCity) return false;
    return true;
  });
  const filteredCity = selectedProvince ? city.find((item)=>item.province === selectedProvince)?.city || [] : [];
  const [isClient, setIsClient] = useState(false);
  const [refreshMap, setRefreshMap] = useState(false);
  // Menyimpan referensi peta
  const mapRef = useRef<L.Map | null>(null);  
  // map
  useEffect(() => {
    setIsClient(true);
    setRefreshMap(true)
    const initializeLeaflet = async () => {
      const L = await import('leaflet');

      // Menggunakan ikon custom
      L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      });

    // Inisialisasi peta hanya jika belum ada
      if (!mapRef.current) {
        const mapContainer = document.getElementById('map');
        if (mapContainer) {
          console.log('Peta sedang diinisialisasi...');
          mapRef.current = L.map('map', {
            center: [-2.5489, 118.0149],
            zoom: 5,
          });
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(mapRef.current);

          // Menambahkan marker dan popup
          filteredMarkers.forEach((marker) => {
            const googleMapsLink = `https://maps.app.goo.gl/${marker.loc}`;
            if (mapRef.current){
              L.marker([marker.lat, marker.lng])
              .addTo(mapRef.current)
              .bindPopup(`
                <b>${marker.title}</b><br/>
                ${marker.desc}<br/>
                <a href="${googleMapsLink}" target="_blank">Lihat di Google Maps</a>
              `);
            }
          });
        }
      }
    };
    initializeLeaflet();

    return () => {
    // Bersihkan peta saat komponen di-unmount
      if (mapRef.current) {
        mapRef.current.off();
        mapRef.current = null;
      }
    };
    
  }, [filteredMarkers]); // Hanya dijalankan sekali saat komponen di-mount

  if (!isClient) {
    return <p>Loading map...</p>;
  }

  const handleAtur = () => {
    setShowCards(true);
    setRefreshMap((prev)=>!prev);
  };
  const cardData = filteredMarkers.map((marker)=>({
    title:marker.title,
    desc:marker.desc
  }))
  return (
    <div>
      {/* menampilkan map pada web */}
      <div id="map" key={refreshMap ? "active" : "inactive"} style={{ height: '400px', width: '100%' }} className="rounded-xl mt-5 z-10" />
      <div>
        <div className="mt-5 flex items-center space-x-4">
          <button className="px-10 py-2 rounded-lg text-black bg-white" onClick={handleAtur}>Atur </button>
          <div className="">
            <Combobox
              options={province}
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
              options={filteredCity}
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
    </div>
  );
};

export default MitraMap;
