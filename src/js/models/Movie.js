import axios from 'axios';
import { key } from '../config';

// http://www.omdbapi.com/?i=tt3896198&apikey=a346feec

export default class MOvie {
  constructor(id) {
    this.id = id;
  }

  async getMovie() {
    try {
      const res = await axios(`http://www.omdbapi.com/?i=${this.id}&apikey=${key}`);
      console.log(res);
      this.actors = res.data.Actors;
      this.awards = res.data.Awards;
      this.director = res.data.Director;
      this.metascore = this.data.Metascore;
      this.plot = this.data.Plot;
      this.poster = this.data.Poster;
      this.production = this.data.production;
      this.rated = this.data.Rated;
      this.released = this.data.Released;
      this.runtime = this.data.Runtime;
      this.title = this.data.Title;
      this.year = this.data.Year;
      this.imdbRating = this.data.imdbRating;
      this.imdbVoties = this.data.imdbVotes;

    } catch (error) {
      console.log('The getMovie API call is erroring');
    }
  }

}