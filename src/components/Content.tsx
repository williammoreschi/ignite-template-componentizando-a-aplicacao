import { ContentHeader } from './ContentHeader';
import { MovieCard } from './MovieCard';

import '../styles/content.scss';

export interface IMovieProps {
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

interface IContentProps {
  movies: Array<IMovieProps>;
  selectedGenre: {
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  };
}

export function Content({selectedGenre,movies}:IContentProps) {
  return(
    <div className="container">
        <ContentHeader selectedGenre={selectedGenre} />
        <main>
          <div className="movies-list">
            {movies.length ? (
              <>
              {movies.map(movie => (
                <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
              </>
            ):(<></>)}
          </div>
        </main>
    </div>
  )
}