import GalleryItem from "./GalleryItem";
import {render, screen} from "@testing-library/react";

test("that character ist rendered correctly", ()=>{
    //given
    const character = {
        name: "Rick Sanchez",
        image: "werweiß",
        status: "Alive",
        gender: "Male",
        species:"Human"
    }
    //when
    render(<GalleryItem character={character}/>)
    //then
    expect(screen.getByTestId("name-div").textContent).toEqual("Name: Rick Sanchez")
    expect(screen.getByTestId("status-div").textContent).toEqual("Status: Alive")
    expect(screen.getByTestId("gender-div").textContent).toEqual("Gender: Male")
    expect(screen.getByTestId("species-div").textContent).toEqual("Species: Human")
})