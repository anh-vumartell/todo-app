//Describe how a todo look like
class Todo {
  //in TS we have to define these properties ahead
  id: number;
  text: string;

  constructor(todoText: string) {
    this.id = Math.round(Math.random() * 100 + 1);
    this.text = todoText;
  }
}
export default Todo;
