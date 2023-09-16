import { TodoListItem } from './TodoListItem';
import type { Todo } from '../types';

export function TodoList({ todos, doneToggle }: { todos: Todo[]; doneToggle: (id: number) => void }) {
	return (
		<ul className="mt-4 mx-2">
			{todos.map(todo => (
				<TodoListItem todo={todo} key={todo.id} doneToggle={doneToggle} />
			))}
		</ul>
	);
}
