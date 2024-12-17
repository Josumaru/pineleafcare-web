import { ImageResponse } from "next/og";

export const alt = "Pineleaf Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const response = await fetch(`https://pineleaf.josumaru.my.id/api/get-user?id=${params.id}`, {
    cache: "no-store",
  });
  const data = await response.json();

  if (!data) {
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 48,
            fontWeight: "bold",
            backgroundColor: "white",
            color: "black",
            width: "100%",
            height: "100%",
          }}
        >
          Pengguna Tidak Ditemukan
        </div>
      ),
      {
        ...size,
      }
    );
  }

  // Pastikan gambar memenuhi dimensi sepenuhnya
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden", // Pastikan elemen di luar container tersembunyi
          backgroundColor: "#000",
        }}
      >
        <img
          src={data.banner}
          alt="Blog Image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // Mirip dengan object-cover di Tailwind
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
