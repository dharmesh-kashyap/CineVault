function MovieCard({ movie }) {
    const placeholderImage = "https://via.placeholder.com/250"; // Default placeholder image
  
    return (
      <div className="movie-card">
        <img
          src={placeholderImage} // Always use the placeholder image
          alt={movie.movie || "Movie Poster"}
        />
        <h3>{movie.movie || "No Title Available"}</h3>
        <p><strong>Rating:</strong> {movie.rating || "N/A"}</p>
        <p>
          <strong>IMDb:</strong>{" "}
          <a href={movie.imdb_url} target="_blank" rel="noopener noreferrer">
            IMDb Link
          </a>
        </p>
      </div>
    );
  }
  
  export default MovieCard;
  