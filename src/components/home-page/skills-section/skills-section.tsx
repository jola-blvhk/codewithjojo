import { client } from "@/sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { SanityDocument } from "next-sanity";
import "./skills-section.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const ALL_SKILLS_QUERY = `*[_type == "skill"] {
  name,
  "iconUrl": icon.asset->url,
}`;
const { projectId, dataset } = client.config();

const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

const SkillsSection = () => {
  const [skills, setSkills] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await client.fetch<SanityDocument[]>(
          ALL_SKILLS_QUERY,
          {},
          options
        );
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);
  return (
    <section className="mt-14 md:mt-16 lg:mt-20 xl:mt-32">
      <h1 className="font-bold text-center text-3xl lg:text-5xl">
        Skills and Technology
      </h1>

      <div className="mt-4  sm:mt-8 md:mt-12 flex gap-2.5  sm:gap-4 md:gap-x-8 md:gap-y-7 justify-center m-auto w-[90%]  md:w-[80%] items-center flex-wrap">
        {skills.map((skill, index) => {
          const skillImageUrl = skill.iconUrl
            ? urlFor(skill.iconUrl)?.width(40).height(40).url()
            : null;
          return (
            <div
              key={index}
              className="flex items-center gap-1.5 sm:gap-4 py-1.5 px-2  sm:py-2 sm:px-6 border border-gray-100 rounded-[21.63px] md:rounded-[50px] text-sm sm:text-base lg:text-xl"
            >
              <Image
                src={skillImageUrl ? skillImageUrl : ""}
                width={48}
                height={48}
                className=" w-4 h-4 sm:w-5 sm:h-5 md:w-10 md:h-10"
                alt={skill.name}
              />
              <p className="font-normal">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillsSection;
