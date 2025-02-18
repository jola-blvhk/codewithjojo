import React, { useState } from "react";

import { PiSlidersHorizontal } from "react-icons/pi";

interface SubCategoryFilterProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const SubCategoryFilter: React.FC<SubCategoryFilterProps> = ({
  categories,
  onSelectCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="flex items-center divide-x divide-gray-100">
      {/* Filter Button */}
      <button className="flex items-center mr-4 gap-4 px-4 py-2 bg-[#FAFAFA] dark:bg-purple-200 rounded-[50px]  text-sm md:text-lg lg:text-xl">
        <PiSlidersHorizontal
          className="text-lg md:text-xl font-bold"
          fontWeight={700}
        />
        Filter
      </button>

      {/* Category Buttons */}
      <div className="flex gap-4 pl-4 items-center  overflow-scroll">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 whitespace-nowrap rounded-[50px]  text-sm md:text-base lg:text-lg transition-all duration-300 ${
              activeCategory === category
                ? "bg-black text-white "
                : "border border-gray-100 "
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryFilter;
