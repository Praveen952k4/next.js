function RightSidebar() {
    return (
      <section className="w-full max-w-xs sm:max-w-[14rem] md:max-w-xs bg-gray-900 text-white h-full flex flex-col gap-4 p-4 border-l border-gray-700">
        <div className="bg-gray-800 rounded-lg p-4 shadow-md">
          <h3 className="text-amber-50 text-lg font-semibold">Title 1</h3>
          <p className="text-sm text-gray-300 mt-2">Content goes here.</p>
        </div>
  
        <div className="bg-gray-800 rounded-lg p-4 shadow-md">
          <h3 className="text-amber-50 text-lg font-semibold">Hi</h3>
          <p className="text-sm text-gray-300 mt-2">Another of content.</p>
        </div>
      </section>
    );
  }
  
  export default RightSidebar;
  