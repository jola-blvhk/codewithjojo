import React from "react";
import CategoryFilter from "./category-filter";
import SubCategoryFilter from "./sub-category-filter";

const ProjectSection = () => {
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
          categories={["All", "Finance", "Artificial Intelligence", "E-commerce", "Health and Fitness"]}
          onSelectCategory={handleCategoryChange}
        />
      </div>
    </section>
  );
};

export default ProjectSection;
