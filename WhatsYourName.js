import React from 'react';
class WhatsYourName extends React.Component{

constructor(props){
super(props);
this.state = {

name: "silvia"
};

};
handleChange = name => event => {
    this.setState({
     name: event.target.value
    });

if(event.target.value.length==0){
alert("Please enter a name");
}
}


render(){

return(
<div>
<p> Hello{ this.state.name}</p>
<input type="text" name="name" onChange = {this.handleChange()} value={this.state.name} />

</div>


)

}

}
export default WhatsYourName;
