import React, { useState } from 'react';
import NavBar from '../../Home/Header/NavBar';
import './Blog.css';
import Footer from '../../Home/Footer/Footer';
import Contact from '../../Home/Contact/Contact';

const BlogCard = ({ imageSrc, title, date, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="Blog-Card">
      <img src={imageSrc} alt={title} className="Blog-Image" />
      <div className="Blog-Content">
        <h3 className="Blog-Title">{title}</h3>
        <p className="Blog-Time">{date}</p>
        <p className={`Blog-Description ${isExpanded ? 'expanded' : ''}`}>
          {description}
        </p>
        <button className="Read-More" onClick={toggleExpand}>
          {isExpanded ? 'قراءة أقل' : 'قراءة المزيد'}
        </button>
      </div>
    </div>
  );
};

function Blog() {
  const blogPosts = [
    {
      imageSrc: require('../../Assets/Images/project-management-about.jpg'),
      title: 'العنوان الأول',
      date: 'May 28, 2024',
      description: 'هذا وصف بسيط لموضوع المدونة. هنا يمكن أن يكون النص أطول بكثير لتمديد حجم البطاقة واستيعاب المحتوى الإضافي. وهذا يوضح كيفية توسيع المحتوى ليشمل نصاً أكثر. هذا وصف بسيط لموضوع المدونة. هنا يمكن أن يكون النص أطول بكثير لتمديد حجم البطاقة واستيعاب المحتوى الإضافي. وهذا يوضح كيفية توسيع المحتوى ليشمل نصاً أكثر.هذا وصف بسيط لموضوع المدونة. هنا يمكن أن يكون النص أطول بكثير لتمديد حجم البطاقة واستيعاب المحتوى الإضافي. وهذا يوضح كيفية توسيع المحتوى ليشمل نصاً أكثر.هذا وصف بسيط لموضوع المدونة. هنا يمكن أن يكون النص أطول بكثير لتمديد حجم البطاقة واستيعاب المحتوى الإضافي. وهذا يوضح كيفية توسيع المحتوى ليشمل نصاً أكثر.',
    },
    {
      imageSrc: require('../../Assets/Images/project-management-about.jpg'),
      title: 'العنوان الثاني',
      date: 'May 29, 2024',
      description: 'هذا وصف بسيط لموضوع المدونة. يمكن للنص أن يطول هنا أيضًا لجعل البطاقة تنمو مع المحتوى. وهذا يوضح كيفية توسيع المحتوى ليشمل نصاً أكثر.',
    },
    {
      imageSrc: require('../../Assets/Images/project-management-about.jpg'),
      title: 'العنوان الثالث',
      date: 'May 30, 2024',
      description: 'هذا وصف بسيط لموضوع المدونة. هنا يمكن أن يكون النص أطول بكثير لتمديد حجم البطاقة واستيعاب المحتوى الإضافي. وهذا يوضح كيفية توسيع المحتوى ليشمل نصاً أكثر.',
    },
    {
      imageSrc: require('../../Assets/Images/project-management-about.jpg'),
      title: 'العنوان الرابع',
      date: 'May 31, 2024',
      description: 'هذا وصف بسيط لموضوع المدونة. يمكن للنص أن يطول هنا أيضًا لجعل البطاقة تنمو مع المحتوى. وهذا يوضح كيفية توسيع المحتوى ليشمل نصاً أكثر.',
    },
  ];

  return (
    <div className="Blog" id="Blog" lang="ar">
      <div className="Blog-Header Page-Header">
        <NavBar currentPage={'blog'} />
        <h2 className="Page-Title"> المدونة </h2>
      </div>
      
      {/* Page Body */}
      <div className="Blog-Body">
        <div className="Blog-Grid">
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

export default Blog;
