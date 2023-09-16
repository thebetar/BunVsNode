import { useEffect, useState } from 'react';
import { TodoList } from './components/TodoList';
import type { Todo } from './types';

const TODOS = [
	{
		id: 1,
		text: 'Learn React',
		done: true,
	},
	{
		id: 2,
		text: 'Test bun',
		done: false,
	},
	{
		id: 3,
		text: 'Test node',
		done: false,
	},
] as Todo[];

function App() {
	const [todos, setTodos] = useState<Todo[]>([]);

  function onDoneToggle(id: number) {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    }));
  }

	useEffect(() => {
		setTodos(TODOS);
	}, []);

	return (
		<div className="m-4">
			<div className="text-4xl font-semibold">Todo app</div>
			<TodoList todos={todos} doneToggle={onDoneToggle} />
		</div>
	);
}

export default App;
