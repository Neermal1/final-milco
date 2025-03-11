import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import Galleries from "@/app/pageComponents/Gallery/Galleries";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MilkcoNepal-Gallery",
    keywords: "best export  products nepal kathmandu bhaktapur",

    openGraph: {
      type: "website",
      url: "https://example.com/about",
      title: `MilkCo Nepal-Gallery`,

      images: [
        {
          url: `https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function galleryIndexPage() {
  unstable_noStore();

  const { data: galleryListData } = await fetchServerData("/gallery/list");
  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: "Gallery",
        }}
      />
      <Galleries gallery_list_data={galleryListData} />
    </div>
  );
}
