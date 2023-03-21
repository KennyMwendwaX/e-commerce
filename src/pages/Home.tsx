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
      <p>Top Deals</p>
      <Swiper
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        slidesPerView={5}
        spaceBetween={20}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="mySwiper h-50">
        <SwiperSlide>
          <img src="/item-img/madvillainy.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/item-img/gkmc.webp" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/item-img/samsung-tv.jpeg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/item-img/macbook.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/item-img/rayban.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/item-img/madvillainy.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/item-img/madvillainy.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/item-img/madvillainy.jpg" />
        </SwiperSlide>
      </Swiper>
      <p>Explore Popular Categories</p>
      <div className="mb-10">
        <div className="grid grid-cols-6 space-x-2">
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
          <div className="block relative">
            <img
              className="h-48 w-48 rounded-full overflow-hidden cursor-pointer"
              src="/item-img/gkmc.webp"
            />
            <div className="text-center">Computers</div>
          </div>
        </div>
      </div>
      <div>Explore Popular Categories</div>
      <div>Top Seller Books</div>
    </div>
  )
}
