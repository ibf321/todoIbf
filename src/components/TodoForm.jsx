import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const hardleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category, description);
    setValue("");
    setCategory("");
    setDescription("");
  };
  return (
    <div className="todo-form">
      <h2>Criar Tarefa:</h2>
      <form onSubmit={hardleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Digite a descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
