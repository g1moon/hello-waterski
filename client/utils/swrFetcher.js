import axios from 'axios';

const swrFetcher = () => {
    axios
        .get(url, {widthCredentials: true})
        .then((res) => res.data);
};

export default swrFetcher;