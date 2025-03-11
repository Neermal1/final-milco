import React from "react";

export interface IDefaultAntdContext {
  openDrawer: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
  openLogOutModal: boolean;
  setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>;
  openEnquiryModal: boolean;
  setEnquiryModal: React.Dispatch<React.SetStateAction<boolean>>;
  loading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ISlider {
  data: ISliderData[];
}

interface ISliderData {
  id: number;
  title: string;
  image_link: string;
}

export interface IProduct {
  product_data: IProductData[];
}
interface IProductData {
  name: string;
  product_category_id: string;
  image_link: string;
  description?: string;
  slug: string;
  id: number;
}

interface IReviews {
  id: number;
  product_id: string;
  user_id: string;
  ratings: string;
  message: string;
}

interface IDetail extends IProductData {
  additional_information: string;
  reviews: IReviews[];
}

export interface IProductDetail {
  product_detail: {
    detail: IDetail;
    relateds: IProductData[];
  };
}

export interface ICategory {
  category_data: ICategoryData[];
}
export interface ICategoryData {
  name: string;
  slug: string;
  image_link: string;
  id: number;
}

export interface ICategoryDetail {
  category_detail: {
    category: ICategoryData;
    products: IDetail[];
  };
}

export interface IBlogs {
  blog_data: IBlogData[];
}

export interface IBlogDetail {
  blog_detail: {
    detail: IBlogData;
    others: IBlogData[];
  };
}

interface IBlogData {
  title: string;
  slug: string;
  description: string;
  id: number;
  image_link: string;
  created_at: string;
}

export interface IComponentHeader {
  data: {
    heading: string;
    subheading: string;
  };
}

export interface IButton {
  children: React.ReactNode;
}

export interface ICard {
  data: {
    name: string;
    product_category_id: string;
    image_link: string;
    description: string;
    slug: string;
  };
}

export interface IRibborBarData {
  ribbon_bar_data: ICompanyProfile;
}

export interface ICompanyData {
  data: ICompanyProfile;
}

export interface IGalleryList {
  gallery_list_data: IGalleryListData[];
}
export interface IGalleryCollection {
  galleryCollection: {
    images: IGalleryListData[];
  };
}

interface IGalleryListData {
  id: number;
  name: string;
  slug: string;
  image_link: string;
}

export interface ICompanyProfile {
  company_name: string;
  company_email: string;
  company_phone: string;
  company_address: string;
  footer_text: string;
  introduction: string;
  vision: string;
  mission: string;
  map: string;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  meta_title: string;
  meta_description: string;
  meta_keywords: string;
  logo_link: string;
  footer_logo_link: string;
  favicon_link: string;
  image_link: string;
}

export interface ICustomerInfoContext {
  customer_name: string;
  set_customer_name: React.Dispatch<React.SetStateAction<string>>;
}

export interface IContactForm {
  data: {
    bg_status: boolean;
  };
}

export interface IResetStepTwoForm {
  data: {
    token: string;
    email: string;
  };
}

export interface IHeader {
  header_data: {
    companyProfile: ICompanyProfile;
    headerItems: any;
  };
}

export interface IHeaderMenu {
  headerItems: IHeaderItem[];
}
export interface IHeaderItem {
  name: string;
  subMenu?: ICategoryData[];
  slug: string;
}

export interface IFooter {
  footer_data: {
    companyProfile: ICompanyProfile;
    category: ICategoryData[];
  };
}
