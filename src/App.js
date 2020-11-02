import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import WatchList from './containers/Watchlist/WatchList';
import Header from './containers/Navigation/Header/Header';
import Footer from './containers/Footer/Footer'
import Layout from './components/Layout/Layout';
import MainContent from './containers/MainContent/MainContent'
import SignIn from './containers/UserAuth/SignIn/SignIn'
import Register from './containers/UserAuth/Register/Register'
import { MovListProvider } from './context/MovListContext';
import FullMovie from './containers/MovieComponents/FullMovie/FullMovie';
import { ToastContainer } from 'react-toastify';
import SearchComponent from './containers/SearchComponent/SearchComponent';


function App() {



  return (
    <AuthProvider>
      <MovListProvider>


        <Router>
          <div className="App">
            <Layout>
              <Route path='/' exact>
                <Header />
                <MainContent />
                <Footer/>
              </Route >
              <Switch>
                <Route path="/movies/:movieId" >
                  <Header />
                  <FullMovie />
                </Route>
                <Route path="/signin" component={SignIn} />
                <Route path="/register" component={Register} />
                <Route path="/my-watchlist">
                  <Header />
                  <WatchList />
                </Route>
                <Route path="/search">
                  <Header />
                  <SearchComponent />
                </Route>
              </Switch>
            </Layout>
            <ToastContainer />
          </div>
        </Router>
      </MovListProvider>
    </AuthProvider>


  );
}

export default App;
