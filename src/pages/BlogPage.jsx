import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { decode } from 'he';
import { useProperty } from "../context/PropertyContext";

export default function BlogPage() {
  const { slug } = useParams();
  const property = useProperty();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ελέγχουμε αν υπάρχει το property και το blog URL
    if (!property || !property.blog?.enabled || !property.blog?.url) {
      setLoading(false);
      setError("Blog not available for this property");
      return;
    }

    setLoading(true);
    setError(null);

    fetch(property.blog.url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setPosts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blog posts:", err);
        setError("Failed to load blog posts");
        setLoading(false);
      });
  }, [property]);

  // Loading state
  if (loading) {
    return (
      <div className="blog-page px-4 py-6">
        <p className="text-center text-gray-500">Loading blog posts...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="blog-page px-4 py-6">
        <p className="text-center text-gray-500">{error}</p>
      </div>
    );
  }

  // No posts state
  if (!posts.length) {
    return (
      <div className="blog-page px-4 py-6">
        <p className="text-center text-gray-500">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="blog-page px-4 py-6 space-y-6 text-gray-800">
      {posts.map((post, index) => {
        const title = decode(post.title?.rendered || "Untitled");
        const link = post.link;
        const content = post.content?.rendered || "";
        const textContent = content.replace(/<[^>]+>/g, ""); 
        const excerpt = textContent.split(" ").slice(0, 30).join(" ") + "...";
        
        const featuredMedia = post._embedded?.["wp:featuredmedia"]?.[0];
        let image = featuredMedia?.source_url || featuredMedia?.media_details?.sizes?.medium?.source_url;
        
        if (image && !image.startsWith("http")) {
          const blogDomain = new URL(property.blog.url).origin;
          image = `${blogDomain}${image}`;
        }

        const isReversed = index % 2 === 1;

        return (
          <div
            key={post.id}
            className={`blog-item flex items-center ${isReversed ? "flex-row-reverse" : ""}`}
          >
            <div className="bg-gray-100 p-4 flex-1">
              <h3 className="font-bold">
                <a
                  href={link}
                  className="text-gray-800 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {title}
                </a>
              </h3>
              <p className="text-sm mt-1">{excerpt}</p>
            </div>
            <img
              src={image || "/assets/images/default-image.jpg"}
              alt="Post thumbnail"
              className="w-24 h-48 object-cover"
              onError={(e) => (e.currentTarget.src = "/assets/images/default-image.jpg")}
            />
          </div>
        );
      })}
      
      <div className="blog-more text-center">
        <a 
          target="_blank" 
          rel="noreferrer" 
          href={getBlogWebsiteUrl(property.blog.url)} 
          className="blog-title"
        >
          <p>MORE AT {getBlogWebsiteName(property.blog.url)}</p>
        </a>
      </div>

      {/* GetYourGuide Widget */}
      {property.gyg_widget_code && (
        <div className="gyg-widget-container mt-8 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Recommended Activities
          </h3>
          <div 
            dangerouslySetInnerHTML={{ __html: property.gyg_widget_code }}
            className="gyg-widget"
          />
        </div>
      )}
    </div>
  );
}

// Helper function για να πάρουμε το website URL από το API URL
function getBlogWebsiteUrl(apiUrl) {
  try {
    const url = new URL(apiUrl);
    return `${url.protocol}//${url.hostname}`;
  } catch {
    return "#";
  }
}

// Helper function για να πάρουμε το όνομα του website
function getBlogWebsiteName(apiUrl) {
  try {
    const url = new URL(apiUrl);
    return url.hostname.toUpperCase();
  } catch {
    return "BLOG";
  }
}