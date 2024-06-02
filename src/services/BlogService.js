import axios from "axios";

const Server = 'http://localhost:9000'

export const index = () => {
    return axios.get(`${Server}/blogs`)
}

export const show = (id) => {
    return axios.get(`${Server}/blogs/${id}`)
}

export const store = (blog) => {
    return axios.post(`${Server}/blogs`, blog)
}

export const update = (blog, id) => {
    return axios.put(`${Server}/blogs/${id}`, blog)
}

export const destroy = (id) => {
    return axios.delete(`${Server}/blogs/${id}`)
}