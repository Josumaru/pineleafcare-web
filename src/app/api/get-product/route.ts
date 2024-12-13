import { createClient } from "@/utils/supabase/server";
import { load } from "cheerio";

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const page = url.searchParams.get("page");
  const client = createClient();
  const file = (await client).storage
    .from("product")
    .getPublicUrl(`page_${page}.html`);
  const response = await fetch(file.data.publicUrl);
  const data = await response.text();
  const $ = load(data);

  let products: Product[] = [];
  const elements = $(
    ".shop-search-result-view .row .shop-search-result-view__item"
  );
  elements.map((index, element) => {
    let name = "";
    let price = "";
    let rating = "";
    let sold = "";
    let discount = "";
    let img = "";
    let link = "";
    price = $(element).find("span").text().trim();
    name =
      $(element).find("a div div div div").text().trim().split(price).shift() ??
      "";
    if (!name.toLocaleLowerCase().includes("grosir")) {
      discount =
        `${$(element)
          .find("a div div div")
          .text()
          .trim()
          .split(price)
          .pop()
          ?.split("%")
          .shift()}%` ?? "0%";
      link = $(element).find("a").attr("href") ?? "";
      const ratingSold =
        $(element).find("a").text().split("%").pop()?.replaceAll(name, "") ??
        "5.01RB";
      rating = ratingSold.slice(0, 3).trim();
      sold = ratingSold.slice(3).trim();
      if (!/^\d\.\d$/.test(rating)) {
        console.log("Rating invalid:", rating);
        rating = "";
      }
      if (!/^\d+\s*Terjual$/.test(sold)) {
        console.log("Terjual invalid:", sold);
        sold = "";
      }
      img =
        `https://down-id.img.susercontent.com/file/${$(element)
          .find("img")
          .attr("src")
          ?.split("/")
          .pop()}` ?? "";
      products.push({
        name,
        price,
        rating,
        sold,
        discount,
        img,
        link,
      });
    }
  });
  return new Response(JSON.stringify({ products: products }), { status: 200 });
}
