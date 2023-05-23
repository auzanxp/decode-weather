const Loading = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-3">
        <div className="h-8 w-1/2 bg-gray-300 animate-pulse rounded-md"></div>
        <div className="w-20 h-3 mt-2 bg-gray-300 animate-pulse rounded"></div>
      </div>
      <div className="flex flex-row items-center justify-center text-white p-3 space-x-3">
        <div className="h-20 w-20 bg-gray-300 rounded-full animate-pulse"></div>
        <div className="text-center">
          <div className="h-8 w-20 bg-gray-300 animate-pulse rounded-md"></div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-start">
            <div className="h-4 w-8 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-4 w-12 bg-gray-300 rounded-md animate-pulse ml-1"></div>
          </div>
          <div className="flex font-light text-sm items-center justify-start">
            <div className="h-4 w-8 bg-gray-300 rounded-md animate-pulse"></div>
            <div className="h-4 w-12 bg-gray-300 rounded-md animate-pulse ml-1"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm pb-3">
        <div className="h-4 w-4 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="flex items-center">
          <div className="h-4 w-16 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="h-4 w-12 bg-gray-300 rounded-md animate-pulse ml-1"></div>
        </div>
        <div className="h-4 w-4 bg-gray-300 rounded-md animate-pulse"></div>
        <div className="flex items-center">
          <div className="h-4 w-16 bg-gray-300 rounded-md animate-pulse"></div>
          <div className="h-4 w-12 bg-gray-300 rounded-md animate-pulse ml-1"></div>
        </div>
      </div>

      <hr className=" text-gray-300 animate-pulse my-2" />

      <div className="flex flex-col space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse bg-white bg-opacity-10 border rounded-md my-2 p-3"
          >
            <div className="flex flex-row items-center justify-between">
              <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
              <div className="flex flex-col">
                <div className="w-32 h-4 bg-gray-300 rounded"></div>
                <div className="w-20 h-3 mt-2 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
