import React from 'react';
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

const projectIntro = {
    title: '项目介绍',
    desc: '合成豹子nft项目一共由12060张独一无二的nft图像组成。这12060张nft图片一共由6030张为圆形豹，和6030张为豹子头组成。',
    items: [
        {
            title: '售卖规则：',
            desc: '我们会在公开售卖期间售卖6030个圆形豹，而豹子头只能通过使用圆形豹nft图片来合成获取。',
        },
        {
            title: '圆形豹：',
            desc: '我们会在公开售卖期间售卖6030个圆形豹，而豹子头只能通过使用圆形豹nft图片来合成获取。',
        },
        {
            title: '豹子头：',
            desc: '每张豹子头NFT图片都由四种部件组成，背景，眼镜，头部，皇冠组成。头部与皇冠都拥有众多稀有度不同的种类，其中最稀有的就是18顶能满足愿望的至尊皇冠。',
        },
    ],
};

const mintIntro = {
    title: '合成豹子',
    desc: '合成功能将在所有圆形豹NFT图片全部售出后开放，可持有满足合成条件的圆形豹NFT图片在官网的合成端口里上传图片合成豹子头NFT图片。',
    items: [
        {
            title: '合成条件：',
            desc: '每张圆形豹NFT图片都由上，左，右3个不同方位不同颜色的圆形豹部位组成。如果3张圆形豹NFT图片里分别带有不同方位相同颜色的圆形豹部位就能合成一张相同颜色的豹子头。',
        },
        {
            title: '多张合成：',
            desc: '如果3张图片里有多组满足合成条件，那么即可合成多个豹子头。',
        },
        {
            title: '合成规则：',
            desc: '每张圆形豹NFT图片都由上，左，右3个不同方位不同颜色的部位组成，三个不同的部位里已经合成豹子头的部位将不能与其他圆形豹图片继续合成，但该图里未合成的部位可继续与别的圆形豹图片合成新的豹子头。',
        },
    ],
};

const wishIntro = {
    title: '三个愿望',
    desc: '当集齐18顶至尊皇冠的人，豹神就能满足他的三个愿望......',
};

function Intro({
    data,
}: {
    data: { title: string; desc: string; items?: Array<{ title: string; desc: string }> };
}) {
    return (
        <div className="lg:w-80 2xl:w-[28rem]">
            <h2 className="font-[RuiYan] pb-4 mb-2 text-base lg:text-xl 2xl:pb-5 2xl:mb-3 border-b border-b-white">
                {data.title}
            </h2>
            <div>
                <div>{data.desc}</div>
                {data.items?.map((it) => (
                    <React.Fragment key={it.title}>
                        <div className="font-[RuiYan] border-t border-t-white mt-2 mb-2 pt-2 2xl:mt-3 2xl:mb-3 2xl:pt-3">
                            {it.title}
                        </div>
                        <div>{it.desc}</div>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

const processList = [
    {
        src: '/nft-web/images/intro/skin.png',
        title: '圆形豹',
    },
    {
        src: '/nft-web/images/intro/tiger.png',
        title: '豹子头',
    },
];

export default function Home() {
    return (
        <Layout className="tiger-common" mainClassName="home-bg">
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
                        <div className="absolute bottom-[10%] w-3/4 lg:w-[62rem] 2xl:w-[92rem]">
                            <h2 className="font-[RuiYan] text-base lg:text-xl border-b border-b-white pb-4 text-center">
                                世界观
                            </h2>
                            <div className="mt-2">
                                很久以前，有一个豹神，它从海里，森林里，沙漠里，雪山里，沼泽里，等18个地方，找到了18个自然界里珍贵的宝石，用它们打造了18顶至尊皇冠，它靠这18顶至尊皇冠的神力......
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col lg:flex-row justify-between items-center w-3/4 lg:w-[62rem] 2xl:w-[92rem]">
                            <Intro data={projectIntro} />
                            <div className="flex justify-between text-center w-full mt-4 lg:w-[37rem] 2xl:w-[52rem]">
                                {processList.map((it) => (
                                    <div key={it.src}>
                                        <div className="w-36 h-36 lg:w-72 lg:h-72 2xl:w-96 2xl:h-96 relative">
                                            <Image
                                                src={it.src}
                                                layout="fill"
                                                objectFit="cover"
                                                alt={it.title}
                                            />
                                        </div>
                                        <div className="font-[RuiYan] border-t border-t-white text-base 2xl:text-lg pt-4 w-[8rem] lg:mt-3 lg:w-64 2xl:mt-5 2xl:w-[21rem] m-auto">
                                            {it.title}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-3/4 lg:w-[62rem] 2xl:w-[92rem]">
                            <Intro data={mintIntro} />
                            <div className="w-64 h-64 lg:w-[37rem] lg:h-[37rem] 2xl:w-[52rem] 2xl:h-[52rem] relative">
                                <Image
                                    src="/nft-web/images/intro/mint.png"
                                    layout="fill"
                                    objectFit="contain"
                                    alt="mint"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col-reverse lg:flex-row justify-around lg:justify-between items-center h-full w-3/4 lg:w-[62rem] 2xl:w-[92rem]">
                            <Intro data={wishIntro} />
                            <div className="w-full  h-3/5 lg:w-[37rem] lg:h-[37rem] 2xl:w-[52rem] 2xl:h-[52rem] relative">
                                <Image
                                    src="/nft-web/images/intro/wish.png"
                                    layout="fill"
                                    objectFit="cover"
                                    alt="mint"
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="w-3/4 lg:w-[62rem] 2xl:w-[92rem]">
                            <h2 className="font-[RuiYan] border-b-white border-b pb-4 text-base lg:text-xl">
                                合成豹子团队介绍
                            </h2>
                            <div className="mt-2 mb-14">
                                合成豹子项目由3位朋友创建，团队成员都来自于全球TOP5顶级游戏公司，成员都拥有多年游戏文化娱乐经验，对文化娱乐IP构建与打造具有专业背景。我们的愿景是打造web3世界中的顶级IP，在多个文化娱乐领域产生价值给人们带来快乐！
                            </div>
                            <div className="flex flex-col lg:flex-row justify-around">
                                {teams.map((it) => (
                                    <div
                                        key={it.name}
                                        className="border mb-3 flex lg:flex-col border-white rounded-xl overflow-hidden"
                                    >
                                        <div className="w-24 h-24 lg:w-40 lg:h-40 2xl:w-56 2xl:h-56 relative">
                                            <Image
                                                src={it.img}
                                                layout="fill"
                                                objectFit="cover"
                                                alt="intro"
                                            />
                                        </div>
                                        <div className="flex flex-1 justify-around items-center lg:flex-col lg:p-3 text-center">
                                            <div className="font-[RuiYan] text-base border-r pr-2 lg:border-r-0 lg:pr-0  lg:text-xl lg:border-b border-white lg:pb-3 lg:mb-5">
                                                {it.name}
                                            </div>
                                            <div className="text-xs lg:text-sm">{it.position}</div>
                                            <TwitterIcon className="lg:m-auto lg:mt-20" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </Layout>
    );
}
