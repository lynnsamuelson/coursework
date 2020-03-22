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
        <TabPanel header="Math">
          <ul className="flex-container">
            <li>
              <p>Title</p>
              <p>Link</p>
            </li>
            {FavoriteThings[2].math.map(function(favorite, index) {
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
        <TabPanel header="ELA">
          <ul className="flex-container">
            <li>
              <p>Title</p>
              <p>Link</p>
            </li>
            {FavoriteThings[3].ela.map(function(favorite, index) {
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
        <TabPanel header="Science">
          <ul className="flex-container">
            <li>
              <p>Title</p>
              <p>Link</p>
            </li>
            {FavoriteThings[4].science.map(function(favorite, index) {
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
        <TabPanel header="Explore">
          <ul className="flex-container">
            <li>
              <p>Title</p>
              <p>Link</p>
            </li>
            {FavoriteThings[5].explore.map(function(favorite, index) {
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
        <TabPanel header="other">
          <ul className="flex-container">
            <li>
              <p>Title</p>
              <p>Link</p>
            </li>
            {FavoriteThings[6].other.map(function(favorite, index) {
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
