import type { NextPage } from 'next';
import { useRef } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home: NextPage = () => {
    const [messages, setMessages] = useLocalStorage<{ message: string; id: number }[]>('chat-app-test', []);
    const formRef = useRef<HTMLFormElement>(null);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            ['user-message']: { value: string };
        };
        const newMessage = target['user-message'].value;
        setMessages((prev) => [...prev, { message: newMessage, id: new Date().getTime() }]);
        formRef.current?.reset();
    }
    return (
        <>
            <h1>Chat app</h1>
            <div className="chat">
                <ul>
                    {messages.map(({ id, message }) => (
                        <li key={id}>{message}</li>
                    ))}
                </ul>
            </div>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input name="user-message"></input>
                <button>Send</button>
            </form>
            <button onClick={() => setMessages([])}>Clear</button>
        </>
    );
};

export default Home;
