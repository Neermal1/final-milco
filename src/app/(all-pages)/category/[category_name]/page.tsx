import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import CategoryDetail from "@/app/pageComponents/categoryDetail/CategoryDetail";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params?.category_name;
  const heading = slug
    .replace(/-/g, " ")
    .replace(/(^|\s)\S/g, function (t: any) {
      return t.toUpperCase();
    });

  const { data: categoryDetail } = await fetchServerData(`/${slug}/products`);
  return {
    title: `MilkCo Nepal-${slug ? heading : "Error"}`,
    keywords: "best export  products nepal kathmandu bhaktapur",

    openGraph: {
      type: "website",
      url: "https://example.com/about",
      title: `MilkCo Nepal-${slug ? heading : "Error"}`,

      images: [
        {
          url: `${categoryDetail?.category?.image_link}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function CategoryDetailPage({ params }: any) {
  unstable_noStore();

  const { category_name } = params;
  const { data: categoryDetail, error: categoryDetailError } =
    await fetchServerData(`/${category_name}/products`);
  if (categoryDetailError) return notFound();

  return (
    <div>
      <PageHeader
        data={{
          image: categoryDetail?.category?.image_link,
          title: category_name
            .replace(/-/g, " ")
            .replace(/(^|\s)\S/g, function (t: any) {
              return t.toUpperCase();
            }),
        }}
      />
      <CategoryDetail category_detail={categoryDetail} />
    </div>
  );
}
