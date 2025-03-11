import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import ContactDetail from "@/app/pageComponents/contactUs/ContactDetail";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MilkcoNepal-Contact Us",
    keywords: "best export  products nepal kathmandu bhaktapur",
    openGraph: {
      type: "website",
      title: `MilkcoNepal-Contact Us`,
      description: `Milk Co Nepal`,
      images: [
        {
          url: `https://media.istockphoto.com/id/1365543480/video/contact-us-concept.jpg?s=640x640&k=20&c=G16GzQ4uJKlITww2ArmKNB9UKb1-IT2eyJrUxkUmAIY=`,
        },
      ],
    },
  };
}

export default async function ContactPage() {
  unstable_noStore();
  const { data: companyProfile, error: companyProfileError } =
    await fetchServerData("/company-profile");

  return (
    <div>
      <div>
        <PageHeader
          data={{
            image:
              "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
            title: "Contact Us",
          }}
        />
      </div>
      <div>
        <ContactDetail data={companyProfile} />
      </div>
    </div>
  );
}
