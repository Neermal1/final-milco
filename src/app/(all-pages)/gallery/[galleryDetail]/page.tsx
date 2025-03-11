import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import Gallery from "@/app/pageComponents/Gallery/Gallery";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const slug = params?.galleryDetail;
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
          url: `https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}

export default async function galleryDetailPage({ params }: any) {
  unstable_noStore();

  const slug = params?.galleryDetail;
  const { data: galleryDetail } = await fetchServerData(
    `/gallery/${params?.galleryDetail}/images`
  );
  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
          title: slug
            .replace(/-/g, " ")
            .replace(/(^|\s)\S/g, function (t: any) {
              return t.toUpperCase();
            }),
        }}
      />

      <Gallery galleryCollection={galleryDetail} />
    </div>
  );
}
