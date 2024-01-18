import React, {
  useEffect,
  useState,
} from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] =
    useState("");
  const [addData, setAddData] = useState([]);
  const [editIndex, setEditIndex] =
    useState(null);
  useEffect(() => {
    const storeData = JSON.parse(
      localStorage.getItem("addToDo")
    );
    if (storeData) {
      setAddData(storeData);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "addToDo",
      JSON.stringify(addData)
    );
  }, [addData]);
  const handelChange = (e) => {
    setInputValue(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedData = [...addData];
      updatedData[editIndex] = inputValue;
      setAddData(updatedData);
      setInputValue("");
      setEditIndex(null);
    } else {
      if (inputValue === "") {
        alert("Please type data");
      } else {
        setAddData([...addData, inputValue]);
        setInputValue("");
      }
    }
  };
  const handelDelete = (index) => {
    const newTodo = [...addData];
    newTodo.splice(index, 1);
    setAddData(newTodo);
  };
  const handelEdit = (index) => {
    setInputValue(addData[index]);
    setEditIndex(index);
  };
  return (
    <>
      <div>
        <form onSubmit={handelSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handelChange}
          />
          <button type="submit">
            {editIndex !== null ? "Edit" : "Add"}
          </button>
        </form>
      </div>
      <ul>
        {addData.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              onClick={() => handelDelete(index)}>
              Delete
            </button>
            <button
              onClick={() => handelEdit(index)}>
              Edit
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ToDoList;
