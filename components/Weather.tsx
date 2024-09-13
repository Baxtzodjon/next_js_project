import React from "react";

interface WeatherProps {
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

const Weather: React.FC<WeatherProps> = ({ current, forecast }) => {

    function formatDate() {
        const date = new Date();
        const day = date.getDate();
        const month = date.toLocaleString('default', { month: 'long' });
        const weekday = date.toLocaleString('default', { weekday: 'long' });

        return `${day} ${month}, ${weekday}`;
    }

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
        <>

            {/* <div>

                <img src={current.weather_icons[0]} alt="Weather icon" />
                <p>{current.temperature}°</p>
                <p>{current.weather_descriptions.join(', ')}</p>

            </div> */}

            {/* <ul>

                {days.map((day, index) => (
                    <li key={index}>

                        <strong>{day}:</strong> {forecast[day]?.temperature}C, {forecast[day]?.weather_descriptions.join(', ')}

                    </li>
                ))}

            </ul> */}

            <div className="weather_blcs">

                <div className="flex items-center justify-center mt-[80px]">

                    <div className="relative w-full h-[65px]">

                        <img src={current.weather_icons[0]} alt="" className="absolute top-2/4 left-2/4 translate-y-[-50%] translate-x-[-50%] w-[150px] h-[150px] object-cover rounded-[8px]" />

                    </div>

                </div>

                <div className="w-[247px] h-[234px] rounded-[14px] bg-[#FFFFFF4D] border-[2px] border-solid border-[255, 255, 255, 0.7] flex items-center justify-center flex-col gap-[19px] mt-[70px]">

                    <div className="flex items-center justify-center flex-col">

                        <span className="text-[#FFFFFF] text-[13px] leading-[16px] font-normal">{formatDate()}</span>

                        <h1 className="text-[#FFFFFF] text-[70px] leading-[89px] font-normal">{current.temperature}°</h1>

                        <h6 className="text-[#FFFFFF] text-[12px] leading-[21px] font-bold">{current.weather_descriptions.join(', ')}</h6>

                    </div>

                    <div className="flex items-center justify-center flex-col">

                        <div className="flex items-center justify-center gap-[16px]">

                            <div className="flex items-center justify-center gap-[14px]">

                                <img src="/icons/wind.png" alt="" />

                                <small className="text-[#FFFFFF] text-[13px] leading-[16px] font-normal">Wind</small>

                            </div>

                            <div>

                                <span className="text-[#FFFFFF]">|</span>

                            </div>

                            <div>

                                <small className="text-[#FFFFFF] text-[13px] leading-[16px] font-normal">{current.wind_speed} km/h</small>

                            </div>

                        </div>

                        <div className="flex items-center justify-center gap-[16px]">

                            <div className="flex items-center justify-center gap-[14px]">

                                <img src="/icons/hum.png" alt="" />

                                <small className="text-[#FFFFFF] text-[13px] leading-[16px] font-normal">Hum</small>

                            </div>

                            <div>

                                <span className="text-[#FFFFFF]">|</span>

                            </div>

                            <div>

                                <small className="text-[#FFFFFF] text-[13px] leading-[16px] font-normal">{current.humidity} %</small>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Weather;
