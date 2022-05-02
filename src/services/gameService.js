const baseUrl = 'http://localhost:3030/data'

export const getOne = (id) => fetch(`${baseUrl}/games/${id}`).then(res => res.json())

export const getLatest = () => fetch(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`).then(res => res.json())