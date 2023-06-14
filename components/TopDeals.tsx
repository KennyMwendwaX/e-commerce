// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

export default function TopDeals() {
  return (
    <>
      <div className="font-light text-xl mb-2 dark:text-gray-300">
        Top Deals
      </div>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={5}
        spaceBetween={20}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper h-50">
        <SwiperSlide>
          <img className="cursor-pointer" src="/category-img/clothes.webp" />
          <div className="absolute top-2 right-1 bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/macbook.jpg" />
          <div className="absolute top-2 right-1 bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            -5%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="cursor-pointer"
            src="/category-img/gaming-console.webp"
          />
          <div className="absolute top-2 right-1 bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/category-img/footwear.jpg" />
          <div className="absolute top-2 right-1 bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/category-img/desktop.jpeg" />
          <div className="absolute top-2 right-1 bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/gkmc.webp" />
          <div className="absolute top-2 right-1 bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/samsung-tv.jpeg" />
          <div className="absolute top-2 right-1 bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            -10%
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/rayban.jpg" />
          <div className="absolute top-2 right-1 bg-red-100 text-red-600 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full">
            -10%
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
