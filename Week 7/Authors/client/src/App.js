import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AllAuthors from './components/AllAuthors';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';

import {Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Container>
      <h1>Favorite Authors</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllAuthors/>}/>
          <Route path='/new' element={<AuthorForm/>}/>
          <Route path='/edit/:id' element={<EditAuthor/>}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
