"use client"

type TodoItemPrpop = {
    id: string,
    title: string,
    complete: boolean,
    toggleTodo: (id: string, complete: boolean) => void
}
const TodoItem = ({ id, title, complete, toggleTodo }: TodoItemPrpop) => {
    return (
        <li className="flex gap-1items-center ">
            <input id={id} onChange={e => toggleTodo(id, e.target.checked)} type="checkbox" defaultChecked={complete} className="cursor-pointer peer"/>
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        </li>

    )
}

export default TodoItem