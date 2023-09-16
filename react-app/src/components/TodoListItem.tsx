import type { Todo } from '../types';

export function TodoListItem({ todo, doneToggle }: { todo: Todo; doneToggle: (id: number) => void }) {
	return (
		<li className="flex gap-x-1 text-lg border px-4 py-2 w-52 my-2 rounded hover:bg-gray-200 transition border-gray-200 cursor-pointer" onClick={() => doneToggle(todo.id)}>
			<input type="checkbox" checked={todo.done} className="scale-125" />
			{todo.text}
		</li>
	);
}
