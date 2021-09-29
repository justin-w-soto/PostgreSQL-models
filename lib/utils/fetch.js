import fetch from 'node-fetch';

const root = 'https://rickandmortyapi.com/api'

export async function fetchData () {
    const object = await fetch(`${root}/character`);
    const character = await object.json();
    return character;
};

