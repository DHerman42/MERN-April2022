import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import { useState } from 'react';

import NavBar from './components/NavBar';
import ListPlayers from './components/ListPlayers';
import AddPlayer from './components/AddPlayer';
import PlayerStatus from './components/PlayerStatus';

import {Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [listPageActive, setListPageActive] = useState(true);
  const [playerStatusActive, setPlayerStatusActive] = useState(false);

  return (
    <div>
      <NavBar 
        playerStatusActive={playerStatusActive} 
        setPlayerStatusActive={setPlayerStatusActive}
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/players/list'/>}/>
          <Route 
            path='/players/list'
            element={
              <ListPlayers 
                listPageActive={listPageActive}
                setListPageActive={setListPageActive}
                setPlayerStatusActive={setPlayerStatusActive}
              />
            }
          />
          <Route 
            path='/players/addplayer'
            element={
              <AddPlayer 
                listPageActive={listPageActive}
                setListPageActive={setListPageActive}
                setPlayerStatusActive={setPlayerStatusActive}
              />
            }
          />
          <Route
            path='/status/game/:gameId'
            element={
              <PlayerStatus 
                setPlayerStatusActive={setPlayerStatusActive}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
