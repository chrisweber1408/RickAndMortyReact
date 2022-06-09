import characters from '../characters.json';
import GalleryItem from './GalleryItem';
import './Gallery.css';
import {useState} from "react";

export default function Gallery() {

    const [searchname, setSearchname] = useState("");
    const [searchstatus, setStatus] = useState("")

    const components = characters
        .filter(c => c.name.toLowerCase().includes(searchname.toLowerCase()) && c.status.toLowerCase().includes(searchstatus.toLowerCase()))
        .map(c => <GalleryItem character={{name: c.name, image: c.image, status: c.status, species: c.species, gender: c.gender}} />)

    return (
        <div>
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