import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

//Components
import PictureList from "./Components/PictureList";
import SearchBar from "./Components/Search_bar";
import MainNav from './Components/MainNav';
import apiKey from './.config';

class App extends Component {
    constructor() {
        super();
        this.state = {
            pictures: [],
            searchTerm: '',
            loading: true,
        };
    }

    componentDidMount() {
        this.performSearch();
    }

    performSearch = (query = 'sunsets') => {
        fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    pictures: responseData.photos.photo,
                    searchTerm: query,
                    loading: false
                });
            })
            .catch(error => {
                console.log('Error fetching and parsing data', error);
            });
    };


    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <SearchBar onSearch={this.performSearch}/>
                    <MainNav handleClick={this.performSearch}/>
                    {
                        (this.state.loading)
                            ? <p>Loading</p>
                            : <PictureList
                                photo={this.state.pictures}
                                searchTerm={this.state.searchTerm}
                            />
                    }
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
