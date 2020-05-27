import React from 'react';

//react는 자동적으로 class component의 render method를 실행한다!
class App extends React.Component{

  state = {
    //변화하는 데이터를 담기 위해 state가 필요하다
    count: 0,
    isLoading: true
  };
  add = ( ) => {
    //console.log("add");
    this.setState(current => ({count: current.count + 1}));
  };
  minus = ( ) => {
    //console.log("miinus");
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount(){
    //mount 된것을 알려줌
    console.log("component rendered");
    setTimeout(() => {
      this.setState({ isLoading: false});
    }, 3000);
  }
  componentDidUpdate(){
    //update 된것을 알려줌
    console.log("i just update");
  }
  componentWillUnmount(){
    //unmount 된것을 알려줌
    console.log("GoodBye, unmount");
  }

    //매 순간 setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다.
  render() {
    console.log("i'm rendering");
    const {isLoading} =  this.state;
    return (
    <div>

      {isLoading ? "Loading...":"We are ready!"}
      <h1> The number is : {this.state.count}</h1>
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
    );
  }
}

export default App;
