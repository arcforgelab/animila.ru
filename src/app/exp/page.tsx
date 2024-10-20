import React from 'react';
import {exp_1_1} from "@/components/Icons/exp/exp_1_1";
import {exp_1_2} from "@/components/Icons/exp/exp_1_2";
import {exp_1_3} from "@/components/Icons/exp/exp_1_3";
import {exp_1_4} from "@/components/Icons/exp/exp_1_4";
import {exp_1_5} from "@/components/Icons/exp/exp_1_5";
import {exp_2_1} from "@/components/Icons/exp/exp_2_1";
import {exp_2_2} from "@/components/Icons/exp/exp_2_2";
import {exp_2_3} from "@/components/Icons/exp/exp_2_3";
import {exp_2_4} from "@/components/Icons/exp/exp_2_4";
import {exp_3_1} from "@/components/Icons/exp/exp_3_1";
import {exp_3_2} from "@/components/Icons/exp/exp_3_2";
import {exp_3_3} from "@/components/Icons/exp/exp_3_3";
import {exp_3_4} from "@/components/Icons/exp/exp_3_4";


export default function expo() {
    const expos = [
        {
            color: '#C216FF',
            title: 'Сайты и web системы',
            services: [
                { logo: exp_1_1(), title: 'Проектирование архитектуры' },
                { logo: exp_1_2(), title: 'Backend разработка' },
                { logo: exp_1_3(), title: 'Создание дизайна' },
                { logo: exp_1_4(), title: 'Frontend реализация' },
                { logo: exp_1_5(), title: 'Публикация и сопровождение' },
            ],
            stacks: [
                'RabbitMQ, Docker,\nNginx, Swagger',
                'Prisma, PostgreSQL,\n MongoDB, pg, MySQL, SQLite',
                'Express, Nest, Fastify,\n Laravel, Django, Node',
                'Микросервисы, чистая\n архитектура, БЭМ, Rest API',
                'PushAPI, PWA, JWT, Sessions,\n Sockets, CORS, HTTP2',
                'React, Next,\n HTML5',
                'Sass, TailwindCSS, Pug, Gulp,\n Bootstrap, OSM, TypeScript, Passport'
            ]
        },
        {
            color: '#16FF1F',
            title: 'Mobile and desktop',
            services: [
                { logo: exp_2_1(), title: 'Адаптация веб сайта в формат программы' },
                { logo: exp_2_2(), title: 'Проектирование дизайна' },
                { logo: exp_2_3(), title: 'Реализация интерфейса' },
                { logo: exp_2_4(), title: 'Подключения к различному бекенду' }
            ],
            stacks: [
                'Android, Windows,\n кросс-платформа',
                'Tauri,\n Electrone?',
                'Firebase,\n Supabase',
                'React Native, Flutter,\n Wpf C#, PWA, QtPy',
            ]
        },
        {
            color: '#16F1FF',
            title: 'Прочее',
            services: [
                { logo: exp_3_1(), title: 'Консультация и помощь' },
                { logo: exp_3_2(), title: 'Работа в области машинного обучения' },
                { logo: exp_3_3(), title: 'Проектирование баз данных' },
                { logo: exp_3_4(), title: 'Разработка игр' },
            ],
            stacks: [
                'Hoppsotch,\n Postman',
                'Python, Java, C#, JS, PHP, SQL,\n Pascal, 1C, Dart, GraphQL',
                'Ubuntu 20.04/22.04,\n Windows 10/11',
                'Figma,\n Lunacy',
                'Notion,\n Trello',
                'Docker Desktop,\n Putty, FileZilla',
                'Excalidraw, Draw.io, myDraft,\n scrcpy, temp-mail, getform',
                'pgAdmin,\n MSSQL',
                'WebStorm, VS Code, Visual Studio,\n PyCharm, Android Studio, Notepad++'
            ]
        }
    ]

    return <main className='flex flex-col gap-[50px] my-[50px] px-[10px] md:px-[9.55vw]'>
        <h2 className='text-[40px] text-center'>Навыки</h2>

        <div className="flex flex-col justify-center gap-[20px]">
            {expos.map((item, index) =>
                <section
                    className='flex justify-center flex-col gap-[23px] border-2 py-[30px] mx-auto rounded-[20px] px-[10px] w-full'
                    style={{borderColor: item.color}} key={index}>

                    <h3 style={{color: item.color}} className='text-center text-[40px]'>{item.title}</h3>

                    <div className="flex flex-col justify-center gap-[40px]">
                        <div className='flex justify-around flex-col md:flex-row md:flex-wrap gap-[25px] '>
                            {item.services.map((service, index) =>
                                <div className='flex flex-col items-center' key={index}>
                                    {service.logo}
                                    <p className='text-[20px] w-[220px] text-center flex justify-center mt-[20px]'>{service.title}</p>
                                </div>
                            )}
                        </div>


                        <div className="flex flex-col justify-center gap-[20px]">
                            <h3 style={{color: item.color}} className='text-center text-[30px]'>Стек</h3>

                            <div className='flex justify-center gap-[24px] flex-wrap'>
                                {item.stacks.map((stack, index) =>
                                    <p className='text-[20px] w-full py-[24px] md:px-[24px] md:w-fit border-[1px] border-text rounded-[12px] whitespace-pre-line flex justify-center text-center'
                                       key={index}>{stack}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </div>
    </main>
}
