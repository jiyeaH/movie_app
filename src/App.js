import React from 'react';

const foodILike = [
  {
    id:1,
    name : "kimchi",
    image: "https://cdn.pixabay.com/photo/2019/03/09/15/12/kimchi-4044268_1280.jpg"
  },
  {
    id:2,
    name : "ramen",
    image: "https://cdn.pixabay.com/photo/2020/03/31/10/37/ramen-4987117_1280.jpg"
  },
  {
    id:3,
    name : "snack",
    image: "https://cdn.pixabay.com/photo/2016/09/18/20/25/candy-1678933_1280.jpg"
  } 
]


function Food({name,picture}) {
  return(
     <div>
    <h1>I like {name} </h1>
    <img src = {picture} alt = {name}/>
  </div>
  );
}

function App() {
  return <div>
            <h3>Hello!!!!!!!!</h3>
            {foodILike.map(dish =>(
               <Food key={dish.id} name={dish.name} picture={dish.image} />
               ))}
                        
        </div>;
}

export default App;
