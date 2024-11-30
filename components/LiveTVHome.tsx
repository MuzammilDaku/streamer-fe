import { Channel } from "@/config/channel.interface";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
// @ts-ignore
import Slider from 'react-slick';


const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
        {
          breakpoint: 1250,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

export default function LiveTVHome() {
    const router = useRouter();

    
    const trendingChannels = [
        {
            channel_name: "Star Sports Hindi",
            href: "/live-tv/star-sports-hindi",
            img: "/starsportshindi.png",
            trending: true,
            label: "SPORTS"
        },
        {
            channel_name: "Willow Cricket",
            href: "/live-tv/willow-cricket",
            img: "/willow.png",
            trending: true,
            label: "SPORTS"
        },
        {
            channel_name: "Star Sports Hindi",
            href: "/live-tv/star-sports-hindi",
            img: "/starsportshindi.png",
            trending: true,
            label: "SPORTS"
        },
        {
            channel_name: "Willow Cricket",
            href: "/live-tv/willow-cricket",
            img: "/willow.png",
            trending: true,
            label: "SPORTS"
        },
        {
            channel_name: "Star Sports Hindi",
            href: "/live-tv/star-sports-hindi",
            img: "/starsportshindi.png",
            trending: true,
            label: "SPORTS"
        },
        
    ];

    const bgColorByIndex = ["gold","aliceblue","ghostwhite","mintcream"];

    return (
        <div className="mx-3 my-5" >
            <div className="most-watched text-light">
                <div style={{ fontSize: "18px", fontWeight: "600" }}>
                    Trending at this moment
                </div>
                <Slider {...settings} className="my-4 mx-3">
                    {trendingChannels?.map((channel: Channel, index:number) => {
                        return (
                            <div key={index}  className={`cards my-2 bg-${bgColorByIndex[index % bgColorByIndex.length]}`} style={{ backgroundColor: "gold" }}  onClick={() =>router.push(channel?.href)}>
                                <Image src={channel?.img} alt="Star Sports 1 Hindi HD" height={200} width={200} style={{ width: "100%" }} />
                                <div className="label-tv">
                                    <div className="text-center">
                                        <div style={{ fontSize: "18px", color: "#000000" }}>
                                            {channel?.channel_name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </Slider>

            </div>
        </div>
    );
}
