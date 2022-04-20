import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import '../styles/room.scss';

type RoomParams = {
  id: string;
};

export function Room() {
  const params = useParams<RoomParams>();

  const roomId = params.id;

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="OnQuestions Logo" />
          <RoomCode code={roomId} />
        </div>
      </header>
      <main>
        <div className="room-title">
          <h1>Room Name</h1>
          <span>4 questions</span>
        </div>

        <form>
          <textarea placeholder="What do you want to ask?" />
          <div className="form-footer">
            <span>
              If you want to ask something, please{' '}
              <button>make your login</button>.
            </span>
            <Button type="submit">Submit question</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
