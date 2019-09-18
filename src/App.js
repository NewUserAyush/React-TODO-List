import React from 'react';
import './App.css';
import ListCom from './component/list-com';
import JsApiReporter from 'jest-jasmine2/build/jasmine/JsApiReporter';


class App extends React.Component {
  state={list:JSON.parse(localStorage.getItem('lists'))||[],cards:JSON.parse(localStorage.getItem('cards'))||[]};
  render(){
    return (
      <div className="App">
        <header className="App-header">
         TODO List
         <div className="button" onClick={this.addList.bind(this)}>Add List</div>
        </header>
        <div className="flex">
         {this.state.list.map(item=><ListCom key={item.id} onDragOverhandler={this.onDragOver} onDropHandler={this.onDrop.bind(this)} cards={this.state.cards} id={item.id} addCardHandler={this.addCard}/>)}
        </div>
       
      </div>
    )
  }

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");  
    let cards = this.state.cards.filter((task) => {      
        if (task.cardId == id) {              
            task.listId = cat;                 
        }                     
        return task;          
     });          
     localStorage.setItem('cards',JSON.stringify(cards));
      this.setState({...this.state,cards});    
}

onDragOver = (ev) => {
  ev.preventDefault();
}

  addCard=(listId)=>{
    let arr=this.state.cards;
    arr.push({listId:listId,cardId:this.uuidv4()})
    localStorage.setItem('cards',JSON.stringify(arr));
    this.setState({cards:arr});
  }

  addList(){
    let arr=this.state.list;
    arr.push({id:this.uuidv4()})
    localStorage.setItem('lists',JSON.stringify(arr));
    this.setState({list:arr})
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  
}


export default App;
