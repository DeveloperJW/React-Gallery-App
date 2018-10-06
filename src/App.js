import React, {Component} from 'react';

//Components
import PictureList from "./Components/PictureList";
import SearchBar from "./Components/Search_bar";
import MainNav from './Components/MainNav';
import apiKey from './.config';

class App extends Component {
    state = {
        pictures: [],
        searchTerm: '',
        loading: true,
    };

    componentDidMount() {
        const {name} = this.props.match.params;
        this.performSearch(name);
    }

    //used es6 arrow function to avoid using .bind(this)
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

    handleSearch = (path) => {
        this.props.history.push(path);
    };


    render() {
        const {loading, pictures, searchTerm} = this.state;//ES6 Destructuring to make code more concise
        return (
            <div className="container">
                <SearchBar onSearch={this.performSearch} handleSearch={this.handleSearch}/>
                <MainNav handleClick={this.performSearch}/>
                {loading
                    ? <p>Loading</p>
                    : <PictureList
                        photo={pictures} //since the usage of Destructuring, this.state can be omitted
                        searchTerm={searchTerm}
                    />
                }
            </div>
        );
    }
}

export default App;
