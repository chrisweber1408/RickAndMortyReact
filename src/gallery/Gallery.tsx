
import GalleryItem from './GalleryItem';
import './Gallery.css';
import {useEffect, useState} from "react";
import {Character, PageData} from "../model";
import axios from "axios";

export default function Gallery() {

    const [searchname, setSearchname] = useState("");
    const [searchstatus, setStatus] = useState("")
    const [page, setPage] = useState(1)
    const [characters, setCharacters] = useState<Array<Character>>([])

    const [errorMassage, setErrorMassage] = useState("")


    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => response.data)
            .then((page: PageData) => setCharacters(page.results))
            .catch(e => setErrorMassage("Die Charaktere wurden nicht gefunden!"))
    }, [])

    useEffect(()=>{
        setTimeout(() => setErrorMassage(""),5000)
    },[errorMassage])
/*
    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/characte")
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                throw new Error();
            })
            .then((page: PageData) => setCharacters(page.results))
            .catch(e => setErrorMassage("Error"))
    }, [])
 */

    const components = characters
        .filter(c => c.name.toLowerCase().includes(searchname.toLowerCase())
             && c.status.toLowerCase().includes(searchstatus.toLowerCase()))
        .map(c => <GalleryItem character={{name: c.name, image: c.image, status: c.status, species: c.species, gender: c.gender}} />)

    return (
        <div>
            {errorMassage && <div>{errorMassage}</div>}
            <label htmlFor="searchname">Search Name</label> <input id="searchname" type="text" value={searchname} onChange={event => setSearchname(event.target.value)} />
            <select className="status" id="Status" onChange={event =>setStatus(event.target.value)}>
                <option selected value="">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <br/>
            <br/>
            <div className="gallery">
                {components}
            </div>
        </div>
    )
}