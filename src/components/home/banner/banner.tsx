import { NextPage } from "next";

const EcoFriendlySection: NextPage = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="flex flex-col md:flex-row">
        {/* Kotak PINELEAF dan #SAVETHEPLANET */}
        <div className="flex flex-col justify-center items-center bg-white text-black p-10 md:w-1/3">
          <h1 className="text-6xl font-extrabold">PINELEAF</h1>
          <p className="mt-4 text-2xl font-light">#SAVETHEPLANET</p>
        </div>

        {/* Kotak E, C, ECO-FRIENDLY, O - Menggunakan Grid */}
        <div className="grid grid-cols-2 gap-4 md:w-2/3">
          {/* Kotak E */}
          <div className="flex justify-center items-center bg-gray-900 text-white h-64">
            <h1 className="text-8xl font-extrabold">E</h1>
          </div>

          {/* Kotak C */}
          <div className="flex justify-center items-center bg-gray-600 text-white h-64">
            <h1 className="text-8xl font-extrabold">C</h1>
          </div>

          {/* Kotak ECO-FRIENDLY */}
          <div className="bg-black text-white p-6 flex flex-col justify-center h-64">
            <h2 className="text-2xl font-semibold">ECO-FRIENDLY</h2>
            <p className="text-lg mt-2 text-center">
              pineleaf: merawat sepatu, <br />
              merawat dunia!
            </p>
          </div>

          {/* Kotak O */}
          <div className="flex justify-center items-center bg-gray-800 text-white h-64">
            <h1 className="text-8xl font-extrabold">O</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoFriendlySection;
