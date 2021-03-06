import React, { Component } from 'react';
import { Link } from 'react-router';

export default class extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount () {   
    if (this.props.selectedArtist.name === undefined ) this.props.getAlbums(); //uncaught error but this works
  }

  render() {

    const albums = this.props.albums;

    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {
          albums.map(album => (
            <div className="col-xs-4" key={ album.id }>
              <Link className="thumbnail" to={`/albums/${album.id}`}>
                <img src={ album.imageUrl } />
                <div className="caption">
                  <h5>
                    <span>{ album.name }</span>
                  </h5>
                  <small>{ album.songs.length } songs</small>
                </div>
              </Link>
            </div>
          ))
        }
        </div>
      </div>
    );
  }
}