export async function generateMetadata({ params }: { params: { id: string } }) {
  
    // Fetch data dari API
    const response = await fetch(`https://pineleaf.josumaru.my.id/api/get-user?id=${params.id}`, {
      cache: "no-store",
    });
    const data = await response.json();
    
    return {
      title: data ? data.name : "Pengguna Pineleaf",
      description: data ? `Ikuti Pengguna ${data.name ?? "Pineleaf"} ${data.postCount > 0 ? `yang memiliki ${data.postCount} tulisan` : ""}. ${data.verified ? " Pengguna Terverifikasi Oleh Pineleaf Care" : ""}` : "",
      openGraph: {
        title: data ? data.name : "Pineleaf",
        description: data ? `Ikuti Pengguna ${data.name ?? "Pineleaf"} dengan ${data.postCount ?? 0} tulisan` : "",
        url: `https://pineleaf.josumaru.my.id/pengguna/${params.id}`,
        type: "article",
        images: [
          {
            url: data ? data.image : "/banner/default.jpg",
            width: 1200,
            height: 630,
            alt: data ? data.name : "Pengguna Pineleaf",
          },
        ],
      },
    };
  }
  
  export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
  }
  