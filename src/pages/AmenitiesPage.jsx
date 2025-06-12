import { useProperty } from "../context/PropertyContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function AmenitiesPage() {
  const property = useProperty();
  const navigate = useNavigate();

  if (!property) {
    return <p className="text-center text-gray-500 mt-10">Loading amenities...</p>;
  }

  return (
    <div className="mt-6 text-left px-6 text-gray-800">
      <div
        className="prose prose-sm max-w-none"
        dangerouslySetInnerHTML={{ __html: property.amenities_description }}
      />

      <div className="mt-8 space-y-3">

        <h2 className="text-lg font-semibold">Appliances</h2>
        {property.appliances?.map((appliance) => (
          <button
            key={appliance.id}
            onClick={() => navigate(`/appliances/${appliance.id}`)}
            className="w-full flex items-center justify-between px-4 py-3 border border-[var(--primary-color)] rounded-lg text-gray-800 hover:bg-[var(--primary-color)] hover:text-white transition duration-200"
          >
            <span className="text-sm font-medium">{appliance.title}</span>
            <i className="fa-solid fa-chevron-right text-[var(--primary-color)] group-hover:text-white"></i>
          </button>
        ))}
      </div>


      {/* Swiper Gallery */}
      {property.gallery && property.gallery.length > 0 ? (
        <div className="mt-6 rounded overflow-hidden">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            modules={[Navigation, Pagination]}
            className="rounded-lg"
          >
            {property.gallery.map((url, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`${url.replace("/upload/", "/upload/w_900/")}`}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="mt-6">
          <img
            src="/assets/images/default-image.jpg"
            className="w-full rounded-lg"
            alt="Living room"
          />
        </div>
      )}
    </div>
  );
}
