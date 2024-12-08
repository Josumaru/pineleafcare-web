import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const locations = [
  { lat:-7.750428543707556 , lng:110.40982537987841, title:'PINELEAF MITRA CONDONGCATUR', description:'JALAN SUPER RAYA 210 KARANGASEM CONDONGCATUR, SLEMAN, YOGYAKARTA', loc:'XGiuLFnoz7A79KZg8'},
  { lat:-7.763115462573044, lng:110.38519757467441, title:'PINELEAF MITRA KARANGGAYAM', description:'JL.CINDE KEMBANG NO.30 B,KARANGGAYAM CT VIII,DEPOK,SLEMAN,YOGYAKARTA', loc:'KRgUUafUNfiZwtsa8'},
  { lat:-6.988340461323502, lng:110.35728403701142, title:'PINELEAF MITRA NGALIYAN BE WASH SHOES, BAG & STROLLER CARE', description:'JALAN PROF. Dr. HAMKA NO 18 TAMBAKHAJI NGALIYAN , SEMARANG', loc:''},
  { lat:-6.988827608900429, lng:110.41787355235529, title:'PINELEAF MITRA TRI LOMBA JUANG ', description:'RUKO NO8. GO.TRI LOMBA JUANG JL.MUGASSARI SEMARANG', loc:'iDiU1vwu2GiXzPFn9'},  
  { lat:-6.976165349554066, lng:110.36999457933936, title:'PINELEAF MITRA GRAHA PADMA', description:'jalan Ruko Graha Padma Boulevard Blok AA1 NO 33 SEMARANG', loc:'TpZQysDdqkz4MJF56'},  
  { lat:-7.558999764382082 , lng:110.7787362306144, title:'PINELEAF MITRA KLECO', description:' JALAN TEMUGIRING NO. 45 KLECO,LAWEYAN,SOLO', loc:'6WcuPxZW7HSKvn6R8'},  
  { lat:-7.556209080818795, lng:110.76744915432197, title:'PINELEAF MITRA UMS', description:'JALAN GATAK BELAKANG KAMPUS 1 UMS PABELAN KARTASURO JAWA TENGAH', loc:'BN2NBCbmdhUTHAUSA'},  
  { lat:-6.919878480273213, lng:110.2048169486831, title:'PINELEAF MITRA KENDAL', description:'JALAN LAUT GG GEMBYANG II NO. 10 PATUKANGAN KENDAL (BELAKANG AP. DUTA FARMA)', loc:'bTvCuMi1GkUfixh9A'},  
  { lat:-7.575799, lng:110.889151, title:'PINELEAF MITRA ARYA DITRA', description:'JALAN RAYA LAWU DEPAN SMP N 1 JATEN (SAMPING MACHO BARBERSHOP)', loc:'jNRErnP3kCy8p4hi9'},  
  { lat:
    -6.128558, lng:106.908872, title:'', description:'JALAN H. MURTADO RT 007 / 012 NO. 35 TUGU UTARA KOJA JAKARTA UTARA', loc:'PqeSUfj9XHmEHLW66'},  
  { lat:-6.136649372371816, lng:106.84204471539019, title:'PINELEAF MITRA PADEMANGAN', description:'JALAN PADEMANGAN 4 Gg 21 No.47i  JAKARTA UTARA', loc:'mPogvdznmt1YMpsr5'},  
  { lat:-6.291346, lng:106.852573, title:'PINELEAF MITRA PEJATEN', description:'KAV. 99 RESIDENCE JL. GUNUK V NO. 99E PEJATEN , PASAR MINGGU, JAKARTA SELATAN', loc:'6xXoqffmaySWgbLM9'},  
  { lat:-6.256058, lng:106.852285, title:'PINELEAF MITRA KALIBATA ', description:'MALL KALIBATA CITY SQUARE SSG 0205 JAKARTA SELATAN', loc:'jHCGgMo4JHwaHMvT7'},  
  { lat:-6.309053993054586, lng:106.79145852514014, title:'', description:'JALAN KARANG TENGAH RAYA NO.61 LEBAK BULUS,CILANDAK,JAKARTA SELATAN', loc:'k2f4p5ffVzFkavPM9'},  
  { lat:
    -6.371326, lng:106.877504, title:'PINELEAF MITRA CIBUBUR', description:'PERUMAHAN PERMATA PURI 2 – RADAR AURI,JAKARTA TIMUR', loc:'Mz4Unim9qhHq3oSz6'},  
  { lat:-6.200117, lng:106.783858, title:'PINELEAF MITRA KEMANGGISAN', description:'JALAN K.H SYAHDAN 16. PALMERAH ,JAKARTA BARAT', loc:'8945WFwedcoLZ8Jr5'},  
  { lat:-6.168479093214018, lng:106.7966525523466, title:'PINELEAF MITRA TAWAKAL', description:'JALAN TAWAKAL XI NO.22 GROGOL PETAMBURAN,JAKARTA BARAT', loc:'ovoGhczyDMDUuue49'},  
  { lat:-6.209038, lng:106.737208, title:'PINELEAF MITRA MERUYA', description:'JALAN MERUYA SELATAN NO.24,RT 9/RW 2 MERUYA SELATAN ,KEMBANGAN,JAKARTA BARAT ', loc:'yZKDrzjoWWe4W7y66'},  
  { lat:
    -6.149274, lng:106.795621, title:'PINELEAF MITRA MALL SEASON CITY', description:'MALL SEASON CITY LT.UGF C3 NO.2 (DIATAS KFC & SEBERANG RAMAYAN) JAKARTA BARAT', loc:'duVC6YyRenGxRXfc9'},  
  { lat:-6.229805, lng:106.724258, title:'PINELEAF MITRA CILEDUG TANGGERANG', description:'JALAN HOS COKROAMINOTO RT 2 RW10 KELURAHAN LARANGAN (DEKAT PHD PURI BETA 2) TANGERANG', loc:'y1dcQgevz6U6CaYB9'},
  { lat:-6.911661086151309, lng:107.61539799468251, title:'MITRA PINELEAF ART SHOES & BAG', description:'JALAN BELITUNG NO 25 , MERDEKA SUMUR, BANDUNG', loc:'jNvLZ7645jEMX8Ak6'},  
  { lat:-6.739847 , lng:108.541639, title:'PINELEAF MITRA CIREBON', description:'JALAN EVAKUASI PERUM.TAMAN EVAKUASI INDAH (BLOK B NO.2) SUNYARANGI ,KESAMBI,CIREBON', loc:'UU2RybjrE3GjKM748'},  
  { lat:-6.921520, lng:106.923032, title:'PINELEAF MITRA SUKABUMI', description:'TIARA TOSERBA LT.3 JALAN JENDRAL AHMAD YANI, SUKABUMI', loc:'qEwbxWcK2XCERUtv9'},  
  { lat:-7.3450977952056435, lng:112.72757932537515, title:'PINELEAF MITRA CITO SURABAYA', description:'MALL CITY OF TOMORROW FIRST FLOOR FO-07/1.JL.A.YANI NO.288 SURABAYA', loc:'xKngKDgb9BY3gYoq8'},  
  { lat:-7.819498, lng:111.999422, title:'PINELEAF MITRA KEDIRI', description:'BANDAR LOR Gg.2B NO.39 ,MOJOROTO KEDIRI', loc:'gfnDhWAxJi78Gjy59'},  
  { lat:-8.679550 , lng:115.242298, title:'PINELEAF MITRA RENON', description:'JALAN TUKAD BALIAN NO.53 RENON DERNPASAR BALI (150M SELATAN PASAR RENON DEPAN JFC CHICKEN)', loc:'MmjHjwR4Ty4aaMVL7'},  
  { lat:-5.380764900339614, lng:105.25119453699526, title:'PINELEAF MITRA LAMPUNG', description:'JALAN SOEKARDI HAMDANI No. 10 LABUHAN RATU', loc:'y69hfeVpXM72dM3p7'},  
  { lat:0.499526, lng:101.457832, title:'PINELEAF MITRA PEKANBARU', description:'JALAN IMAM MUNANDAR NO.72 TANGKERANG SELATAN,PEKANBARU,RIAU', loc:'MBuv46vad99khNYs7'},  
  { lat:-4.000462, lng:122.533906, title:'PINELEAF MITRA KENDARI', description:'JALAN MALAKA NO. 7 (DEPAN SPBU ANDONOHU), KENDARI', loc:'tFUxEPM9V57vkDcx9'},  
  { lat:-5.157098130544643, lng:119.48750905048543, title:'PINELEAF MITRA MAKASSAR', description:'JALAN RAYA BARUGA NO.31 ,ANTANG KEC.MANGGALA ,KOTA MAKASSAR', loc:'QbP5kMkUfNZNZ3yn9'},  
  { lat:-0.022694594441817477, lng:109.31523422347964, title:'PINELEAF MITRA PONTIANAK ', description:'JL.HM.SUWIGNYO NO.08 PONTIANAK KOTA,KALIMANTAN BARAT', loc:'UrZDjQKEnN2xhVYY8'},  
  { lat:-1.243983, lng:116.857488, title:'PINELEAF MITRA BALIKPAPAN ', description:'JALAN SUNGAI AMPAL BLOK RF 7 KOMPLEKS PASAR SEGAR BALIKPAPAN,KALIMANTAN TIMUR', loc:'9pcgZu9XbTZW6BFR8'},  
  { lat:-2.226405, lng:113.924680, title:'PINELEAF MITRA PALANGKARAYA ', description:' JALAN JANAH JARI 42A PALANGKARAYA KALIMANTAN TENGAH', loc:'ben3kr44qqXjFHu46'},  
  { lat:-3.318714, lng:114.583351, title:'PINELEAF MITRA BANJARMASIN', description:'JL.SUTOYO S GANG MULIA NO.2 BANJAR TENGAH BANJARMASIN,KALIMANTAN SELATAN', loc:'LPMPbshKcsaFn4Zt8'},        
  { lat:
    -8.571661, lng:116.076972, title:'PINELEAF MITRA MATARAM ', description:'JALAN NIAGA II NO.3 AMPENAN KOTA MATARAM', loc:'WuFz5fLDgwohkd5B8'},        
  { lat:-2.534877, lng:140.706187, title:'PINELEAF MITRA JAYAPURA', description:'MALL JAYAPURA JALAN SAMRATULANGI A.PO JAYAPURA (LANTAI 2 DEPAN HUNTING FOTO / WARUNG POJOK)', loc:'ibyV31xFR8Sav78x5'},        


];

const MitraMap = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const initializeLeaflet = async () => {
      const L = await import('leaflet');

      // Menggunakan ikon custom
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
      });

      // Inisialisasi peta
      const map = L.map('map', {
        center: [-2.5489, 118.0149],
        zoom: 5,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

      // Menambahkan marker dan popup
      locations.forEach((location) => {
        const googleMapsLink = `https://maps.app.goo.gl/${location.loc}`;
        L.marker([location.lat, location.lng])
          .addTo(map)
          .bindPopup(`
            <b>${location.title}</b><br/>
            ${location.description}<br/>
            <a href="${googleMapsLink}" target="_blank">Lihat di Google Maps</a>
          `);
      });
    };
    console.log('aku berjalan ')
    initializeLeaflet();
  }, []);

  if (!isClient) {
    return <p>Loading map...</p>;
  }

  return <div id="map" style={{ height: '400px', width: '100%' }} className="rounded-xl mt-5" />;
};

export default MitraMap;
