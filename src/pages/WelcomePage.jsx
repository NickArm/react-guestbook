import { useProperty } from "../context/PropertyContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function WelcomePage() {
  const property = useProperty();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading welcome info...</p>;
  }

  const owner = property.owner?.[0];
  const gallery = property.gallery || [];


  return (
    <div className="welcome-page">
      {/* Gallery Slider */}
      {gallery.length > 0 && (
        <div className="mt-4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={10}
            slidesPerView={1}
            className="overflow-hidden"
          >
            {gallery.map((url, i) => {
              const optimizedUrl = url.includes("/upload/")
                ? url.replace("/upload/", "/upload/w_600,q_auto,f_auto/")
                : url;

              return (
                <SwiperSlide key={i}>
                  <img
                    src={optimizedUrl}
                    alt={`Gallery ${i}`}
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}


      {/* Welcome Message */}
      <div className="mt-2 p-4 max-w-md mx-auto">
        <div className="flex items-center justify-between gap-4">
          <p className="text-lg font-semibold">{property.welcome_title}</p>
          {owner?.photo && (
            <img
              src={owner.photo}
              alt={owner.name}
              className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
            />
          )}
        </div>
        <p
          className="mt-2 text-sm text-gray-700"
          dangerouslySetInnerHTML={{ __html: property.welcome_message }}
        ></p>

        <div className="mt-6 flex justify-center">
          <Link
            to="/check-in-out"
            className="border border-primary text-primary px-4 py-2 rounded font-medium text-sm hover:bg-primary hover:text-white transition"
          >
            Get Arrival Info
          </Link>
        </div>
      </div>
    </div>
  );
}
