const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-6 w-3/4 bg-gray-300 rounded-md"></div>
      <div className="h-6 w-1/2 bg-gray-300 rounded-md"></div>
      <div className="h-40 w-full bg-gray-300 rounded-md"></div>
    </div>
  );
};

export default SkeletonLoader;