import axios from 'axios';
import { key } from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const firstPage = await axios(`http://www.omdbapi.com/?s=${this.query}&apikey=${key}`);
      const secondPage = await axios(`http://www.omdbapi.com/?s=${this.query}&apikey=${key}&page=2`);
      const thirdPage = await axios(`http://www.omdbapi.com/?s=${this.query}&apikey=${key}&page=3`);

    
      this.firstArr = firstPage.data.Search
      this.secondArr = secondPage.data.Search
      this.thirdArr = thirdPage.data.Search

      this.result = this.firstArr.concat(this.secondArr).concat(this.thirdArr);
      console.log(this.result);

    } catch (error) {
      console.log(error);
    }
  }

}