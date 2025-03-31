import { Poppins } from "next/font/google";
import dynamic from "next/dynamic"; // Import dynamic
import AntdContextProvider from "./antdContext/AntdContext";
import CustomerInfoContextProvider from "./context/CustomerInfoContext";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { fetchServerData } from "./helperFunctions/fetchServerData";

// Dynamically import Header to avoid client-server conflict
const Header = dynamic(() => import("./components/Header/Header"), { ssr: false });

export async function generateMetadata(): Promise<Metadata> {
  const { data: companyProfile } = await fetchServerData("/company-profile");
  return {
    icons: {
      icon: companyProfile?.favicon_link,
    },
  };
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { data: category } = await fetchServerData("/nav/category");
  const { data: companyProfile } = await fetchServerData("/company-profile");

  const headerItems = [
    { name: "Home", slug: "/" },
    { name: "About Us", slug: "/about-us" },
    { name: "Our Gallery", slug: "/gallery" },
    { name: "Products", subMenu: category, slug: "/category" },
    { name: "Blogs", slug: "/blogs" },
    { name: "Contact Us", slug: "/contact-us" },
  ];

  return (
    <html lang="en">
      <body className={poppins.className}>
        <CustomerInfoContextProvider>
          <AntdContextProvider>
            <Header header_data={{ companyProfile, headerItems }} />
            {children}
            <Footer footer_data={{ companyProfile, category }} />
          </AntdContextProvider>
        </CustomerInfoContextProvider>
      </body>
    </html>
  );
}
