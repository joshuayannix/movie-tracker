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
      this.metascore = res.data.Metascore;
      this.plot = res.data.Plot;
      this.poster = res.data.Poster;
      this.production = res.data.Production;
      this.rated = res.data.Rated;
      this.released = res.data.Released;
      this.runtime = res.data.Runtime;
      this.title = res.data.Title;
      this.type = res.data.Type;
      this.writer = res.data.Writer;
      this.year = res.data.Year;
      this.imdbRating = res.data.imdbRating;
      this.imdbVotes = res.data.imdbVotes;
    } catch (error) {
      console.log('The getMovie API call is erroring');
    }
  }

}