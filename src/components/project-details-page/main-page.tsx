/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Slideshow from "./image-slideshow";
import { motion } from "framer-motion";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const SkeletonLoader = () => (
  <section className="pt-10 sm:pt-16 paddingX mx-auto min-h-screen animate-pulse">
    <section className="maxWidthSection">
      <div className="w-full h-64 md:h-72 bg-gray-200 dark:bg-purple-200 rounded-xl"></div>
      <h1 className="w-2/3 h-14 bg-gray-200 dark:bg-purple-200 rounded mt-8 mx-auto"></h1>
      <p className="w-1/2 h-8 bg-gray-200 dark:bg-purple-200 rounded mt-4 mx-auto"></p>
      <p className="w-3/4 h-24 bg-gray-200 dark:bg-purple-200 rounded mt-4 mx-auto"></p>
      <div className="grid sm:flex justify-center gap-4 mt-6">
        <div className="w-40 h-16 bg-gray-200 dark:bg-purple-200 rounded md:rounded-[50px]"></div>
        <div className="w-40 h-16 bg-gray-200 dark:bg-purple-200 rounded md:rounded-[50px]"></div>
      </div>
    </section>
  </section>
);

export default function ProjectDetails({ slug }: { slug: string }) {
  const [details, setDetails] = useState<SanityDocument | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      const PROJECT_QUERY = `*[_type == "project" && slug.current == "${slug}"]{
        ...,
        "images": images[].asset->url
      }`;

      try {
        const project = await client.fetch<SanityDocument[]>(PROJECT_QUERY);
        setDetails(project[0]);
      } catch (error) {
        console.error("Failed to fetch project details:", error);
      }
    };

    fetchProject();
  }, [slug]);

  const imageUrls =
    details?.images?.map((img: any) =>
      urlFor(img)?.width(750).height(380).url()
    ) || [];

  console.log(details);
  return (
    <>
      <section className="pt-10 sm:pt-16  mx-auto min-h-screen">
        {!details ? (
          <SkeletonLoader />
        ) : (
          <>
            <Slideshow images={imageUrls} />

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
                    href={details.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid"
                  >
                    {" "}
                    <motion.button
                      className=" text-white py-[10.36px] px-[25.89px]  sm:py-5 sm:px-6 sm:w-[210px] rounded-lg sm:rounded-[50px] text-sm md:text-base lg:text-lg bg-black m-auto"
                      whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }} // Hover effect
                      whileTap={{ scale: 0.95 }} // Click effect (shrink)
                      whileFocus={{
                        boxShadow: "0 0 12px rgba(255,255,255,0.5)",
                      }} // Focus ring effect
                    >
                      View project
                    </motion.button>
                  </a>
                  {details.isPublicRepo && (
                    <a
                      href={details.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="grid "
                    >
                      {" "}
                      <motion.button
                        className=" text-white   py-[10.36px] px-[25.89px]  sm:py-5 sm:px-6 rounded-lg sm:rounded-[50px] text-sm md:text-base lg:text-lg bg-black m-auto sm:w-[210px]"
                        whileHover={{ scale: 1.05, backgroundColor: "#1a1a1a" }} // Hover effect
                        whileTap={{ scale: 0.95 }} // Click effect (shrink)
                        whileFocus={{
                          boxShadow: "0 0 12px rgba(255,255,255,0.5)",
                        }} // Focus ring effect
                      >
                        View codebase
                      </motion.button>
                    </a>
                  )}
                </div>
              </section>
            </main>
          </>
        )}
      </section>
    </>
  );
}
