import { Link } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import '../styles/auth.scss';
import { Button } from '../components/Button';

export function NewRoom() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Questions and Answers | Illustration" />
        <strong>Create Q&amp;A rooms on live</strong>
        <p>Make questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <h2>Create a new Room</h2>
          <form>
            <input type="text" placeholder="Room Name" />
            <Button type="submit">Create Room</Button>
          </form>
          <p>
            Do you want to enter an existing room?{' '}
            <Link to="/">Click here</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
