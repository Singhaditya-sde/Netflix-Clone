import React from 'react';

const MovieCard = ({ movie }) => {
  // OMDb returns "N/A" for movies without a poster. We'll handle that.
  const poster = movie.Poster === "N/A" 
    ? "https://via.placeholder.com/400x600?text=No+Image" // A placeholder image
    : movie.Poster;

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
      <img src="https://m.media-amazon.com/images/M/MV5BN2MyZGVhNmMtY2JkNy00ZmIzLTkwOGItY2NiM2MyOGMxODkzXkEyXkFqcGc@._V1_SX300.jpg" alt={`${movie.Title} Poster`} className="w-full h-96 object-cover" />
      <div className="p-4 text-white">
        <h3 className="text-lg font-bold truncate">{movie.Title}</h3>
        <p className="text-gray-400">{movie.Year}</p>
      </div>
    </div>
  );
};

export default MovieCard;