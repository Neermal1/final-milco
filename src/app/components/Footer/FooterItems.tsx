import useFetchData from "@/app/hooks/useFetchData";

const FooterItems = () => {
  const { fetchedData: category } = useFetchData("nav/category");

  const updated_category = category?.map((data: any) => {
    return {
      list: data?.name,
      link: `/category/${data?.slug}`,
    };
  });

  const footerStyle = [
    {
      title: "USEFUL LINKS",
      desc: [
        {
          list: "Home",
          link: "/",
        },
        {
          list: "About Us",
          link: "/about-us",
        },
        {
          list: "Blogs",
          link: "/blogs",
        },
        {
          list: "Gallery",
          link: "/gallery",
        },
        {
          list: "Contact Us",
          link: "/contact-us",
        },
      ],
    },
    {
      title: "Products",
      desc: updated_category,
    },
  ];
  return footerStyle;
};

export default FooterItems;
