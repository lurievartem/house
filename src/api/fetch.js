import fetch from 'isomorphic-fetch';
import { api } from '../../config/server';

function getToken(){
    return localStorage.getItem('id_token') || null;
}

export default ({ path = '', data = {}, ajaxData = {} }) => fetch(api.url + path,
    {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            Autorization: getToken()
        },
        body: JSON.stringify(data),
        ...ajaxData
    })
    .then(response => response.json());
