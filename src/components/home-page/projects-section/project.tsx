import React, { useEffect, useState } from "react";
import CategoryFilter from "./category-filter";
import SubCategoryFilter from "./sub-category-filter";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { motion } from "framer-motion";
import useSound from "use-sound";
import Lottie from "lottie-react";
import emptyAnimation from "../../../../public/lottie/pink-girl-empty.json";

const ALL_PROJECTS_QUERY = `*[_type == "project"] {
  title,
  tagline,
  description,
  "imageUrl": image.asset->url,
  slug,
  category,
  subcategory
}`;

const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const CATEGORY_MAP: Record<string, string> = {
  "Web Applications": "web",
  "Mobile Applications": "mobile",
};

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
  const [loading, setLoading] = useState<boolean>(true);

  const popSound = "/sounds/pop.mp3";
  const [play] = useSound(popSound, { volume: 0.2 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch<SanityDocument[]>(
          ALL_PROJECTS_QUERY,
          {},
          options
        );
        setProjects(data);
        setFilteredProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    let filtered = projects;

    if (selectedCategory !== "All") {
      const categoryKey = CATEGORY_MAP[selectedCategory];
      filtered = filtered.filter((project) => project.category === categoryKey);
    }

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

      <div className="mt-2 md:mt-4">
        <CategoryFilter
          categories={["All", "Web Applications", "Mobile Applications"]}
          onSelectCategory={setSelectedCategory}
        />
      </div>

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
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="animate-pulse bg-gray-200 shadow-md dark:bg-purple-200 rounded-2xl h-72 w-full"
              ></div>
            ))}
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center mt-10">
            <Lottie animationData={emptyAnimation} className="w-72 h-72" />
            <p className="text-sm md:text-lg font-semibold mt-4 text-gray-600 dark:text-gray-300 text-center">
              Oopsies, I have no{" "}
              {selectedCategory !== "All"
                ? selectedCategory.toLowerCase()
                : "web or mobile"}{" "}
              in{" "}
              {selectedSubCategory !== "All"
                ? selectedSubCategory.toLowerCase()
                : "any category"}{" "}
              right now. Check back in a month! 
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredProjects.map((project, index) => {
              const projectImageUrl = project?.imageUrl
                ? urlFor(project.imageUrl)?.width(750).height(380).url()
                : null;

              const tiltDirection = index % 2 === 0 ? 3 : -3;

              return (
                <Link
                  key={index}
                  href={`/project-details/${project.slug.current}`}
                >
                  <motion.div
                    whileHover={{ rotateZ: tiltDirection, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    onMouseEnter={() => play()}
                    className="cursor-pointer"
                  >
                    <Image
                      src={projectImageUrl || "/assets/logo.png"}
                      width={500}
                      height={500}
                      quality={100}
                      alt={project.title}
                      className="w-full h-auto shadow-2xl dark:shadow-purple-200 rounded-2xl border-[0.5px] dark:border-purple-200"
                    />
                  </motion.div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
