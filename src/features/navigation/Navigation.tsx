import Button from '../../common/generic/Button';
import { Link } from 'react-router-dom';

const Navigation = (): JSX.Element => {
  return (
    <div className="flex items-center justify-between px-5">
      <nav className="basis-19">
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Button>products</Button>
        <Button>profile</Button>
      </nav>
      <h1 className="grow text-center text-xl font-bold">PAUL & ELISA</h1>
      <nav className="basis-19">
        <Link to="/favorites">
          <Button>favs&lt;3</Button>
        </Link>
        <Button>eur</Button>
        <Button>FR</Button>
        <Button>panier</Button>
      </nav>
    </div>
  );
};

export default Navigation;
