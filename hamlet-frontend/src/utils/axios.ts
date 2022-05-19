import axios, { Method } from "axios";

interface AxiosProps {
    method: Method;
    url: string;
    headers: any;
    data: any;
}

const BASE_URL = " http://k6a206.p.ssafy.io:8080";
const ACCESS_TOKEN = "jwt";

export const requestWithOutAccessToken = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers,
        data
    }).then((res) => {
        return res;
    }).catch((err) => {
        throw new Error(err);
    })
}

export const requestWithAccessToken = ({ method, url, headers, data }: AxiosProps) => {
    return axios({
        method,
        url: BASE_URL + url,
        headers: { ...headers, Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0ZXN0MkBuYXZlci5jb20iLCJuaWNrbmFtZSI6InRlc3QyIiwiaXNzIjoiaGFtbGV0LmNvbSIsImV4cCI6MTY1NDI1MzU1MywidXNlcmlkIjoyNywiaWF0IjoxNjUyOTU3NTUzfQ.NfwKv3O3fb1wrsrEO-g7dTGLtotcJoOz5jrk4kSYzuLLdCxQ7pXmSOtFqpMtYzNSCDljr0mIBlTzDQ1fuedzzg` },
        data
    }).then((res) => {
        return res;
    }).catch((err) => {
        throw new Error(err);
    })
}