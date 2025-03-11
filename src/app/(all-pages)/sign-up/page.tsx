import SignUpForm from "@/app/pageComponents/signup/SignUpForm";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: `MilkcoNepal-SignUp`,
    keywords: "best export  products nepal kathmandu bhaktapur",
    openGraph: {
      type: "website",
      title: `MilkcoNepal-Sign Up`,
      description: `Milk Co Nepal`,
      images: [
        {
          url: `https://img.freepik.com/free-photo/sign-up-form-button-graphic-concept_53876-101286.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717372800&semt=ais_user`,
        },
      ],
    },
  };
}

export default async function SignUpPage() {
  return <SignUpForm />;
}
