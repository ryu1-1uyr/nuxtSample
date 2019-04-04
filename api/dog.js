import axios from 'axios'

class DogApi {
  constructor() {
    this.apiBase = 'https://dog.ceo/api';
  }

  breeds() {
    return axios.get(`${this.apiBase}/breeds/list/all`)
      .then(json => {
        return json.data.message;
      })
      .catch(e => ({ error: e }));
  }

  dogs( breed ) {
    return axios.get(`${this.apiBase}/breed/${breed}/images`)
      .then(json => {
        return json.data.message.map( (d) => {
          return {
            url: d,  // 画像URL
            like: 0, // 「いいね！」の件数
          };
        });
      })
      .catch(e => ({ error: e }));
  }
  //今までみたいに1つのおっきいデータを叩くんじゃなくて、必要な箇所箇所をaxios.getで取ってくる書き方ができる
  //["hoge"]["huga"][0]みたいな感じで深くまで自前でアクセスしないでもいいんやで…
}

const dogApi = new DogApi();

export default dogApi;
