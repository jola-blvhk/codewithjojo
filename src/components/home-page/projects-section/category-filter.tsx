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
    <div className="flex gap-4 md:gap-9 text-gray-100 relative overflow-x-scroll md:overflow-x-hidden">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleCategoryClick(category)}
          className={`relative transition-colors duration-300 ${
            activeCategory === category ? "text-pink-100 font-semibold text-base md:text-2xl" : "text-sm md:text-xl"
          }`}
        >
          {category}
          {activeCategory === category && (
            <span className="absolute left-0 bottom-[-4px] w-full h-[4px] bg-pink-500 rounded-md"></span>
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
