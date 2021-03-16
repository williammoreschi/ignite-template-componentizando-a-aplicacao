import '../styles/header-content.scss';

interface IContentHeaderProps {
  selectedGenre:{
    id: number;
    title: string;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  }
}

export function ContentHeader({selectedGenre}:IContentHeaderProps){
  return(
    <header>
      {selectedGenre.id > 0 ?(
        <span className="category">Categoria: <span>{selectedGenre.title}</span></span>
      ):(<></>)}
    </header>
  )
}