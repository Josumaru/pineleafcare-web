export async function generateMetadata({ params }: { params: { id: string } }) {
    // Fetch data dari API
    const response = await fetch(`https://pineleaf.josumaru.my.id/api/get-all-blog`, {
      cache: "no-cache",
    });
    const data = await response.json();
  
    // Cari post berdasarkan id
    const post = await data.find(async (item: any) => await item.id === params.id);
  
    return {
      title: post ? post.title : "",
      description: post ? post.description : "",
      openGraph: {
        title: post ? post.title : "",
        description: post ? post.description : "",
        url: `https://pineleaf.josumaru.my.id/blog/${params.id}`,
        type: "article",
        images: [
          {
            url: post ? post.image : "/banner/default.jpg",
            width: 1200,
            height: 630,
            alt: post ? post.title : "Pineleaf Care Blog",
          },
        ],
      },
    };
  }
  
  export default function Layout({ children }: { children: React.ReactNode }) {
    return children;
  }
  