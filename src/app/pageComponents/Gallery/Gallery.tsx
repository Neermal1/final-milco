"use client";
import { IGalleryCollection } from "@/app/interface/interface";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Gallery = ({ galleryCollection }: IGalleryCollection) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number>();
  const handleImage = (image_source: any) => {
    setSelectedImage(image_source);
    setOpen(true);
  };

  const updatedFetchedData = galleryCollection?.images?.map((data: any) => {
    return {
      src: data?.image_link,
    };
  });

  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        {galleryCollection?.images?.map((gallery, index: any) => {
          return (
            <div key={gallery?.id}>
              <div
                onClick={() => handleImage(index)}
                className="hover:cursor-pointer group overflow-hidden rounded-[8px]"
              >
                <div className="">
                  <img
                    src={gallery?.image_link}
                    alt=""
                    className="object-cover h-[40vh]   w-[100%] transform transition duration-500 ease-in-out group-hover:scale-110 "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={selectedImage}
        slides={updatedFetchedData}
      />
    </div>
  );
};

export default Gallery;
