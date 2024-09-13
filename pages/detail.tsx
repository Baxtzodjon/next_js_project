import { GetServerSideProps } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface detailProps {
    current: {
        temperature: number;
        weather_descriptions: string[];
        weather_icons: string[];
        wind_speed: number;
        humidity: number;
    }
    forecast: {
        [key: string]: {
            temperature: number
            weather_descriptions: string[]
        }
    }
}

const detail: React.FC<detailProps> = ({ current, forecast }) => {

    // const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    const times = ['15.00', '16.00', '17.00', '18.00', '19.00', '20.00', '21.00']
    const dates = ['Sep, 13', 'Sep, 14', 'Sep, 15', 'Sep, 16', 'Sep, 17']

    const [city, setCity] = useState<string>('');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [forecastData, setForecastData] = useState<any>(null);
    const [forecastDataSec, setForecastDataSec] = useState<any>(null);

    function formatDate() {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });

        return `${day} ${month}`;
    }

    const fetchWeather = async () => {
        if (!city) return;

        try {
            const response = await fetch(`http://api.weatherstack.com/current?access_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${city}`);

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();

            console.log('API Response:', data);

            if (!data || !data.current) {
                throw new Error('Invalid data structure');
            }

            const current = data.current;

            const forecast = {
                "Sep, 13": { temperature: current.temperature, weather_descriptions: current.weather_descriptions },
                "Sep, 14": { temperature: current.temperature + 2, weather_descriptions: current.weather_descriptions },
                "Sep, 15": { temperature: current.temperature + 1, weather_descriptions: current.weather_descriptions },
                "Sep, 16": { temperature: current.temperature + 4, weather_descriptions: current.weather_descriptions },
                "Sep, 17": { temperature: current.temperature + 2, weather_descriptions: current.weather_descriptions },
                // "Sep, 18": { temperature: current.temperature + 5, weather_descriptions: current.weather_descriptions },
                // "Sep, 19": { temperature: current.temperature + 6, weather_descriptions: current.weather_descriptions },
            };

            const forecast_sec = {
                "15.00": { temperature: current.temperature, weather_descriptions: current.weather_descriptions },
                "16.00": { temperature: current.temperature + 1, weather_descriptions: current.weather_descriptions },
                "17.00": { temperature: current.temperature + 5, weather_descriptions: current.weather_descriptions },
                "18.00": { temperature: current.temperature + 2, weather_descriptions: current.weather_descriptions },
                "19.00": { temperature: current.temperature + 3, weather_descriptions: current.weather_descriptions },
                "20.00": { temperature: current.temperature + 1, weather_descriptions: current.weather_descriptions },
                "21.00": { temperature: current.temperature + 4, weather_descriptions: current.weather_descriptions },
            };

            setWeatherData(current);
            setForecastData(forecast);
            setForecastDataSec(forecast_sec);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <>

            <div className="h-screen flex items-center justify-center">

                <div className="weather_blc">

                    <div className="relative w-full h-[35px]">

                        <input type="text" placeholder="Search here" value={city} onChange={(e) => setCity(e.target.value)} className="w-full h-[33px] rounded-[9px] bg-[#FFFFFF] text-[#838BAA] text-[14px] leading-[13px] font-normal pl-[32px] outline-none" />

                        <Link href="/"><img src="https://cdn2.iconfinder.com/data/icons/arrow-part-1-2/32/Arrow_01_arrow-left-ui-essential-left_icon-14.png" alt="" className="absolute top-[11px] left-[9px] cursor-pointer" /></Link>

                        <img src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/67-14.png" alt="" className="absolute top-[10px] right-[9px] cursor-pointer" onClick={fetchWeather} />

                    </div>

                    <div className="flex items-center justify-between mt-[30px]">

                        <h5 className="text-[#FFFFFF] text-[14px] leading-[17px] font-black">Today</h5>

                        <span className="text-[#FFFFFF] text-[13px] leading-[16px] font-normal">{formatDate()}</span>

                    </div>

                    <div className="flex gap-[8px] mt-[18px]">

                        {times.map((time, index) => (
                            <div className="flex items-center justify-between flex-col gap-[10px]" key={index}>

                                <small className="text-[#FFFFFF] text-[12px] leading-[13px] font-normal">{forecastDataSec && forecastDataSec[time]?.temperature}°C</small>

                                <img src="/icons/weather.png" alt="" className="w-[20px] h-[12px]" />

                                <h6 className="text-[#FFFFFF] text-[12px] leading-[13px] font-normal">{time}</h6>

                            </div>
                        ))}

                    </div>

                    <div className="flex items-center justify-between mt-[30px] mb-[22px]">

                        <h5 className="text-[#FFFFFF] text-[14px] leading-[17px] font-black">Next Forecast</h5>

                        <img src="https://cdn2.iconfinder.com/data/icons/school-set-5/512/6-14.png" alt="" className="cursor-pointer" />

                    </div>

                    <div className="w-full h-[300px] overflow-auto flex flex-col gap-[24px]">

                        {dates.map((date, index) => (
                            <div className="flex items-center justify-between" key={index}>

                                <h5 className="text-[#FFFFFF] text-[14px] leading-[17px] font-bold">{date}</h5>

                                <img src="/icons/weather.png" alt="" className="w-[20px] h-[13px] cursor-pointer" />

                                <h5 className="text-[#FFFFFF] text-[14px] leading-[17px] font-bold">{forecastData && forecastData[date]?.temperature}°C</h5>

                            </div>
                        ))}

                    </div>

                    <div className="flex items-center justify-center gap-2 mt-[10px]">

                        <img src="https://cdn3.iconfinder.com/data/icons/nautical-flat/64/sea-20-256.png" alt="" className="w-[20px] h-[20px] object-cover" />

                        <small className="text-[#FFFFFF] text-[12px] leading-[13px] font-normal">Weatherstack</small>

                    </div>

                </div>

            </div>

        </>
    )
}

export default detail;