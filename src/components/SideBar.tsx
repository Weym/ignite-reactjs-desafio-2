import { Button } from "./Button";

interface GenreProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

interface SidebarProps {
  genres: GenreProps[];
  onClickButton: (genreId: number) => void;
  featuredGenreId: number;
}

export function SideBar({
  genres,
  onClickButton,
  featuredGenreId,
}: SidebarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: GenreProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onClickButton(genre.id)}
            selected={featuredGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
