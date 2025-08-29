import React from 'react';
import { motion } from 'framer-motion';
import blog1 from '../assets/blog-1.jpg';
import blog2 from '../assets/blog-2.jpg';
import blog3 from '../assets/blog-3.jpg';

const blogs = [
  {
    title: 'The Future of Organic farm',
    desc: 'Discover the latest trends in modern web development and how they are shaping the future.',
    image: blog1,
  },
  {
    title: 'Eat fresh',
    desc: 'Learn essential principles of user interface and user experience design for better products.',
    image: blog2,
  },
  {
    title: 'Fresh Tomato',
    desc: 'Tips and tricks to improve your efficiency while building apps with React.',
    image: blog3,
  },
];

const BlogCompo = () => {
  return (
    <div className="w-full py-12 bg-gray-100 flex justify-center">
      <div className="w-full max-w-7xl px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-green-600 font-semibold text-lg">Our Blog</p>
          <p className="text-3xl font-bold">Latest Articles From Our Blog Post</p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-[420px] flex flex-col"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-1">
                <h3 className="text-xl font-semibold mb-3">{blog.title}</h3>
                <p className="text-gray-600 text-sm flex-1">{blog.desc}</p>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCompo;
