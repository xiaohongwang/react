import React from 'react';
class Mycomponent3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            second : 0
        }
    }

    tick(){
        this.setState(prevState =>({
            second: prevState.second + 1
        }))
    }

    componentDidMount(){
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval);
      }
    
      render() {
        return (
          <div>
            Seconds: {this.state.second}
          </div>
        );
      }
}

export default Mycomponent3;