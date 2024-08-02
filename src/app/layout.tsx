'use client';

import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Изменение здесь

const inter = Inter({ subsets: ["cyrillic"] });

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname(); // Изменение здесь
    const currentRoute = pathname;

    return (
        <html lang="ru">
        <head>
            <title>Animila</title>
            <meta name="description" content="Fullstack-разработчик занимающийся комплексной работой над сайтом: backend, frontend, базы данных, DevOps, администрирование, микросервисы"/>
        </head>
        <body className={`${inter.className} h-[500px]`}>
        <header className="border-b-[1px] border-b-main h-[7.2vh] flex items-center justify-between md:px-[50px]">
            <div className="flex items-center justify-center">
                <Image
                    src={'/logo.png'}
                    alt={'Логотип'}
                    width={50}
                    height={50}
                    quality={100}
                    priority={true} />
                <Link href={'/'} className='text-[25px] font-bold ml-[18px]'>
                    Animila
                </Link>
            </div>
            <menu className="md:flex ssm:hidden items-center flex-row md:gap-[40px] text-[20px]">
                <Link href={'/'} className={`cursor-pointer ${currentRoute === '/' ? 'text-main font-bold' : ''}`}>Главная</Link>
                <Link href={'/exp'} className={`cursor-pointer ${currentRoute === '/exp' ? 'text-main font-bold' : ''}`}>Навыки</Link>
                <Link href={'/projects'} className={`cursor-pointer ${currentRoute === '/projects' ? 'text-main font-bold' : ''}`}>Проекты</Link>
                <Link href={'/new'} className={`cursor-pointer ${currentRoute === '/new' ? 'text-main font-bold' : ''}`}>Заказать</Link>
            </menu>
        </header>
        {children}
        <footer className="border-t-[1px] border-t-main h-[4.2vh] flex justify-center items-center text-[16px]">
            animila@2024
        </footer>
        </body>
        </html>
    );
}
