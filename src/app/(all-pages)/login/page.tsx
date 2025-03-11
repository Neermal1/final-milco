import LoginForm from "@/app/pageComponents/login/LoginForm";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `MilkcoNepal-Login`,
    keywords: "best export  products nepal kathmandu bhaktapur",
    openGraph: {
      type: "website",
      title: `MilkcoNepal-Login`,
      description: `Milk Co Nepal`,
      images: [
        {
          url: `https://img.freepik.com/premium-vector/blue-login-button-cursor-icon-arrow-icon-web-banner-web-template_100456-6441.jpg`,
        },
      ],
    },
  };
}

export default async function LoginPage() {
  return (
    <div className="layout component-padding">
      <LoginForm />
    </div>
  );
}
