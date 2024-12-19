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
  const responses = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/get-all-blog/`, {
      cache: "no-store",
    }
  );
  const data = await responses.json();
  let post;
  let image;

  // Cari post berdasarkan ID
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === params.id) {
      post = data[i];
      const imageToBase64 = await getImageBase64(post.image);
      image = imageToBase64.url;
      break;
    }
  }

  if (!post || !post.image) {
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
          Blog Tidak Ditemukan
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
          src={image}
          alt={post.title}
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
