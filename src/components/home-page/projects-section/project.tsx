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

/** Map UI categories to Sanity category names */
const CATEGORY_MAP: Record<string, string> = {
  "Web Applications": "web",
  "Mobile Applications": "mobile",
};

/** Map UI subcategories to Sanity subcategory names */
const SUBCATEGORY_MAP: Record<string, string> = {
  Health: "health",
  Games: "games",
  "E-commerce": "e-commerce",
  "News Feed": "news-feed",
  Portfolio: "portfolio",
};

const ProjectSection = () => {
  const [projects, setProjects] = useState<SanityDocument[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<SanityDocument[]>(
    []
  );

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch<SanityDocument[]>(
          ALL_PROJECTS_QUERY,
          {},
          options
        );
        setProjects(data);
        setFilteredProjects(data); // Show all initially
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    let filtered = projects;

    /** Apply category filter */
    if (selectedCategory !== "All") {
      const categoryKey = CATEGORY_MAP[selectedCategory];
      filtered = filtered.filter((project) => project.category === categoryKey);
    }

    /** Apply subcategory filter */
    if (selectedSubCategory !== "All") {
      const subCategoryKey = SUBCATEGORY_MAP[selectedSubCategory];
      filtered = filtered.filter(
        (project) => project.subcategory === subCategoryKey
      );
    }

    setFilteredProjects(filtered);
  }, [selectedCategory, selectedSubCategory, projects]);

  return (
    <section className="pt-4 sm:pt-14 md:pt-24 lg:pt-9">
      <h2 className="text-3xl font-bold">Projects</h2>

      {/* Category Filter */}
      <div className="mt-2 md:mt-4">
        <CategoryFilter
          categories={["All", "Web Applications", "Mobile Applications"]}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Subcategory Filter (only applies within the selected category) */}
      <div className="mt-4 md:mt-6">
        <SubCategoryFilter
          categories={[
            "All",
            "Health",
            "Games",
            "E-commerce",
            "News Feed",
            "Portfolio",
          ]}
          onSelectCategory={setSelectedSubCategory}
        />
      </div>

      <div className="mt-6 md:mt-8">
        {filteredProjects.length === 0 ? (
          <p>No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredProjects.map((project, index) => {
              const projectImageUrl = project?.imageUrl
                ? urlFor(project.imageUrl)?.width(500).height(400).url()
                : null;
              return (
                <div
                  key={index}
                  className=" shadow-lg rounded-2xl"
                >
                  <Image
                    src={projectImageUrl || "/assets/logo.png"}
                    width={500}
                    height={500}
                    quality={100}
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
