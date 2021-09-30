import {useState} from "react";
import {useEffect} from "react";
import axios from 'axios';

const useAsync = (url, method) => {

    const [data, setData] = useState(data)
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
        axios[method]
            .then((res) => setData(res))
            .catch((err) => setError((err)))
            .finally(() => setIsLoading(false))
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {data, error, loading};

};