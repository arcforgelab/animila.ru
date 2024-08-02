'use client'
import React, { useState } from "react";
import {integ} from "@/components/Icons/service/integ";
import {design} from "@/components/Icons/service/design";
import {website} from "@/components/Icons/service/website";
import {app} from "@/components/Icons/service/app";
import {other} from "@/components/Icons/service/other";
import InputMask from 'react-input-mask';

export default function Create() {
    const [selectedService, setSelectedService] = useState('');

    const services = [
        { id: 'integration', label: 'Интеграция', logo: integ() },
        { id: 'design', label: 'Создание дизайна', logo: design() },
        { id: 'web-dev', label: 'Веб-разработка', logo: website() },
        { id: 'app-dev', label: 'Разработка приложений', logo: app() },
        { id: 'other', label: 'Другое', logo: other() },
    ];

    const handleServiceSelect = (service: any) => {
        setSelectedService(service);
    };

    return (
        <main className="mb-[60px] mx-[50px]">
            <h2 className="text-[40px] text-center mt-[60px]">Заказать услугу</h2>
            <div className="grid grid-cols-12 gap-4">
                <div className="col-span-8">
                    <form action="https://getform.io/f/0f7d6781-beb4-4566-93e3-63d29b21e45d" method="POST"
                          encType="multipart/form-data">
                        <div className="mb-6">
                            <p className="mb-2 text-[25px]">1. Выбрать услугу</p>
                            <div className="flex flex-wrap gap-[20px] mt-[20px]">
                                {services.map(service => (
                                    <button
                                        type="button"
                                        key={service.id}
                                        onClick={() => handleServiceSelect(service.id)}
                                        className={`text-[20px] px-4 py-2 rounded-[12px] border-[1px] ${selectedService === service.id ? 'bg-main border-main text-black' : 'bg-transparent border-main text-main'}`}
                                    >
                                        {service.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-6 mt-[50px]">
                            <p className="mb-2 text-[25px]">2. Описать требуемую задачу</p>
                            <textarea
                                className="w-full text-[20px] p-[20px] border-2 border-gray-300 bg-transparent mt-[20px] rounded-[10px]"
                                rows={6}
                                placeholder="Описание"
                                name="description"
                            ></textarea>
                        </div>
                        <input type="hidden" name="service" value={selectedService}/>
                        <div className="mb-6 mt-[50px]">
                            <p className="mb-2 text-[25px]">3. Контакты</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-[20px]">
                                <input
                                    type="text"
                                    className="w-full text-[20px] p-[20px] border-2 border-gray-300 bg-transparent rounded-[10px]"
                                    placeholder="Как вас звать?"
                                    name="name"
                                />
                                <InputMask
                                    mask="+7(999)999-99-99"
                                    maskChar={null}
                                    type="phone"
                                    className="w-full text-[20px] p-[20px] border-2 border-gray-300 bg-transparent rounded-[10px]"
                                    placeholder="Телефон для связи"
                                    name="phone"
                                />
                                <input
                                    type="email"
                                    className="w-full text-[20px] p-[20px] border-2 border-gray-300 bg-transparent rounded-[10px]"
                                    placeholder="Электронная почта"
                                    name="email"
                                />
                                <input
                                    type="text"
                                    className="w-full text-[20px] p-[20px] border-2 border-gray-300 bg-transparent rounded-[10px]"
                                    placeholder="Способ связи (или доп информация)"
                                    name="comment"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="px-[200px] py-[20px] text-[25px] bg-main text-black font-black rounded-[15px] mt-[50px]"
                        >
                            Отправить
                        </button>
                    </form>
                </div>
                <div className="col-span-4 flex justify-center ">
                    {selectedService !== '' ? services.find(value => value.id === selectedService)?.logo : services[4].logo}
                </div>
            </div>
        </main>
    );
}
