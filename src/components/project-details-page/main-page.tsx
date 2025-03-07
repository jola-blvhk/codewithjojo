/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Slideshow from "./image-slideshow";
import Image from "next/image";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default function ProjectDetails({ slug }: { slug: string }) {
  const [details, setDetails] = useState<SanityDocument | null>(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      const PROJECT_QUERY = `*[_type == "project" && slug.current == "${slug}"]{
        ...,
        "images": images[].asset->url
      }`;

      try {
        const project = await client.fetch<SanityDocument[]>(PROJECT_QUERY);
        setDetails(project[0]); // Save project details
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };

    fetchProject();
  }, [slug]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const imageUrls =
    details?.images?.map((img: any) =>
      urlFor(img)?.width(750).height(380).url()
    ) || [];

  console.log(details);
  return (
    <>
      {!details ? (
        <p>Loading project data</p>
      ) : (
        <section className="pt-10 sm:pt-16  mx-auto min-h-screen">
          {isLargeScreen ? (
            // Grid view for large screens
            <div className="paddingX">
              <div className="maxWidthSection grid grid-cols-3 gap-6">
                {imageUrls.map((src: any, i: number) => (
                  <Image
                    src={src}
                    key={i}
                    alt={`Project Image ${i + 1}`}
                    className="w-full h-auto rounded-xl drop-shadow-xl "
                    width={500}
                    height={300}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Slideshow for smaller screens
            <Slideshow images={imageUrls} />
          )}

          <main className="paddingX">
            <section className="maxWidthSection">
              <h1 className="text-center text-2xl  sm:text-3xl md:text-4xl xl:text-6xl mt-2 sm:mt-8 md:mt-12 text-pink-100 font-bold">
                {details.title}
              </h1>

              <p className="text-center text-gray-100 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold mt-3 lg:mt-7">
                Role: <span>{details?.role}</span>{" "}
                {details.technologies && (
                  <>
                    •{" "}
                    {details.technologies.map(
                      (technology: string, index: number) => (
                        <span key={index}>
                          {technology}
                          {index < details.technologies.length - 1 && ", "}
                        </span>
                      )
                    )}
                  </>
                )}
              </p>

              <p className="text-center m-auto lg:w-[80%] text-sm sm:text-base md:text-lg lg:text-xl xl-text-2xl mt-3 lg:mt-5 leading-6 sm:leading-8 md:leading-8 lg:leading-10 ">
                {details.description}
              </p>
              <div className="grid sm:flex gap-2 mt-5 sm:mt-6 justify-center items-center">
                <a
                  href="https://drive.google.com/file/d/1ijlC1vTCeC3n25S8leXm7IJcsM79PbRn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid"
                >
                  {" "}
                  <button className=" text-white py-[10.36px] px-[25.89px]  sm:py-5 sm:px-6 sm:w-[210px] rounded-lg sm:rounded-[50px] text-sm md:text-base lg:text-lg bg-black m-auto">
                    View project
                  </button>
                </a>
                {details.isPublicRepo &&
                <a
                  href="https://drive.google.com/file/d/1ijlC1vTCeC3n25S8leXm7IJcsM79PbRn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid "
                >
                  {" "}
                  <button className=" text-white   py-[10.36px] px-[25.89px]  sm:py-5 sm:px-6 rounded-lg sm:rounded-[50px] text-sm md:text-base lg:text-lg bg-black m-auto sm:w-[210px]">
                    View codebase
                  </button>
                </a>
}
              </div>
            </section>
          </main>
        </section>
      )}
    </>
  );
}
