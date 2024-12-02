import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const locations = [
  { lat: -6.188952, lng: 106.811534, title: 'Solusi Laundry Tanah Abang', description: 'Jl. Jembatan Tinggi, Gang Tikev, No. 9, RT.02/RW.09, Jati Bunder, Kelurahan Kebon Kacang, Kecamatan Tanah Abang, Jakarta Pusat 10240', loc:'nQeVMyo6J8bAtd1AA' },
  { lat: -7.558579, lng: 110.816872, title: 'RICHDUDS STORE', description: 'JALAN PERINTIS KEMERDEKAAN NO 44 , SONDAKAN , LAWEYAN', loc: 'QbdAEHrrj4GMVK567' },
  { lat: -7.55694, lng: 110.80278, title: 'TRUZ STORE', description: 'JALAN MH THAMRIN NO 9 MANAHAN , BANJARSARI', loc: 'u4pUfewYSBmpbJmG6'},
  { lat: -7.7802795, lng: 110.3965122, title: 'ART BOX STORE', description: 'JALAN PRINGGONDANI NO 1-B MRICAN BARU', loc: 'FfFjrBVYs4S4D9FH7'},
  { lat: -7.468944690936209, lng: 110.21723662830762, title: 'ART BOX STORE', description: 'JALAN PAHLAWAN NO 52 , KRAJAN , TEGALREJO', loc: 't7yNWwsURVhwyAVC9'},
  { lat: -7.287751380859812 , lng:112.76539139468674, title: 'DUNIA LAUNDRY STORE', description: 'Jl. Menur 3 No.27', loc: 'MKzJKEJTno6nEkPH6'},  
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

    initializeLeaflet();
  }, []);

  if (!isClient) {
    return <p>Loading map...</p>;
  }

  return <div id="map" style={{ height: '400px', width: '100%' }} className="rounded-xl mt-5" />;
};

export default MitraMap;
