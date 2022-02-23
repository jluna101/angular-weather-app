import React from "react";

export default function SearchForm(){
    return(
        <form className="form-horizontal">
            <input placeholder="Search" type="text" name="searchString" required />
            <button type="submit">Submit</button>
        </form>
    );
}