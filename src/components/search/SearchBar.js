import React, { useRef } from "react"

export const SearchBar = ({ setTerms }) => {

    const { terms } = useRef()

    return (
        <fieldset>
            <div className="form-group">
                <input onKeyUp={ e => setTerms(e.target.value) }
                    type="text"
                    id="searchTerms"
                    ref={terms}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Search Animals"
                />
            </div>
        </fieldset>
    )
}