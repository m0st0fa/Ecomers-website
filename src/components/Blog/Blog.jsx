import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


// eslint-disable-next-line react/prop-types
const Blog = ({ blog, handleAddToBookmark,handleMarkAsRead}) => {
    const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl '>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-red-600 text-2xl'>
                        <FaBookmark></FaBookmark>
                    </button>

                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} ><a href="">#{hash} </a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time)} className='text-purple-800 underline font-bold'>Mark as Read</button>

        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired

}

export default Blog;