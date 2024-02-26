import React, { useState, useEffect } from 'react';
import { API } from '../../../http/index';

const RelatedArticles = () => {
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      try {
        const response = await API.get('/api/blog/recent');
        setRelatedArticles(response.data);
      } catch (error) {
        console.error('Error fetching related articles:', error);
      }
    };

    fetchRelatedArticles();
  }, []);

  return (
    <div>
      <h2>Related Articles</h2>
      <div className="related-articles">
        {relatedArticles.map((article) => (
          <div key={article._id} className="article-card">
            {/* Assuming `imageUrl` is available in the article object */}
            <img src={article.imageUrl} alt={article.title} />
            <div>
              <h3>{article.title}</h3>
              {/* Assuming `subtitle` is available in the article object */}
              <p>{article.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
