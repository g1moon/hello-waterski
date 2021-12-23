// import axios from 'axios'
//
// //baseURl을 잡아줘서 앞에 생략 할 수 있게 해줌
// /*
// get          : axios.get(url, [,config])
// delete       : axios.delete(url, [,config])
// post(create) : axios.post(url, data[,config])
// put(update) : axios.put(url, data[,config])
// */
// // axios.defaults.baseURL = 'http://localhost:8000'
//
// //파라미터의 개수가 다름 각 메서드마다 -> 그러므로 나머지는 ...rest로 받아줌.
import axios from 'axios'

const fetcher = async (method, url, ...rest) => {
    axios.defaults.baseURL = 'http://localhost:8000';
    try {
        const res = await axios[method](url, ...rest);
        return res.data;
    } catch (err){
        return err.response;
    }
};

export default fetcher;

