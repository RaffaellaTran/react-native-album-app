import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
state = { albums: [] } ;//initial empty state array
  //for loading data on the app
  componentWillMount() {
  //  debugger;
        //for show data inside
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />);
    //album is an array map viene chiamato
    //n volte nella mappa
    //key deve essere unico ed è lostesso valore che viene usato
    //viene usato negli array su React
  }
  //con component dobbiamo mettere render method
  render() {
    console.log(this.state);
    return (//scrollview to scroll based where I want
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>

      );
  }
}
export default AlbumList;
