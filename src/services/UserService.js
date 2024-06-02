import axios from "axios";

const Server = 'http://localhost:9000'

export const index = () => {
    return axios.get(`${Server}/users`)
}

export const show = (id) => {
    return axios.get(`${Server}/users/${id}`)
}

export const store = (user) => {
    return axios.post(`${Server}/users`, user)
}

export const update = (user, id) => {
    return axios.put(`${Server}/users/${id}`, user)
}

export const destroy = (id) => {
    return axios.delete(`${Server}/users/${id}`)
}