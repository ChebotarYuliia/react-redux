import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { Page } from '../components/Page';
import { getPhotos } from '../actions/PageActions';
import { handlerLogin } from '../actions/UserAction';

import './App.css';

class App extends Component {
  render() {
    const { user, page, getPhotosAction, logInAction } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <div className="information-row">
          <Page
            photos={page.photos}
            year={page.year}
            getPhotos={getPhotosAction}
            isFetching={page.isFetching}
            error={page.error}
          />
          <User
            name={user.name}
            isFetching={user.isFetching}
            error={user.error}
            handleLogin={logInAction}
          />
        </div>
      </div>
    );
  }
}

// приклеиваем данные из store
const mapStateToProps = store => {
  return {
    user: store.user,
    page: store.page,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotosAction: year => dispatch(getPhotos(year)),
    logInAction: () => dispatch(handlerLogin()),
  };
};

// в наш компонент App, с помощью connect(mapStateToProps)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
