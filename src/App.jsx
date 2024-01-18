import React from "react";
import Accordion from "./accordion/Accordion";
import ToDoList from "./ToDoList";

const App = () => {
  return (
    <>
      <Accordion />
      <ToDoList />
    </>
  );
};
// const App = () => {
//   const list = [
//     "banana",
//     "apple",
//     "mango",
//     "grapes",
//     "onion",
//     "lichi",
//     "pineapple",
//     "watermelon",
//     "carrot",
//   ];
//   const [filterList, setFilterList] =
//     useState(list);

//   const handleSearch = (event) => {
//     const filteredValues = list.filter(
//       (item) =>
//         item
//           .toLocaleLowerCase()
//           .indexOf(
//             event.target.value.toLocaleLowerCase()
//           ) !== -1
//     );
//     setFilterList(filteredValues);
//   };
//   return (
//     <div>
//       <div>
//         <input
//           name="query"
//           type="text"
//           onChange={handleSearch}
//         />
//       </div>
//       {filterList &&
//         filterList.map((item, index) => (
//           <div key={index}>{item}</div>
//         ))}
//     </div>
//   );
// };
export default App;
