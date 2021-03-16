import { Button } from "./Button";

import '../styles/sidebar.scss';
export interface IGenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ISideBarProps {
  genres: Array<IGenreResponseProps>;
  selectedGenreId: number;
  handleClickButton:(id:number) => void;
}

export function SideBar({genres, selectedGenreId,handleClickButton}:ISideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
      {genres.length ? (
        <>
        {genres.map(genre=>(
          <Button
          id={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
          />
        ))}
        </>
      ):(<></>)}
      </div>
    </nav>
  );
}