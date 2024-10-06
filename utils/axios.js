import axios from 'axios';

export const LEMON_SQUEEZY_ENDPOINT = "https://api.lemonSqueezy.com/v1/checkout";
export const LemonSqueezyApiInstance = axios.create({
    baseURL: LEMON_SQUEEZY_ENDPOINT,
    headers: {
        Accept: 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        Authorization: `Bearer ${process.env.LEMON_SQUEEZY_API_KEY}`,
    },
});    