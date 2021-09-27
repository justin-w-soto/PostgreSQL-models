import fetch from 'node-fetch';

export async function fetchData(){
    const object = await fetch('https://rickandmortyapi.com/api/character');
    const data = await object.json();
    return data;
}

