import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '@/components/Layout';

export default function RoadMap() {
    return (
        <Layout className="tiger" mainClassName="home">
            <Head>
                <title>LEOPARD GOD - ROAD MAP</title>
            </Head>
            <div className="text-white text-center pb-4">
                <h1 id="roadmap" className="pt-10 pb-5">
                    ROADMAP
                </h1>
                <div className="relative h-80 lg:h-[704px] lg:w-[560px] mx-auto my-6 rounded-2xl overflow-hidden">
                    <Image
                        src="/images/root/forest-leopard.jpg"
                        layout="fill"
                        objectFit="cover"
                        alt="forest leopard"
                    />
                </div>
                <div className="px-4 lg:w-[960px] mx-auto">
                    {[
                        {
                            name: 'ROADMAP 1.0 STAGE',
                            items: [
                                {
                                    title: 'Activation of Social Media Channels',
                                    desc: (
                                        <>
                                            Initiating our outreach, we will engage potential
                                            participants through our bespoke LEOPARD GOD social
                                            media channels on key platforms including Twitter,
                                            Medium and YouTube. This strategic presence will boost
                                            awareness of our project and foster active
                                            communication.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Community Formation and Nurturing',
                                    desc: (
                                        <>
                                            In parallel, we will establish a dedicated Discord
                                            community. This will serve as a focal point for our
                                            members, offering an open space for discourse,
                                            collaboration, and collective growth.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Launch of the Official LEOPARD GOD Website',
                                    desc: (
                                        <>
                                            The official LEOPARD GOD website will act as the central
                                            hub for all activities surrounding our project. Here,
                                            enthusiasts will have the ability to mint and purchase
                                            LEOPARD GOD NFTs and use Round Leopard NFTs to access
                                            our novel synthesis feature for creating new Leopard God
                                            NFTs. Moreover, the website will serve as a gateway to
                                            our official social media channels and vibrant
                                            communities, as well as providing a direct link to our
                                            OpenSea page for secondary market transactions.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Airdrop',
                                    desc: (
                                        <>
                                            The journey begins with an airdrop event, during which
                                            we will distribute 1,000 NFTs to selected members of our
                                            community, prioritizing those who have demonstrated
                                            active involvement on our Discord channel.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Free Mint',
                                    desc: (
                                        <>
                                            We will celebrate our community by holding a free mint
                                            event for members who have shown significant interaction
                                            and contribution on our Discord. A total of 2,000 NFTs
                                            will be available during this event.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Whitelist Exclusive Pre-sale',
                                    desc: (
                                        <>
                                            To further reward our most active community members, we
                                            will launch a pre-sale event specifically for those on
                                            the whitelist. This event will offer 3,000 NFTs for
                                            purchase, ensuring that those who have invested their
                                            time and efforts in our community get the first chance
                                            to own a piece of the LEOPARD GOD collection.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Dutch Auction',
                                    desc: (
                                        <>
                                            We&apos;ll make the remaining 4,000 NFTs available in a
                                            Dutch auction. This transparent and fair auction method
                                            provides all participants with an equal opportunity to
                                            acquire a LEOPARD GOD NFT.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Synthetic System Rollout',
                                    desc: (
                                        <>
                                            Upon completion of the airdrop, we will deploy the
                                            synthesis system. Holders of Round Leopard NFTs will be
                                            able to leverage this innovative feature on our website
                                            to synthesize new Leopard God NFTs, initiating secondary
                                            sales and adding another dimension of excitement and
                                            value to our offering.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Introduction of the Bonus System',
                                    desc: (
                                        <>
                                            The launch of our bonus system will coincide with the
                                            unveiling of the synthesis system. Holders of Leopard
                                            God NFTs will have the privilege to participate in
                                            monthly lucky draws. Additionally, the introduction of
                                            the supreme crown prize for those who collect all six
                                            supreme crowns will add an additional layer of fun and
                                            potential profit for our community members.
                                        </>
                                    ),
                                },
                            ],
                        },
                        {
                            name: 'ROADMAP 2.0 STAGE',
                            items: [
                                {
                                    title: 'Development of the LEOPARD GOD Fashion Brand',
                                    desc: (
                                        <>
                                            In our continuous quest for growth and diversification,
                                            we plan to create a robust fashion brand centered on the
                                            LEOPARD GOD series. This will entail developing unique
                                            and stylish products across several categories,
                                            including apparel, accessories, and artwork.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Release of Proprietary Tokens',
                                    desc: (
                                        <>
                                            In alignment with our long-term strategy, we will launch
                                            our own digital tokens. As a token of our appreciation,
                                            holders of the LEOPARD GOD NFT series will be granted
                                            these tokens free of charge.
                                        </>
                                    ),
                                },
                                {
                                    title: 'Design and Deployment of Blockchain Games',
                                    desc: (
                                        <>
                                            Benefiting from the experience of our team members who
                                            come from the world&apos;s top 5 game developers, we
                                            will develop new blockchain games. This will provide
                                            additional benefits to our early supporters and
                                            contribute to the overall value of our project.
                                        </>
                                    ),
                                },
                            ],
                        },
                    ].map(({ name, items }) => (
                        <React.Fragment key={name}>
                            <h2 className="py-6 border-b border-b-[#5F5E5F]">{name}</h2>
                            {items.map(({ title, desc }) => (
                                <div
                                    key={title}
                                    className="text-left flex justify-between items-center border-b py-4 border-b-[#5F5E5F]"
                                >
                                    <div className="flex-none w-20 lg:w-52 text-sm lg:text-2xl">
                                        {title}
                                    </div>
                                    <div className="flex-1 px-10">{desc}</div>
                                    <div className="flex-none rounded-[50%] w-8 h-8 border border-[#D5BFB2]"></div>
                                </div>
                            ))}
                        </React.Fragment>
                    ))}
                    <div className="w-36 mx-auto my-9 py-2 border border-[#575757] rounded-3xl">
                        STAY TUNED
                    </div>
                </div>
            </div>
        </Layout>
    );
}
