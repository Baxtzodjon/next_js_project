import React, { useState } from "react";

interface TodoProps { }

const Todo: React.FC<TodoProps> = () => {

    const [todo, setTodo] = useState<{ id: string; text: string; time: any }[]>([])
    const [newTodo, setNewTodo] = useState<string>('')
    const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 9999)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const randomNumber = getRandomNumber()

        const newItem = {
            id: `${randomNumber}`,
            text: newTodo,
            time: new Date().toLocaleTimeString('uz-UZ', { hour12: false })
        }

        setTodo(todo.concat(newItem))

        setNewTodo('')
    }

    const handleTextClick = (id: string, currentText: string) => {
        const newText = prompt("Введите новое значение для задачи:", currentText)

        if (newText !== null) {
            setTodo(todo.map(item => item.id === id ? { ...item, text: newText } : item))
        }
    }

    const handleDelete = (id: string) => {

        setTodo(todo.filter(item => item.id !== id))
    }

    const handleCheckboxChange = (id: string) => {
        setCheckedItems(prev => {
            const updated = new Set(prev);

            if (updated.has(id)) {
                updated.delete(id)
            } else {
                updated.add(id)
            }

            return updated

        });
    };

    return (
        <>

            <div className="sm:w-full md:[740px] lg:w-[1200px] mx-auto">

                <h1 className="text-[#FFFFFF] text-[48px] leading-[60px] font-bold text-center pt-[70px]">Todo List</h1>

                <form action="" className="flex items-center justify-center flex-wrap gap-2 pt-[22px] pb-[42px]" onSubmit={handleSubmit}>

                    <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} placeholder="Buy Model S" pattern="^[a-zA-Z0-9 ]+$" title="Только буквы, цифры и пробелы разрешены" className="w-[321px] h-[42px] bg-transparent border-[2px] border-solid border-[#007FFF] rounded-[10px] text-[#FFFFFF] text-[16px] leading-[20px] font-semibold outline-none pl-5" />

                    <button className="w-[155px] h-[42px] bg-[#0071E3] rounded-[10px] text-[#FFFFFF] text-[18px] leading-[22px] font-medium hover:bg-blue-700 hover:scale-105 duration-200">Add</button>

                </form>

                <div className="w-full h-[1px] bg-[#FFFFFF] mb-[18px]"></div>

                <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">

                    {
                        todo?.map((item) => {

                            return (

                                <>

                                    <div className="w-[282px] h-[90px] bg-[#F0F0F0] rounded-[10px] border-2 border-solid border-[#007FFF] py-[21px] px-[25px]" key={item.id}>

                                        <div className="flex flex-col gap-[7px]">

                                            <div className="flex items-center justify-between">

                                                <h5 className="text-[#000000] text-[18px] leading-[22px] font-semibold overflow-hidden whitespace-nowrap text-ellipsis" onClick={() => handleTextClick(item.id, item.text)}>{item.text}</h5>

                                                <img src="https://cdn0.iconfinder.com/data/icons/pinpoint-notifocation/48/error-outline-14.png" alt="" className="w-[14px] h-[14px] object-cover cursor-pointer hover:scale-105 duration-200" onClick={() => handleDelete(item.id)} />

                                            </div>

                                            <div className="flex items-center justify-between">

                                                <span className="text-[#0000008C] text-[14px] leading-[17px] font-medium italic">{item.time}</span>

                                                <input type="checkbox" checked={checkedItems.has(item.id)} onChange={() => handleCheckboxChange(item.id)} />

                                            </div>

                                        </div>

                                    </div>

                                </>

                            )

                        })
                    }

                </div>

            </div>

        </>
    )
}

export default Todo;