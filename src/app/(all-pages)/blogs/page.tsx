import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import BlogList from "@/app/pageComponents/home/BlogList";
import { Metadata } from "next";
import { unstable_noStore } from "next/cache";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "MilkcoNepal-Blogs",
  };
}

export default async function AllNewsPage() {
  unstable_noStore();

  const { data: blogs, error: newsError } = await fetchServerData("/blogs");

  if (newsError) return <div>Sorry Something went wrong</div>;
  return (
    <div>
      <div>
        <PageHeader
          data={{
            image:
              "https://www.andreeharpur.com/wp-content/uploads/2018/08/csp-base-page.jpg",
            title: "Blogs",
          }}
        />
      </div>
      <BlogList blog_data={blogs} />
    </div>
  );
}
