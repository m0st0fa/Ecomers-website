

// eslint-disable-next-line react/prop-types
const Bookmarks = ({ bookmark,readingTime }) => {
  if (!Array.isArray(bookmark)) {
   
    return (
      <div>
        <p>Error: Bookmark data is not an array.</p>
      </div>
    );
  }

  return (
    <div className="md:w-1/3 bg-gray-300 mt-2 ml-4 pt-4">
        <div>
            <h3 className="text-4xl">Reading Time:{readingTime}</h3>
        </div>
     <div className=" rounded-xl">
     <h2 className="text-3xl bg-gray-300 ml-2 p-4 ">Bookmarks Blog: {bookmark.length}</h2>
      {bookmark.map((item) => (
        <div className="" key={item.id}>
          <h3 className="text-2xl">{item.title}</h3>
          
        </div>
      ))}
     </div>
    </div>
  );
};

export default Bookmarks;
