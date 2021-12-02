//Describe how a todo look like
class Todo {
  //in TS we have to define these properties ahead
  id: number;
  text: string;
  checked: boolean;

  constructor(todoText: string) {
    this.id = Math.round(Math.random() * 100 + 1);
    this.text = todoText;
    this.checked = false;
  }
}
export default Todo;
