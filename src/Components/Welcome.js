import React , {Component} from 'react';

class Welcome extends Component
{
    render(){
        const {name,age}=this.props;
        //this.props.name="Ahmed"
        return <h1>Hello {name} {age}</h1>
    }
}

export default Welcome;