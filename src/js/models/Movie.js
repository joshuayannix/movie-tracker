import axios from 'axios';
import { key } from '../config';

// http://www.omdbapi.com/?i=tt3896198&apikey=a346feec

export default class Movie {
  constructor(id) {
    this.id = id;
  }

  async getMovie() {
    try {
      const res = await axios(`http://www.omdbapi.com/?i=${this.id}&apikey=${key}`);
      console.log(res);
      this.actors = res.data.Actors;
      this.awards = res.data.Awards;
      this.boxOffice = res.data.BoxOffice;
      this.country = res.data.Country;
      this.dvd = res.data.DVD;
      this.director = res.data.Director;
      this.genre = res.data.Genre;
      this.language = res.data.Language;
      this.metascore = this.data.Metascore;
      this.plot = this.data.Plot;
      this.poster = this.data.Poster;
      this.production = this.data.Production;
      this.rated = this.data.Rated;
      this.released = this.data.Released;
      this.runtime = this.data.Runtime;
      this.title = this.data.Title;
      this.type = this.data.Type;
      this.writer = this.data.Writer;
      this.year = this.data.Year;
      this.imdbRating = this.data.imdbRating;
      this.imdbVotes = this.data.imdbVotes;
    } catch (error) {
      console.log('The getMovie API call is erroring');
    }
  }

}