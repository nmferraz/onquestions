import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Questions and Answers | Illustration" />
        <strong>Create Q&amp;A rooms on live</strong>
        <p>Make questions in real time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="OnQuestions" />
          <button className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Create your room with Google
          </button>
          <div className="separator">or enter in a room</div>
          <form>
            <input type="text" placeholder="Type the room code" />
            <Button type="submit">Enter in a room</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
