import React from 'react';
class GroceryList extends React.Component{
constructor(props){
super(props);
this.state = {
groceries:[{name:"Apples"}],
fruit:'',
name:''
}
}
toggleGroceryCompleteness(groceryIndex) {
    // Put your code here
  }
handleChange = fruit => event => {
    this.setState({
    fruit: event.target.value
    });
    }
addGroceryItem= name=>event => {

this.state.groceries.push({name:this.state.fruit});
 this.setState({groceries:this.state.groceries});

console.log(this.state.fruit);
  }

clearList= name=>event => {
this.setState({groceries:[]});

}

render(){
 let groceriesComponents = [];

for(var index = 0; index < this.state.groceries.length; index++) {
      groceriesComponents.push(
          <GroceryListItem
            grocery={this.state.groceries[index]}
            onComplete = {this.toggleGroceryCompleteness(index)}
          />
      );
    }

return(


<div>
{groceriesComponents}



<input type="text" name="fruit" value={this.state.fruit} onChange={this.handleChange()} />
<button onClick={this.addGroceryItem()} > Enter</button>

<button onClick={this.clearList() }> Clear List </button>

</div>




)

}


}

class GroceryListItem extends React.Component{

render(){
return(
<li>
{this.props.grocery.name}
</li>


)


}

}

export default GroceryList;
