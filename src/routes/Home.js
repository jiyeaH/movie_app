import React from 'react';
import axios from 'axios';
import Movie from "../components/Movie";
import "./Home.css";

//react는 자동적으로 class component의 render method를 실행한다!
class Home extends React.Component{

  state = {
    //변화하는 데이터를 담기 위해 state가 필요하다
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    //console.log(movies);
    this.setState({movies ,isLoading: false})
  };

  componentDidMount(){
    this.getMovies();
  }
 
    //매 순간 setState를 호출할 때마다 react는 새로운 state와 함께 render function을 호출한다.
  render() {
    const {isLoading, movies} =  this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                id = {movie.id} 
                year = {movie.year} 
                title = { movie.title} 
                summary = {movie.summary} 
                poster = {movie.medium_cover_image} 
                genres={movie.genres}
              />
            ))}
        g  </div>
          )
        }
    </section>
    );
  }
}

export default Home;
