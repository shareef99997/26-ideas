import React, { useState } from 'react';
import './Blog.css';
import NavBar from "../../Home-en/Header-en/NavBar-en";
import Footer from '../../Home-en/Footer-en/Footer-en';
import Contact from '../../Home-en/Contact-en/Contact-en';

const BlogCard = ({ imageSrc, title, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="Blog-Card-en">
      <img src={imageSrc} alt={title} className="Blog-Image" />
      <div className="Blog-Content-en">
        <h3 className="Blog-Title-en">{title}</h3>
        <p className="Blog-Time-en">{date}</p>
        <p className={`Blog-Description-en ${isExpanded ? 'expanded' : ''}`}>
          {description}
        </p>
        <button className="Read-More-en" onClick={toggleExpand}>
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

function Blog_en() {
  const blogPosts = [
    {
      imageSrc: require('../../../Assets/Images/project-management-about.jpg'),
      title: 'First Title',
      date: 'May 28, 2024',
      description: 'This is a simple description of the blog topic. Here, the text can be much longer to extend the size of the card and accommodate additional content. This shows how to expand the content to include more text. This is a simple description of the blog topic. Here, the text can be much longer to extend the size of the card and accommodate additional content. This shows how to expand the content to include more text. This is a simple description of the blog topic. Here, the text can be much longer to extend the size of the card and accommodate additional content. This shows how to expand the content to include more text. This is a simple description of the blog topic. Here, the text can be much longer to extend the size of the card and accommodate additional content. This shows how to expand the content to include more text.',
    },
    {
      imageSrc: require('../../../Assets/Images/project-management-about.jpg'),
      title: 'Second Title',
      date: 'May 29, 2024',
      description: 'This is a simple description of the blog topic. The text can also be extended here to make the card grow with the content. This shows how to expand the content to include more text.',
    },
    {
      imageSrc: require('../../../Assets/Images/project-management-about.jpg'),
      title: 'Third Title',
      date: 'May 30, 2024',
      description: 'This is a simple description of the blog topic. Here, the text can be much longer to extend the size of the card and accommodate additional content. This shows how to expand the content to include more text.',
    },
    {
      imageSrc: require('../../../Assets/Images/project-management-about.jpg'),
      title: 'Fourth Title',
      date: 'May 31, 2024',
      description: 'This is a simple description of the blog topic. The text can also be extended here to make the card grow with the content. This shows how to expand the content to include more text.',
    },
  ];

  return (
    <div className="Blog" id="Blog" lang="en">
      <div className="Blog-Header Page-Header-en">
        <NavBar currentPage={'blog'} />
        <h2 className="Page-Title-en">Blog</h2>
      </div>
      
      {/* Page Body */}
      <div className="Blog-Body-en">
        <div className="Blog-Grid-en">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              imageSrc={post.imageSrc}
              title={post.title}
              date={post.date}
              description={post.description}
            />
          ))}
        </div>
      </div>

      <Contact />
      <Footer />
    </div>
  );
}

export default Blog_en;
