import fetch from 'node-fetch';

const root = 'https://rickandmortyapi.com/api'

export async function fetchData () {
    const object = await fetch(`${root}/characters`);
    const characters = await object.json();
    return characters;
};

