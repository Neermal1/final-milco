import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import { fetchServerData } from "./helperFunctions/fetchServerData";
import BlogList from "./pageComponents/home/BlogList";
import Categories from "./pageComponents/home/Categories";
import Intro from "./pageComponents/home/Intro";
import Slider from "./pageComponents/home/Slider";
import OurStory from "./pageComponents/home/OurStory";
import TopProducts from "./pageComponents/home/TopProducts";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MilkcoNepal-Home",
    keywords: "best export  products nepal kathmandu bhaktapur",
    openGraph: {
      type: "website",
      title: `MilkcoNepal-Home`,
      description: `Milk Co Nepal`,
      images: [
        {
          url: `https://www.dairyreporter.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/dairyreporter.com/news/markets/cheese-lifts-us-dairy-exports-driven-by-emerging-markets/7428124-1-eng-GB/Cheese-lifts-US-dairy-exports-driven-by-emerging-markets.jpg`,
        },
      ],
    },
  };
}

export default async function IndexPage() {
  unstable_noStore();

  const { data: sliderData, error: sliderError } = await fetchServerData(
    "/home/sliders"
  );

  const { data: companyProfile, error: companyProfileError } =
    await fetchServerData("/company-profile");

  const { data: topProducts, error: productError } = await fetchServerData(
    "/home/top-products"
  );

  const { data: category, error: categoryError } = await fetchServerData(
    "/home/product-categories"
  );

  const { data: blogs, error: newsError } = await fetchServerData("/blogs");

  if (sliderError) {
    return <div>Sorry Something went wrong</div>;
  }

  return (
    <div>
      <Slider data={sliderData} />
      <Intro data={companyProfile} />
      <TopProducts product_data={topProducts} />
      <Categories category_data={category} />
      <OurStory/>
      <NewsLetter />
      <BlogList blog_data={blogs} />
    </div>
  );
}
