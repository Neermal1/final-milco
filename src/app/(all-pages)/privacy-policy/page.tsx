import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import PrivacyPolicy from "@/app/pageComponents/privacy/PrivacyPolicy";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MilkcoNepal-Privacy Policy",
    keywords: "best export  products nepal kathmandu bhaktapur",
    openGraph: {
      type: "website",
      title: `MilkcoNepal-Privacy Policy`,
      description: `Milk Co Nepal`,
      images: [
        {
          url: `https://t4.ftcdn.net/jpg/03/06/66/21/360_F_306662199_pYjkVvqhcYzv3Sc7PqFVIb9k9FKWffcL.jpg`,
        },
      ],
    },
  };
}

export default async function PrivacyPolicyPage() {
  unstable_noStore();
  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://t4.ftcdn.net/jpg/03/06/66/21/360_F_306662199_pYjkVvqhcYzv3Sc7PqFVIb9k9FKWffcL.jpg",
          title: "Privacy Policy",
        }}
      />

      <PrivacyPolicy />
    </div>
  );
}
