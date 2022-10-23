import Head from 'next/head';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Mousewheel, Pagination, Scrollbar } from 'swiper';
import Layout from '@/components/Layout';
import { TwitterIcon } from '@/components/svg';

const teams = [
    {
        img: '/nft-web/images/nft/1.jpeg',
        name: 'xx',
        position: '创始人和艺术总监',
    },
    {
        img: '/nft-web/images/nft/2.jpeg',
        name: 'yy',
        position: '创始人和艺术总监',
    },
    {
        img: '/nft-web/images/nft/3.jpeg',
        name: 'zz',
        position: '创始人和艺术总监',
    },
];

const teamIntroWidth = 228;

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
                    <SwiperSlide className="world-outlook">
                        <div className="absolute top-3/4 w-2/4">
                            <h2 className="font-[RuiYan] text-5xl border-b border-b-white pb-8 mt text-center">
                                世界观
                            </h2>
                            <div className="mt-7">
                                很久以前，有一个豹神，它从海里，森林里，沙漠里，雪山里，沼泽里，等18个地方，找到了18个自然界里珍贵的宝石，用它们打造了18顶至尊皇冠，它靠这18顶至尊皇冠的神力......
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center pl-36 pr-36">
                            <div className="flex-1">
                                <h2 className="font-[RuiYan] pb-7 mb-8 border-b border-b-white">
                                    项目介绍
                                </h2>
                                <div>
                                    <div>
                                        合成豹子nft项目一共由12060张独一无二的nft图像组成。这12060张nft图片一共由6030张为圆形豹，和6030张为豹子头组成。
                                    </div>
                                    <div className="font-[RuiYan] border-t border-t-white mt-3 mb-4 pt-4">
                                        售卖规则：
                                    </div>
                                    <div>
                                        我们会在公开售卖期间售卖6030个圆形豹，而豹子头只能通过使用圆形豹nft图片来合成获取。
                                    </div>
                                    <div className="font-[RuiYan] border-t border-t-white mt-3 mb-4 pt-4">
                                        圆形豹：
                                    </div>
                                    <div>
                                        每张圆形豹NFT图片都由上，左，右3个不同方位的圆形豹组成，且每个方位的头部种类均不一样。
                                    </div>
                                    <div className="font-[RuiYan] border-t border-t-white mt-3 mb-4 pt-4">
                                        豹子头：
                                    </div>
                                    <div>
                                        每张豹子头NFT图片都由四种部件组成，背景，眼镜，头部,皇冠组成。头部与皇冠都拥有众多稀有度不同的种类，其中最稀有的就是18顶能满足愿望的至尊皇冠。
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 text-center ml-8">
                                <div className="inline-block">
                                    <div className="inline-block rounded-2xl border-2 border-white bg-white bg-opacity-[.08]">
                                        <Image
                                            src="/nft-web/images/slide/2.png"
                                            width={300}
                                            height={300}
                                            alt=""
                                        />
                                    </div>
                                    <div className="font-[RuiYan] border-t border-t-white text-xl mt-9 pt-4">
                                        圆形豹
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 text-center">
                                <div className="inline-block">
                                    <div className="inline-block rounded-2xl border-2 border-white bg-white bg-opacity-[.08]">
                                        <Image
                                            src="/nft-web/images/slide/3.png"
                                            width={300}
                                            height={300}
                                            alt=""
                                        />
                                    </div>
                                    <div className="font-[RuiYan] border-t border-t-white text-xl mt-9 pt-4">
                                        豹子头
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center pl-36 pr-36">
                            <div className="flex-1">
                                <h2 className="font-[RuiYan] pb-7 mb-8 border-b border-b-white">
                                    合成豹子
                                </h2>
                                <div>
                                    <div>
                                        合成功能将在所有圆形豹NFT图片全部售出后开放，可持有满足合成条件的圆形豹NFT图片在官网的合成端口里上传图片合成豹子头NFT图片。
                                    </div>
                                    <div className="font-[RuiYan] border-t border-t-white mt-3 mb-4 pt-4">
                                        合成条件：
                                    </div>
                                    <div>
                                        每张圆形豹NFT图片都由上，左，右3个不同方位不同颜色的圆形豹部位组成。如果3张圆形豹NFT图片里分别带有不同方位相同颜色的圆形豹部位就能合成一张相同颜色的豹子头。
                                    </div>
                                    <div className="font-[RuiYan] border-t border-t-white mt-3 mb-4 pt-4">
                                        多张合成：
                                    </div>
                                    <div>
                                        如果3张图片里有多组满足合成条件，那么即可合成多个豹子头。
                                    </div>
                                    <div className="font-[RuiYan] border-t border-t-white mt-3 mb-4 pt-4">
                                        合成规则：
                                    </div>
                                    <div>
                                        每张圆形豹NFT图片都由上，左，右3个不同方位不同颜色的部位组成，三个不同的部位里已经合成豹子头的部位将不能与其他圆形豹图片继续合成，但该图里未合成的部位可继续与别的圆形豹图片合成新的豹子头。
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 text-center ml-8">
                                <div className="inline-block">
                                    <Image
                                        src="/nft-web/images/slide/4.png"
                                        width={300}
                                        height={300}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center items-center pl-36 pr-36">
                            <div className="flex-1">
                                <h2 className="font-[RuiYan] pb-7 mb-8 border-b border-b-white">
                                    三个愿望
                                </h2>
                                <div>当集齐18顶至尊皇冠的人，豹神就能满足他的三个愿望......</div>
                            </div>
                            <div className="flex-1 text-center ml-8">
                                <div className="inline-block">
                                    <Image
                                        src="/nft-web/images/slide/8.png"
                                        width={300}
                                        height={300}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-3/4">
                            <h2 className="border-b-white border-b pb-4">合成豹子团队介绍</h2>
                            <div className="mt-6 mb-8">
                                合成豹子项目由3位朋友创建，团队成员都来自于全球TOP5顶级游戏公司，成员都拥有多年游戏文化娱乐经验，对文化娱乐IP构建与打造具有专业背景。我们的愿景是打造web3世界中的顶级IP，在多个文化娱乐领域产生价值给人们带来快乐！
                            </div>
                            <div className="team flex justify-between ml-12">
                                {teams.map((it) => (
                                    <div
                                        key={it.name}
                                        className="border border-white rounded-xl overflow-hidden"
                                        style={{ width: teamIntroWidth }}
                                    >
                                        <Image
                                            src={it.img}
                                            width={teamIntroWidth}
                                            height={teamIntroWidth}
                                            alt="intro"
                                        />
                                        <div className="text-center p-6">
                                            <div className="font-[RuiYan] text-xl border-b border-white pb-3 mb-5">
                                                {it.name}
                                            </div>
                                            <div>{it.position}</div>
                                            <TwitterIcon className="m-auto mt-9" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <style global jsx>{`
                :root {
                    --swiper-pagination-bullet-vertical-gap: 16px;
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
                    background: linear-gradient(
                        to right,
                        rgba(0, 107, 110, 1) 0%,
                        rgba(41, 0, 73, 1) 44.804%,
                        rgba(27, 150, 163, 1) 100%
                    );
                }
                .home-swiper .swiper-slide h2 {
                    font-size: 28px;
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

                .home-swiper .world-outlook {
                    background: url('/nft-web/images/slide/1.jpg') no-repeat 0 100% / cover;
                }
            `}</style>
        </Layout>
    );
}
