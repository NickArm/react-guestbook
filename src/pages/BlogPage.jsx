import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { decode } from 'he';

export default function BlogPage() {
  const { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fallbackImage = "/assets/images/default-image.jpg"; // Fallback image URL

  useEffect(() => {
    fetch("https://corfudiary.com/wp-json/wp/v2/posts?tags=43&per_page=8&_embed")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch blog posts:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-page px-4 py-6 space-y-6 text-gray-800">
      {loading && <p className="text-center text-gray-500">Loading blog posts...</p>}

      {!loading && posts.length === 0 && (
        <p className="text-center text-gray-500">No activities found.</p>
      )}

      {posts.map((post, index) => {
        const title = decode(post.title?.rendered || "Untitled");
        const link = post.link;
        const content = post.content?.rendered || "";
        const textContent = content.replace(/<[^>]+>/g, ""); // remove HTML
        const excerpt = textContent.split(" ").slice(0, 30).join(" ") + "...";
        const imagePath = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
        const image = imagePath?.startsWith("http")
        ? imagePath
        : `https://corfudiary.com${imagePath}`;




        const isReversed = index % 2 === 1;

        return (
          <div
            key={post.id}
            className={`blog-item flex items-center ${isReversed ? "flex-row-reverse" : ""}`}
          >
            <div className="flex-1">
              <h3 className="font-bold">
                <a
                  href={link}
                  className="blog-title"
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
                className="object-cover rounded shadow"
                onError={(e) => (e.currentTarget.src = "/assets/images/default-image.jpg")}
                />
          </div>
        );
      })}

      <div className="blog-more text-center">
        <a target="_blank" rel="noreferrer" href="https://corfudiary.com" className="blog-title">
          <p>MORE AT CORFUDIARY.COM</p>
        </a>
      </div>
    </div>
  );
}
