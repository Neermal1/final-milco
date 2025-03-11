import PageHeader from "@/app/components/pageHeader/components/PageHeader";
import { fetchServerData } from "@/app/helperFunctions/fetchServerData";
import BlogDetail from "@/app/pageComponents/blogs/BlogDetail";

import { Metadata } from "next";
import { unstable_noStore } from "next/cache";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { blogDetail } = params;
  return {
    title:
      "MilkcoNepal-" +
      blogDetail.replace(/-/g, " ").replace(/(^|\s)\S/g, function (t: any) {
        return t.toUpperCase();
      }),
  };
}

export default async function BlogDetailPage({ params }: any) {
  unstable_noStore();

  const { blogDetail } = params;
  const { data: blogs, error: blogError } = await fetchServerData(
    `/blogs/${blogDetail}`
  );

  if (blogError) return <div>Error.Sorry Something went wrong</div>;

  if (blogs?.detail === null) {
    notFound();
  }

  return (
    <div>
      <div>
        <PageHeader
          data={{
            image: `${blogs?.detail?.image_link}`,
            title: `${blogs?.detail?.title}`
              .replace(/-/g, " ")
              .replace(/(^|\s)\S/g, function (t: any) {
                return t.toUpperCase();
              }),
          }}
        />
        <BlogDetail blog_detail={blogs} />
      </div>
    </div>
  );
}
