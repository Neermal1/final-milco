import NewsLetter from "@/app/components/NewsLetter/NewsLetter";
import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import About from "@/app/pageComponents/AboutUs/components/AboutUs";
import OurMission from "@/app/pageComponents/AboutUs/components/OurMission";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MilkcoNepal-About Us",
    keywords: "best export  products nepal kathmandu bhaktapur",
    openGraph: {
      type: "website",
      title: `MilkcoNepal-About Us`,
      description: `Milk Co Nepal`,
      images: [
        {
          url: `https://bravet.co/wp-content/uploads/2022/02/About-us.png`,
        },
      ],
    },
  };
}

export default async function AboutPage() {
  unstable_noStore();

  const { data, error: companyProfileError } = await fetchServerData(
    "/company-profile"
  );

  if (companyProfileError) {
    return <div>Sorry Something went wrong</div>;
  }

  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://t4.ftcdn.net/jpg/01/27/16/25/360_F_127162573_kcES41FWV2OOdI5GxdD4di6l4O8o0AZb.jpg",

          title: "About Us",
        }}
      />

      <About data={data} />
      <OurMission data={data} />
      <NewsLetter />
    </div>
  );
}
