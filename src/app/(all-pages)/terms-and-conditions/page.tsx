import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import Terms from "@/app/pageComponents/TermsAndConditions/Terms";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `MilkcoNepal-Terms And Conditions`,
    keywords: "best export  products nepal kathmandu bhaktapur",
    openGraph: {
      type: "website",
      title: `MilkcoNepal-Terms and Conditions`,
      description: `Milk Co Nepal`,
      images: [
        {
          url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_5NNGj3omrPmQf_C843fzucX3leCom3iMA&s`,
        },
      ],
    },
  };
}

export default async function TermsPage() {
  return (
    <div>
      <PageHeader
        data={{
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY_5NNGj3omrPmQf_C843fzucX3leCom3iMA&s",
          title: "Terms And Conditions",
        }}
      />
      <Terms />
    </div>
  );
}
