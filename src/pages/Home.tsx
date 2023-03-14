// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

// import required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper"

export default function Home() {
  return (
    <div className="container px-5 py-20 pb-5 mx-auto">
      <p>Popular Brands</p>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={5}
        spaceBetween={20}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper h-50">
        <SwiperSlide>
          <img src="/madvillainy.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/gkmc.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/samsung-tv.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/macbook.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/rayban.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/madvillainy.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/madvillainy.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/madvillainy.jpg" />
        </SwiperSlide>
      </Swiper>
      <p>Categories</p>
      <div className="mb-10">
        <div className="flex flex-wrap">
          <div className="block relative h-60 w-48 rounded overflow-hidden cursor-pointer">
            <img src="/gkmc.webp" />
          </div>
        </div>
      </div>
      <div>Top Seller Books</div>
    </div>
  )
}
