import React, {useState} from 'react';
import {TabView,TabPanel} from 'primereact/tabview';
import FavoriteThings from '../Favorites.json';
import '../Styles/Favorites.css';

function Favorites() {
console.log("favorite books", FavoriteThings)
 
  return (
    <div className="favorites">
      <TabView>
        <TabPanel header="Websites">
          <ul className="flex-container">
            <li>
              <p>Title</p>
              <p>Link</p>
            </li>
            {FavoriteThings[0].websites.map(function(favorite, index) {
              return (
                <li key={favorite.id}>
                  <p>{favorite.title}</p>
                  <a target="_blank" href={`${favorite.url}`} className="trim">{favorite.url} 
                  </a>
                </li>
              )
            })}
          </ul>
        </TabPanel>
        <TabPanel header="podcasts">
          <ul className="flex-container">
            <li>
              <p>Title</p>
              <p>Link</p>
            </li>
            {FavoriteThings[1].podcasts.map(function(favorite, index) {
              return (
                <li key={favorite.id}>
                  <p>{favorite.title}</p>
                  <a target="_blank" href={`${favorite.url}`} className="trim">{favorite.url} 
                  </a>
                </li>
              )
            })}
          </ul>
        </TabPanel>
        
        
      </TabView>
    </div>
  );
}

export default Favorites;
