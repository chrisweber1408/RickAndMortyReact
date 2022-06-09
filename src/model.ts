export interface PageData{
    results: Array<Character>
}

export interface Character {
    name: string;
    image: string;
    status: string;
    species: string;
    gender: string;
}