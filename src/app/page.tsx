import Image from "next/image";
import {github} from "@/components/Icons/github";
import Link from "next/link";
import {vk} from "@/components/Icons/vk";
import {tg} from "@/components/Icons/tg";
import {steam} from "@/components/Icons/steam";
import {discord} from "@/components/Icons/discord";

export default function Home() {
    const social = [
        {
            "title": "github",
            "logo": github(),
            "url": "https://github.com/Animila"
        },
        {
            "title": "vkontakte",
            "logo": vk(),
            "url": "https://vk.com/kiritCooper"
        },
        {
            "title": "telegram",
            "logo": tg(),
            "url": "https://t.me/kiritCooper"
        },
        {
            "title": "steam",
            "logo": steam(),
            "url": "https://steamcommunity.com/id/animila"
        },
        {
            "title": "discord",
            "logo": discord(),
            "url": "https://discord.gg/YJJDvVwUre"
        },
    ]
    return (
        <>
           <div className="text-center pt-[9.0vh]">
               <h1 className="font-bold text-[50px]">Привет, я Animila</h1>
               <p className="text-[15px]">Backend, Frontend, DevOps, Architect, Adviser</p>
           </div>
            <div className="mt-[9.0vh] mx-auto w-[38.2vw] h-[15.4vh] border-text border-2 rounded-[20px] flex items-center justify-center">
                <p className="text-[20px]">На данный момент сайт в процессе разработки</p>
            </div>
            <div className="flex items-center justify-center gap-[20px] pt-[9.40vh]">
                {social.map((item, index) =>
                    <Link href={item.url} target="_blank" key={index} className="w-[11.9vw] h-[10.2vh] border-text border-[3px] rounded-[15px] flex justify-center items-center">
                        {item.logo}
                    </Link>
                )}
            </div>
        </>
  );
}
