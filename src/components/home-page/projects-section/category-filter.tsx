import React, { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  onSelectCategory,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };

  return (
    <div className="flex gap-4 md:gap-9 text-gray-100 overflow-x-auto md:overflow-x-hidden whitespace-nowrap">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`relative transition-colors duration-300 flex flex-col items-center ${
            activeCategory === category
              ? "text-pink-100 font-semibold text-base md:text-2xl"
              : "text-sm md:text-xl"
          }`}
        >
          {category}
          {activeCategory === category && (
            <div className="w-full h-[3px] bg-pink-100 rounded-md mt-0.5"></div>
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
