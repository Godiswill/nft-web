import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination, Scrollbar } from 'swiper';
import Layout from '@/components/Layout';
import { TwitterIcon } from '@/components/svg';

export default function Home() {
    return (
        <Layout className="tiger-common">
            <Head>
                <title>Index</title>
            </Head>
            <div className="home h-full overflow-hidden">
                <Swiper
                    direction="vertical"
                    // effect="fade"
                    slidesPerView={1}
                    // freeMode={true}
                    scrollbar
                    mousewheel
                    // centeredSlides={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Mousewheel, Pagination, Scrollbar]}
                    className="h-full w-hull home-swiper"
                >
                    <SwiperSlide>
                        <h2>合成豹子项目介绍</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2>合成豹子项目介绍2</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2>合成豹子项目介绍3</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2>合成豹子项目介绍4</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div style={{ width: 1024 }}>
                            <h2 className="border-b-white border-b-2">合成豹子团队介绍</h2>
                            <div className="mt-3 mb-8">
                                合成豹子项目由3位朋友创建，团队成员都来自于全球TOP5顶级游戏公司，成员都拥有多年游戏文化娱乐经验，对文化娱乐IP构建与打造具有专业背景。我们的愿景是打造web3世界中的顶级IP，在多个文化娱乐领域产生价值给人们带来快乐！
                            </div>
                            <div className="team flex justify-between">
                                <div className="border border-white rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/nft/1.jpeg"
                                        width={277}
                                        height={277}
                                        alt="intro"
                                    />
                                    <div className="text-center p-6">
                                        <div className="rui-font text-4xl border-b-2 border-white pb-3 mb-5">
                                            xx
                                        </div>
                                        <div>创始人和艺术总监</div>
                                        <TwitterIcon className="m-auto mt-9" />
                                    </div>
                                </div>
                                <div className="border border-white rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/nft/2.jpeg"
                                        width={277}
                                        height={277}
                                        alt="intro"
                                    />
                                    <div className="text-center p-6">
                                        <div className="rui-font text-4xl border-b-2 border-white pb-3 mb-5">
                                            yy
                                        </div>
                                        <div>创始人和艺术总监</div>
                                        <TwitterIcon className="m-auto mt-9" />
                                    </div>
                                </div>
                                <div className="border border-white rounded-xl overflow-hidden">
                                    <Image
                                        src="/images/nft/3.jpeg"
                                        width={277}
                                        height={277}
                                        alt="intro"
                                    />
                                    <div className="text-center p-6">
                                        <div className="rui-font text-4xl border-b-2 border-white pb-3 mb-5">
                                            zz
                                        </div>
                                        <div>创始人和艺术总监</div>
                                        <TwitterIcon className="m-auto mt-9" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <style global jsx>{`
                :root {
                    --swiper-pagination-bullet-vertical-gap: 16px;
                }
                .home .team > div {
                    width: 277px;
                }
                .home-swiper {
                    width: 100%;
                    height: 100%;
                }

                .home-swiper .swiper-slide {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .home-swiper .swiper-slide h2 {
                    font-size: 66px;
                    text-align: center;
                }
                .home-swiper .swiper-pagination-bullet {
                    height: 80px;
                    width: 5px;
                    background: white;
                    border-radius: 34px;
                }
                .home-swiper .swiper-pagination-vertical.swiper-pagination-bullets,
                .home-swiper .swiper-vertical > .swiper-pagination-bullets {
                    right: auto;
                    left: 38px;
                    top: 50%;
                    transform: translate3d(0px, -50%, 0);
                }
            `}</style>
        </Layout>
    );
}
