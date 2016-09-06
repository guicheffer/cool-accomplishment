import axios from 'axios'

export default function get(queryParam) {
  return axios({
    method: 'get',
    url: 'http://spotippos.vivareal.com/properties' + queryParam,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
