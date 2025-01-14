import React from "react";

class SearchBar extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            search : ''
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        const searchValue = event.target.value;

        this.setState(() => {
           
            return {
                search : searchValue
            };
        })

        this.props.onChange(searchValue);
    }


    render() {
        return(
            <>
                <input className="note-header__search-bar" placeholder="Cari catatan kamu..." value={this.state.search} onChange={this.onChangeHandler}/>
            </>
        )
    }
}

export default SearchBar;

