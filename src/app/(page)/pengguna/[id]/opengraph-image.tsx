import { ImageResponse } from "next/og";
import axios from 'axios'
import sharp from 'sharp';

const getImageBase64 = async (url: string) => {
  return axios.get<ArrayBuffer>(url, {
    responseType: 'arraybuffer',
  }).then(async (res) => {
    const buffer = await sharp(res.data).toFormat('png').toBuffer()
    return {
      url: `data:${'image/png'};base64,${buffer.toString('base64')}`,
    };
  })
}

export const alt = "Pineleaf Blog";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { id: string } }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-user?id=${params.id}`,
    {
      cache: "no-store",
    }
  );
  const data = await response.json();
  const imageToBase64 = await getImageBase64(data.image)
  const image = imageToBase64.url;

  if (!data && !image) {
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
          width={720}
          height={720}
          src={image}
          alt={data.name}
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
