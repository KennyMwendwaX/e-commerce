// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import Image from "next/image";

export default function TopDeals() {
  return (
    <>
      <div className="mb-2 text-xl font-light">Top Deals</div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={5}
        spaceBetween={20}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper h-50">
        <SwiperSlide>
          <Image
            className="cursor-pointer"
            width={230}
            height={230}
            alt="clothes image"
            src="/category-img/clothes.webp"
          />
          <div className="absolute right-1 top-2 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="cursor-pointer"
            width={230}
            height={230}
            alt="macbook image"
            src="/item-img/macbook.jpg"
          />
          <div className="absolute right-1 top-2 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">
            -5%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="cursor-pointer"
            width={230}
            height={230}
            alt="gaming console image"
            src="/category-img/gaming-console.webp"
          />
          <div className="absolute right-1 top-2 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="cursor-pointer"
            width={230}
            height={230}
            alt="footwear image"
            src="/category-img/footwear.jpg"
          />
          <div className="absolute right-1 top-2 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="cursor-pointer"
            width={230}
            height={230}
            alt="desktop image"
            src="/category-img/desktop.jpeg"
          />
          <div className="absolute right-1 top-2 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="cursor-pointer"
            width={230}
            height={230}
            alt="albums image"
            src="/item-img/gkmc.webp"
          />
          <div className="absolute right-1 top-2 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="cursor-pointer"
            width={230}
            height={230}
            alt="tv image"
            src="/item-img/samsung-tv.jpeg"
          />
          <div className="absolute right-1 top-2 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="cursor-pointer"
            width={230}
            height={230}
            alt="glasses image"
            src="/item-img/rayban.jpg"
          />
          <div className="absolute right-1 top-2 mr-2 rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-600">
            -10%
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
