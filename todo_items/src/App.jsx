import { useState } from "react";
import "./App.css";
import { Item } from "./components/Item";

function App() {
  const [items, setItems] = useState([]);
  const addItemHandler = (event) => {
    event.preventDefault();
    const fields = Object.fromEntries(new FormData(event.target));
    if (fields.item.trim() === "") {
      return;
    }
    setItems((prev) => [
      ...prev,
      { text: fields.item, id: crypto.randomUUID() },
    ]);
    event.target.item.value = "";
    event.target.item.focus;
  };
  const deleteItemHandler = (id) => {
    setItems((prev) => prev.filter((e) => e.id != id));
  };

  return (
    <main className="grid h-screen pb-40 place-content-center bg-slate-950 text-slate-300 ">
      <div className="grid items-center w-auto gap-4 sm:grid-cols-2 justify-items-center">
        <section className="self-center text-lg font-bold col-span-full">
          <h1>React add and delete items!</h1>
        </section>
        <form
          className="flex flex-wrap max-w-xs gap-4 p-4"
          onSubmit={addItemHandler}
          aria-label="Add Elements"
        >
          <label className="flex-auto" htmlFor="item">
            Write your item
          </label>
          <input
            className="flex-auto px-2 text-slate-950"
            id="item"
            type="text"
            name="item"
            placeholder="Item..."
          />
          <button
            id="submit"
            className="flex-1 px-4 py-2 transition duration-300 ease-in-out bg-white border border-gray-400 rounded shadow text-slate-950 flex- hover:bg-gray-200 hover:text-gray-900 active:scale-90 focus:ring focus:scale-90"
          >
            Add
          </button>
        </form>
        <section>
          <ul
            className={`max-h-80 ${
              items.length > 0 ? "overflow-y-scroll" : ""
            }`}
          >
            {items &&
              items.map((e) => (
                <Item key={e.id} element={e} clickHandler={deleteItemHandler} />
              ))}
            {items.length == 0 && (
              <li className="w-40 px-2 py-2 m-2 border border-gray-700 border-solid rounded hover:border-gray-800 hover:cursor-pointer">
                No elements
              </li>
            )}
          </ul>
        </section>
      </div>
    </main>
  );
}

export default App;
