import GradientTitle from "@/components/common/GradientTitle";
import MitraMap from "../map/MitraMap";

const LokasiMitra = () => {
  return (
    <div className="text-white mt-5">
      <div className="text-2xl font-bold opacity-50">LOKASI MITRA</div>
      <GradientTitle text="DIMANA SAJA MITRA PINELEAF ?" />
      <div className="max-w-md opacity-80">
        Hingga saat ini Mitra PINELEAF telah berada di beberapa kota: Jakarta, Semarang, Surabaya, Medan, Balikpapan, Manado, dan kota lainnya.
      </div>
      <MitraMap />
    </div>
  );
};

export default LokasiMitra;
