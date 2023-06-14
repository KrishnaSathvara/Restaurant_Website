import React from "react";
import { Navigation, FreeMode } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Testimonial.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  return (
    <>
      <div>
        <h5 className="text-amber-500 font-pacifico text-center font-medium">
          Testimonial
        </h5>
        <h1 className="text-center mb-5 text-3xl font-semibold">
          Our Client Say!!!{" "}
        </h1>
      </div>

      <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode, Navigation]}
        navigation
        touchRatio={2}
        className="myswiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          390: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        // spaceBetween={30}
      >
        <div className="">
          <SwiperSlide>
            <div className="hover:bg-amber-500 hover:text-white border-gray-400 border-2 m-4 p-4 bg-white shadow-sm rounded-sm ">
              <i class="fa fa-quote-left mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="flex">
                <div>
                  <img
                    className="rounded-full m-1 w-20"
                    src="Images/testimonial-3.jpg"
                  />
                </div>
                <div className="m-5">
                  <h4>Dr Bipin Mehta</h4>
                  <p>Transpotation</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:bg-amber-500 hover:text-white border-gray-400 border-2 m-4 p-4 bg-white shadow-sm rounded-sm ">
              <i class="fa fa-quote-left mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="flex">
                <div>
                  <img
                    className="rounded-full m-1 w-20"
                    src="Images/testimonial-1.jpg"
                  />
                </div>
                <div className="m-5">
                  <h4>Dr Ravina Visnoyi</h4>
                  <p>Software Engineer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:bg-amber-500 hover:text-white border-gray-400 border-2 m-4 p-4 bg-white shadow-sm rounded-sm ">
              <i class="fa fa-quote-left mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="flex">
                <div>
                  <img
                    className="rounded-full m-1 w-20"
                    src="Images/testimonial-2.jpg"
                  />
                </div>
                <div className="m-5">
                  <h4>Dr Dikin Prajapati</h4>
                  <p>Web Developer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hover:bg-amber-500 hover:text-white border-gray-400 border-2 m-4 p-4 bg-white shadow-sm rounded-sm ">
              <i class="fa fa-quote-left mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="flex ">
                <div>
                  <img
                    className="rounded-full m-1 w-20"
                    src="Images/testimonial-4.jpg"
                  />
                </div>
                <div className="m-5">
                  <h4>Dr Aashka sing</h4>
                  <p>Bussinessman</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>

      {/* <Swiper
          freeMode={true}
          grabCursor={true}
          modules={[FreeMode, Navigation]}
          navigation
          touchRatio={2}
          className="myswiper"
          breakpoints={
            {
            //   0: {
            //     slidesPerView: 1,
            //   },
            //   390: {
            //     slidesPerView: 1,
            //   },
            //   640: {
            //     slidesPerView: 2,
            //   },
            //   768: {
            //     slidesPerView: 3,
            //   },
            //   992: {
            //     slidesPerView: 3,
            //   },
            //   1024: {
            //     slidesPerView: 3,
            //   },
              1280: {
                slidesPerView: 3,
              },
            }
          }
          // spaceBetween={30}
        >
          <SwiperSlide>
            <div className=" border-gray-400 border-2 m-4 p-4 bg-white shadow-sm rounded-sm ">
              <i class="fa fa-quote-left mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="flex">
                <div>
                  <img
                    className="rounded-full m-1"
                    src="https://themewagon.github.io/restoran/img/testimonial-1.jpg"
                  />
                </div>
                <div className="m-1">
                  <h4>Client Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-gray-400 border-2 m-4 p-4 bg-white shadow-sm rounded-sm ">
              <i class="fa fa-quote-left mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="flex">
                <div>
                  <img
                    className="rounded-full w-12 m-1"
                    src="https://themewagon.github.io/restoran/img/testimonial-1.jpg"
                  />
                </div>
                <div className="m-1">
                  <h4>Client Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-gray-400 border-2 m-4 p-4 bg-white shadow-sm rounded-sm ">
              <i class="fa fa-quote-left mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="flex">
                <div>
                  <img
                    className="rounded-full w-12 m-1"
                    src="https://themewagon.github.io/restoran/img/testimonial-1.jpg"
                  />
                </div>
                <div className="m-1">
                  <h4>Client Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" border-gray-400 border-2 m-4 p-4 bg-white shadow-sm rounded-sm ">
              <i class="fa fa-quote-left mb-3"></i>
              <p>
                Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor
                stet amet eirmod eos labore diam
              </p>
              <div className="flex">
                <div>
                  <img
                    className="rounded-full w-12 m-1"
                    src="https://themewagon.github.io/restoran/img/testimonial-1.jpg"
                  />
                </div>
                <div className="m-1">
                  <h4>Client Name</h4>
                  <p>Profession</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
      {/* <div className='border-gray-500 '> */}
      {/* <div className="max-w-[1320px] border-gray-400 border-2 m-4 p-4 bg-white shadow-sm rounded-sm ">
          <i class="fa fa-quote-left mb-3"></i>
          <p>
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="flex">
            <div>
              <img
                className="rounded-full w-12 m-1"
                src="https://themewagon.github.io/restoran/img/testimonial-1.jpg"
              />
            </div>
            <div className="m-1">
              <h4>Client Name</h4>
              <p>Profession</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1320px] rounded-sm  border-gray-400 border-2 m-4 p-4 bg-white shadow-sm ">
          <i class="fa fa-quote-left mb-3"></i>
          <p>
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="flex">
            <div>
              <img
                className="rounded-full w-12 m-1"
                src="https://themewagon.github.io/restoran/img/testimonial-1.jpg"
              />
            </div>
            <div className="m-1">
              <h4>Client Name</h4>
              <p>Profession</p>
            </div>
          </div>
        </div>
        <div className="max-w-[1320px] rounded-sm  border-gray-400 border-2 m-4 p-4 bg-white shadow-sm ">
          <i class="fa fa-quote-left mb-3"></i>
          <p>
            Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
            amet eirmod eos labore diam
          </p>
          <div className="flex">
            <div className="overflow:hidden">
              <img
                className="rounded-full w-12 m-1"
                src="https://themewagon.github.io/restoran/img/testimonial-1.jpg"
              />
            </div>
            <div className="m-1">
              <h4>Client Name</h4>
              <p>Profession</p>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
};
export default Testimonial;
