import React, { Suspense, lazy } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Loading from "./components/UI/Loading/Loading";
import Header from "./containers/Navigation/Header/Header";
import Footer from "./containers/Footer/Footer";
import Layout from "./components/Layout/Layout";
import MainContent from "./containers/MainContent/MainContent";
import { MovListProvider } from "./context/MovListContext";
import { ToastContainer } from "react-toastify";

const SignIn = lazy(() => import("./containers/UserAuth/SignIn/SignIn"));
const Register = lazy(() => import("./containers/UserAuth/Register/Register"));
const WatchList = lazy(() => import("./containers/Watchlist/WatchList"));
const SearchComponent = lazy(() =>
  import("./containers/SearchComponent/SearchComponent")
);
const FullMovie = lazy(() =>
  import("./containers/MovieComponents/FullMovie/FullMovie")
);

function App() {
  return (
    <AuthProvider>
      <MovListProvider>
        <Router>
          <div className="App">
            <Layout>
              <Route path="/" exact>
                <Header />
                <MainContent />
                <Footer />
              </Route>

              <Suspense fallback={<Loading />}>
                <Switch>
                  <Route path="/movies/:movieId">
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
                    <Footer />
                  </Route>
                </Switch>
              </Suspense>
            </Layout>
            <ToastContainer />
          </div>
        </Router>
      </MovListProvider>
    </AuthProvider>
  );
}

export default App;
