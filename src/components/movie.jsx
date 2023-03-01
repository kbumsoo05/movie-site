import PropTypes from 'prop-types'

const Movie = ({ id, image, title, year, summary, genres }) => {
  return (
    <div key={id}>
      <img src={image} />
      <h2>{title}</h2>
      <span>{year}</span>
      <p>{summary}</p>
      <ul>
        {genres.map((genres) => <li key={genres}>{genres}</li>)}
      </ul>
      <hr />
    </div>
  )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}
export default Movie;