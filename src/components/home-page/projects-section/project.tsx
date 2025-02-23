import React, { useEffect, useState } from "react";
import CategoryFilter from "./category-filter";
import SubCategoryFilter from "./sub-category-filter";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const ALL_PROJECTS_QUERY = `*[_type == "project"] {
  title,
  tagline,
  description,
  "imageUrl": image.asset->url,
  category,
  subcategory
}`;
const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const ProjectSection = () => {
  const [projects, setProjects] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch<SanityDocument[]>(
          ALL_PROJECTS_QUERY,
          {},
          options
        );
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  const handleCategoryChange = (category: string) => {
    console.log("Selected category:", category);
    // Add logic to filter projects based on the selected category
  };



  return (
    <section className="pt-4 sm:pt-14 md:pt-24 lg:pt-9">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="mt-2 md:mt-4">
        <CategoryFilter
          categories={["All", "Web Applications", "Mobile Applications"]}
          onSelectCategory={handleCategoryChange}
        />
      </div>
      <div className="mt-4 md:mt-6 ">
        <SubCategoryFilter
          categories={[
            "All",
            "Finance",
            "Artificial Intelligence",
            "E-commerce",
            "Health and Fitness",
          ]}
          onSelectCategory={handleCategoryChange}
        />
      </div>
      <div className="mt-6 md:mt-8">
        {projects.length === 0 ? (
          <p>Loading projects...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {projects.map((project, index) => {
              const projectImageUrl = project?.imageUrl
                ? urlFor(project.imageUrl)?.width(600).height(400).url()
                : null;
              return (
                <div key={index} className="border  py-3 border-gray-100 rounded-2xl">
                  <Image
                    src={
                      projectImageUrl
                        ? projectImageUrl
                        : "/public/assets/logo.png"
                    }
                    width={500}
                    height={500}
                    alt={project.title}
                    className="w-full h-80 object-cover py-3 rounded-2xl"
                  />
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
