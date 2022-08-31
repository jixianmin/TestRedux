const ADD_TODO = "ADD_TODO";
//투두리스트에 투두를 넣는 액션인 에드 투두라고하는  액션의 타입을 정의
//액션의 타입은 언더바에 대문자\\

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo: todo, //같은이름이라 todo,라고 해도된다
  };
}
//에드 투두 타입을 이용하는 <액션 생성 함수> 하는일 =>
//전역스테이트에 투두라고하는 스테이트안에 새로운 투두를 넣는다
