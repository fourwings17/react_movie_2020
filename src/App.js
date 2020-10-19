import Axios from 'axios';
import React from 'react';
import Movie from './Movie'
import './App.css';

class App extends React.Component {

  //초기화 작업
  state = {
    isLoading : true,
    movies : [],
  }

  getMovies = async () => {
    const {data: {data: {movies}}} 
           = await Axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by-rating");

     setTimeout(() => {
       if(movies != null){
         this.setState({movies, isLoading : false})     
       }
     }, 1000);

  }

  //render가 마운트 되자마자 실행함
  componentDidMount() {    
    this.getMovies();
  }

  render(){
    const {isLoading, movies} = this.state;  

    return (
        <div className='wrap'>
          <section className='side_menu'>             
          </section>
          <section className='container'>              
              { isLoading ? (
                     <div className='loader'>
                       <span className='loader_text'>
                        <img src="images/loading1.gif" alt="Loading.." />                        
                        <p>데이터를 불러오는 중입니다..잠시만 기다려주세요</p>
                       </span>
                     </div>                     
              ) : ( 
                 <div className='movies'>
                    { movies.map(movie => {
                      return <Movie                   
                      key={movie.id} 
                      id={movie.id} 
                      title={movie.title.substring(0,28)} 
                      year={movie.year} 
                      summary={movie.summary.substring(0,200)} 
                      poster={movie.medium_cover_image}
                      genres={movie.genres}                       
                      />
                      }
                    )}
                  </div>
              )}            
          </section>
        </div>
    )}

}

export default App;
