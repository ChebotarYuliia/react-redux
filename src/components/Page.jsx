import React from 'react';
import PropTypes from 'prop-types';

import './page.css';

export class Page extends React.Component {
  renderTemplate = () => {
    const { photos, isFetching, error } = this.props;

    if (isFetching) {
      return <p>Загрузка...</p>;
    } else if (error) {
      return <p>Во время загрузки фото произошла ошибка</p>;
    } else {
      return (
        <div>
          <p>У тебя {photos.length} фото.</p> <div>{photos}</div>
        </div>
      );
    }
  };

  onBtnClick = e => {
    e.preventDefault();
    const year = +e.target.innerText;
    this.props.getPhotos(year);
  };

  render() {
    const { year } = this.props;
    return (
      <div className="page">
        <div className="buttons">
          <button className="btn" onClick={this.onBtnClick}>
            2018
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2017
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2016
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2015
          </button>
          <button className="btn" onClick={this.onBtnClick}>
            2014
          </button>
        </div>
        <h3>{year} год</h3>
        <div>{this.renderTemplate()}</div>
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};
