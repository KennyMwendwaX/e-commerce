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
      <div className="font-light text-xl">Top Deals</div>
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
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/macbook.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/gkmc.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/samsung-tv.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/rayban.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/madvillainy.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/madvillainy.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="cursor-pointer" src="/item-img/madvillainy.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
