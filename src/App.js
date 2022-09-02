import "./App.css";
// //import { useContext, useEffect, useState } from "react";
// import { addTodo } from "./redux/actions";
//import ReduxContext from "./contexts/ReduxContext";
// //import useReduxState from "./hooks/useReduxState";
// import useReduxDispatch from "./hooks/useReduxDispatch";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
// function useReduxState() {
//   const store = useContext(ReduxContext);
//   const [state, setState] = useState(store.getState());
//   useEffect(() => {
//     const unsubscribe = store.subscribe(() => {
//       setState(store.getState());
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, [store]);
//   return state;
// }
//훅시간에 공통적인 스테이트에관한 로직은 따로 커스텀훅으로 뺄수있다 이걸 따로 커스텀훅으로 만들어서 더 편하게 사용
//useReduxState은 임의명칭인 커스텀훅
// function useReduxDispatch() {
//   const store = useContext(ReduxContext);

//   return store.dispatch;
// }

function App() {
  //const state = useReduxState();
  // const dispatch = useReduxDispatch();

  return (
    <div className="App">
      <header className="App-header">
        {/* {JSON.stringify(state)} */}
        <TodoList />
        <TodoForm />
        {/* <button onClick={click}>추가</button> */}
      </header>
    </div>
  );
  // function click() {
  //   dispatch(addTodo("todo"));
  // }
}

export default App;
