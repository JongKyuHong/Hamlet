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
        headers: { ...headers, Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsZWVAbmF2ZXIuY29tIiwibmlja25hbWUiOiJsZWVlIiwiaXNzIjoiaGFtbGV0LmNvbSIsImV4cCI6MTY1NDIyMzQyNCwidXNlcmlkIjo1LCJpYXQiOjE2NTI5Mjc0MjR9.v92wblg-sgLYEBHlWExgY7JC7oRnfSIvmryLvFEDp2zsnwSGex41g8xl46Rnlc9oiLj0lIq1BI33Gz3A0O9pcQ` },
        data
    }).then((res) => {
        return res;
    }).catch((err) => {
        throw new Error(err);
    })
}