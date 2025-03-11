import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import ProductDetail from "@/app/pageComponents/productDetail/ProductDetail";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params?.product_name;
  const { data: productDetail } = await fetchServerData(`/products/${slug}`);
  const heading = slug
    .replace(/-/g, " ")
    .replace(/(^|\s)\S/g, function (t: any) {
      return t.toUpperCase();
    });
  return {
    title: `MilkCo Nepal-${slug ? heading : "Error"}`,
    keywords: "best export  products nepal kathmandu bhaktapur",

    openGraph: {
      type: "website",
      url: "https://example.com/about",
      title: `MilkCo Nepal-${slug ? heading : "Error"}`,

      images: [
        {
          url: `${productDetail?.detail?.image_link}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function ProductDetailPage({ params }: any) {
  unstable_noStore();

  const { product_name } = params;

  const { data: productDetail } = await fetchServerData(
    `/products/${product_name}`
  );

  if (productDetail === null) return notFound();

  return (
    <div>
      <ProductDetail product_detail={productDetail} />
    </div>
  );
}
