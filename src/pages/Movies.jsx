import React from 'react';

function Movies() {
  return (
    <div>
      <h1>My Favorite Movies</h1>
      <div className="movie-card">
        <h2>Inception</h2>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/YoHD9XEInc0" title="Inception Trailer"></iframe>
      </div>
      <div className="movie-card">
        <h2>Interstellar</h2>
        <iframe width="300" height="200" src="https://www.youtube.com/embed/zSWdZVtXT7E" title="Interstellar Trailer"></iframe>
      </div>
    </div>
  );
}

export default Movies;
