import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmI2MzRlZWE3YzRhNDI1ZDBhYzBmMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Nzc5ODczOSwiZXhwIjoxNjg4MDU3OTM5fQ.lOnS_EFNfSnL9CYA7msQzTJif8saB9TgfpdfQS7DXWk";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
    
})
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
})