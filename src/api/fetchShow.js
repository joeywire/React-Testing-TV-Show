import axios from 'axios'; 

const fetchShow = (url) => {
    return axios 
        .get(url)
        .then(res => {
            return res; 
        })
        .catch(err => alert(err));
};

export default fetchShow; 