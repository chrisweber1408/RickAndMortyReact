
import GalleryItem from './GalleryItem';
import './Gallery.css';
import {useEffect, useState} from "react";
import {Character, PageData} from "../model";

export default function Gallery() {

    const [searchname, setSearchname] = useState("");
    const [searchstatus, setStatus] = useState("")
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState<Array<Character>>([])

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character/?page=" + page)
            .then(response => response.json())
            .then((page: PageData) => setCharacters(page.results))
    }, [])

    const components = characters
        .filter(c => c.name.toLowerCase().includes(searchname.toLowerCase()) && c.status.toLowerCase().includes(searchstatus.toLowerCase()))
        .map(c => <GalleryItem character={{name: c.name, image: c.image, status: c.status, species: c.species, gender: c.gender}} />)

    return (
        <div>
            <button className="buttons" onClick={event => setPage( + 1)}>Prev Page</button>
            <label htmlFor="searchname">Search Name</label> <input id="searchname" type="text" value={searchname} onChange={event => setSearchname(event.target.value)} />
            <select className="status" id="Status" onChange={event =>setStatus(event.target.value)}>
                <option selected value="">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <button className="buttons" onClick={event => setPage( - 1)}>Next Page</button>
            <br/>
            <br/>
            <div className="gallery">
                {components}
            </div>
        </div>
    )
}