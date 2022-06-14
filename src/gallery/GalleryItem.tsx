import { Character } from "../model"
import './GalleryItem.css';

interface GalleryItemProps {
    character: Character
}

export default function GalleryItem(props: GalleryItemProps) {
    return (
        <div className="gallery-item">
            <div className="image-wrapper">
                <img src={props.character.image} />
            </div>
            <div className="character-information">
                <div data-TestId={"name-div"} >
                    <span className="label">Name:</span> {props.character.name}
                </div>
                <div data-TestId={"status-div"} >
                    <span className="label">Status:</span> {props.character.status}
                </div>
                <div data-TestId={"species-div"} >
                    <span className="label">Species:</span> {props.character.species}
                </div>
                <div data-TestId={"gender-div"} >
                    <span className="label">Gender:</span> {props.character.gender}
                </div>
            </div>
        </div>
    )
}