import React from "react";
import Form from "./Components/Input/Form";
import ListWrapper from "./Components/listwrapper/ListWrapper";



class App extends React.Component{

  state ={
      items:[

      ],
      counter: 1,
  }

  addItem = (e) => {
      e.preventDefault();

      let counter = this.state.counter;

      const newItem =
          {
              id: counter,
              description: e.target[0].value,
              isCompleted: false,
          };

      counter++;

      this.setState(prevState => ({
          items: [...prevState.items, newItem],
          counter: counter,
      }));

      e.target.reset();
  }

  deleteItem = (id) => {
      const init = 1;
      let i = init;

      const todos = this.state.items.filter(el =>{
        return el.id !== id; //this will go through whole arr and will return false when meet element with out passed id
      });

      todos.filter(el => {
          el.id = i;
          i++;
          return todos;
      })

      this.setState(() => ({
          items: [...todos],
          counter: i,
      }))
  }

  completeItem = (id) => {
      console.log("Completed ", id);

      const item = this.state.items.filter(el =>{
          if(el.id === id){
              el.isCompleted = el.isCompleted != true;
          }

          return el;
      });

      this.setState({
          items:[...item],
      });

  }


  render() {
    return(
        <div>
          <Form
              submitFn={this.addItem}
          />
          <ListWrapper
              completeFn={this.completeItem}
              deleteFn={this.deleteItem}
              items={this.state.items}/>
        </div>
    )
  }
}

export default App;
