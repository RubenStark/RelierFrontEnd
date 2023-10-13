import { Avatar, Link, Tooltip } from "@nextui-org/react";
import { useRouter } from "next/router";
import { use, useEffect, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import AvatarListTile from "../components/avatarListTile";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube, Pagination } from 'swiper/modules';

export default function Story2() {
    return (
        <div className="h-screen flex justify-center items-center bg-red-300">
            <div className="">
                <Swiper
                    effect={'cube'}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                    }}
                    pagination={true}
                    modules={[EffectCube, Pagination]}
                    className="mySwiper"
                >
                    {/* One user */}
                    <SwiperSlide>
                        <Swiper className="mySwiper"
                            pagination={{
                                type: 'progressbar',
                            }}
                            modules={[Pagination]}>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </SwiperSlide>
                    {/* One user */}

                    <SwiperSlide>
                        <Swiper className="mySwiper"
                            pagination={{
                                type: 'progressbar',
                            }}
                            modules={[Pagination]}>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </SwiperSlide>

                    {/* One user */}

                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}


