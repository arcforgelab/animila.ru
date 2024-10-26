import Image from "next/image";
import {github} from "@/components/Icons/github";
import Link from "next/link";
import {vk} from "@/components/Icons/vk";
import {tg} from "@/components/Icons/tg";
import {steam} from "@/components/Icons/steam";
import {discord} from "@/components/Icons/discord";
import {BrowserIcons} from "@/components/Icons/Browser";
import {InternetIcon} from "@/components/Icons/internet";

export default function Home() {
    const social = [
        {
            "title": "github",
            "logo": github(),
            "url": "https://github.com/ArcForgeLab"
        },
        {
            "title": "vkontakte",
            "logo": vk(),
            "url": "https://vk.com/ArcForgeLab"
        },
        {
            "title": "telegram",
            "logo": tg(),
            "url": "https://t.me/ArcForgeLab"
        },
        {
            "title": "steam",
            "logo": steam(),
            "url": "https://steamcommunity.com/id/ArcForgeLab"
        },
        {
            "title": "discord",
            "logo": discord(),
            "url": "https://discord.gg/YJJDvVwUre"
        },
    ]
    return (
        <main className="flex flex-col py-[50px] gap-[50px] md:gap-[100px] px-[10px] md:h-[88vh]">
            <div className="absolute right-0 hidden md:block">
                <BrowserIcons/>
            </div>
            <div className="absolute left-0 hidden md:block">
                <InternetIcon/>
            </div>
           <div className="text-center px-[45px]">
               <h1 className="font-bold text-[30px] md:text-[50px]">Привет, я ArcForgeLab</h1>
               <p className="mt-[13px] text-[16px] md:text-[15px]">Backend, Frontend, DevOps, Architect, Adviser</p>
           </div>
            <div className="w-fit p-[20px] border-text border-2 rounded-[20px] flex items-center justify-center mx-auto">
                <p className="text-[20px]">На данный момент сайт в процессе разработки</p>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-[20px]">
                {social.map((item, index) =>
                    <Link href={item.url} target="_blank" key={index} className="w-full md:w-[206px] py-[29px] border-text border-[3px] rounded-[15px] flex justify-center items-center">
                        {item.logo}
                    </Link>
                )}
            </div>
        </main>
  );
}
