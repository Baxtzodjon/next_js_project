import Image from "next/image";
import localFont from "next/font/local";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Homemain from "@/components/Homemain";
import { log } from "console";
import Todo from "@/components/Todo";
import Weather from "@/components/Weather";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const [city, setCity] = useState<string>('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [forecastData, setForecastData] = useState<any>(null);

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
        Monday: { temperature: current.temperature, weather_descriptions: current.weather_descriptions },
        Tuesday: { temperature: current.temperature + 1, weather_descriptions: current.weather_descriptions },
        Wednesday: { temperature: current.temperature + 2, weather_descriptions: current.weather_descriptions },
        Thursday: { temperature: current.temperature + 3, weather_descriptions: current.weather_descriptions },
        Friday: { temperature: current.temperature + 4, weather_descriptions: current.weather_descriptions },
        Saturday: { temperature: current.temperature + 5, weather_descriptions: current.weather_descriptions },
        Sunday: { temperature: current.temperature + 6, weather_descriptions: current.weather_descriptions },
      };

      setWeatherData(current);
      setForecastData(forecast);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable}`}
    /* grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] */
    >

      {/* <Homemain /> */} {/* я временно выключил это homemain */}

      {/* <Todo /> */} {/* Todo list */}

      <div className="h-screen flex items-center justify-center">

        <div className="weather_blc">

          <div className="relative w-full h-[35px]">

            <input type="text" placeholder="Search here" value={city} onChange={(e) => setCity(e.target.value)} className="w-full h-[33px] rounded-[9px] bg-[#FFFFFF] text-[#838BAA] text-[14px] leading-[13px] font-normal pl-[32px] outline-none" />

            <img src="https://cdn2.iconfinder.com/data/icons/arrow-part-1-2/32/Arrow_01_arrow-left-ui-essential-left_icon-14.png" alt="" className="absolute top-[11px] left-[9px] cursor-pointer" />

            <img src="https://cdn3.iconfinder.com/data/icons/wpzoom-developer-icon-set/500/67-14.png" alt="" className="absolute top-[10px] right-[9px] cursor-pointer" onClick={fetchWeather} />

          </div>

          {weatherData && forecastData && (<Weather current={weatherData} forecast={forecastData} />)}

          <div className="absolute bottom-8 right-5">

            <Link href="/detail" className="px-3 py-5 bg-[#FFFFFF] rounded-full text-[#000000] text-[14px] leading-[13px] font-semibold">Detail</Link>

          </div>

        </div>

      </div>

    </div>
  );
}
