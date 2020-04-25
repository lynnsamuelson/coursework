import React, {useState, Fragment} from 'react';
import {TabView,TabPanel} from 'primereact/tabview';
import Favorite from '../data/Favorites.json';
import '../Styles/Favorites.css';
import {
  useWindowSize,
} from '@react-hook/window-size'
import {Dialog} from 'primereact/dialog';

function Favorites() {
  const [width] = useWindowSize()
  const [dialogText, setDialogText] = useState(""); 
  const [dialogLink, setDialogLink] = useState(""); 
  const [searchTerm, setSearchTerm] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const [visible, setVisible] = useState(false);
  const [detailsHeader, setDetailsHeader] = useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  const showDialog = fav =>{
    setDialogText(fav.desc);
    setDetailsHeader(fav.title);
    setDialogLink(fav.url);
    setVisible(true);
  }

  React.useEffect(() => {
    const results = Favorite.filter(fav =>
      fav.desc.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm]);

  const mnps = [].concat(Favorite).filter(fav => {
    return fav.tab === 'mnps';
  })

  return (
    <div className="favorites">
    <Dialog header={detailsHeader} visible={visible} style={{width: '50vw'}} modal={true} onHide={() => setVisible(false)}> 
      {dialogText}
      <div className="dialogLink">
        <a target="_blank" href={`${dialogLink}`} className="trim">{dialogLink}</a>
      </div>
    </Dialog>
    <input type="text" value={searchTerm} placeholder="search"
      onChange={handleChange}/>
    <TabView activeIndex={1} >
      <TabPanel header="mnps">
        <ul className="flex-container">
          <li>
            <div>Title</div>
            {width > 810 && <div>Description</div>}
            <div>Link</div>
          </li>
          {mnps.map(function(favorite, index) {
            return (
              <li key={favorite.id}>
                <div>{favorite.title}</div>
                {width > 810 && <div>{favorite.desc}</div>}
                <div>
                  <a target="_blank" href={`${favorite.url}`} className="trim">{favorite.url} 
                  </a>
                </div>
              </li>
            )
          })}
        </ul>
      </TabPanel>
      <TabPanel active header="Search Results">
      <ul className="flex-container">
            <li>
              <div>Title</div>
                {width > 810 && <div>Description</div>}
              <div>Link</div>
            </li>
            {searchResults.map(function(favorite, index) {
              return (
                <li key={favorite.id} onClick={(e) => showDialog(favorite)}>
                  <div>{favorite.title}</div>
                  {width > 810 && <div>{favorite.desc}</div>}
                  <div>
                    <a target="_blank" href={`${favorite.url}`} className="trim">{favorite.url} 
                  </a>
                  </div>
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
