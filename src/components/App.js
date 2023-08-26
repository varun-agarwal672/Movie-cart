import React from 'react';
import {data} from "../data.js";
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, removeFavourite, showFavourite } from '../actions/index.js';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    })
    store.dispatch(addMovies(data));
  }
  isMovieFavourite(movie) {
    const {favourite} = this.props.store.getState();
    const index = favourite.indexOf(movie);

    if(index !== -1) {
      return true;
    }

    return false;
  }
  handleUnfavouriteClick = (movie) => {
    const {favourite} = this.props.store.getState();

    const filterArray = favourite.filter((favmovie) => {
      return favmovie !== movie;
    })
    const {store} = this.props;
    store.dispatch(removeFavourite(filterArray));
  }
  onChangeTab(value) {
    const {store} = this.props;
    store.dispatch(showFavourite(value));
  }
  render() {
    const {list,favourite,showFavourite} = this.props.store.getState();
    const displayMovies = showFavourite ? favourite : list
    return (
      <div>
        <Navbar/>
        <div className='main'>
            <div className='tabs'>
              <div className={`tab ${showFavourite ? '' : "active-tabs"}`} onClick={() => this.onChangeTab(false)}>Movies</div>
              <div className={`tab ${showFavourite ? "active-tabs" : ""}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
            </div>

            <div className='list'>
              {displayMovies.map((movie,index) => {
                return (
                  <MovieCard 
                  movie={movie} key={index} 
                  dispatch={this.props.store.dispatch} 
                  isFavourite = {this.isMovieFavourite(movie)}
                  onUnfavouriteClick = {this.handleUnfavouriteClick}
                  />
                )
              })}
            </div>

            {displayMovies.length === 0 ? <div className='no-movies'>No movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

export default App;
