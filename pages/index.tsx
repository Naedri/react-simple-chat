import type { NextPage } from 'next';
import { useRef, useState } from 'react';
import Button from '../components/button/Button';
import Form from '../components/form/Form';
import UncontrolledInput from '../components/input/UncontrolledInput';
import MessageList from '../components/message/MessageList';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home: NextPage = () => {
    const [messages, setMessages] = useLocalStorage<{ id: number; content: string }[]>('chat-app-test', []);
    const formRef = useRef<HTMLFormElement>(null);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            ['user-message']: { value: string };
        };
        const newMessage = target['user-message'].value;
        setMessages((prev) => [...prev, { id: new Date().getTime(), content: newMessage }]);
        formRef.current?.reset();
    }
    return (
        <>
            <h1>Chat app</h1>
            <MessageList messages={messages}></MessageList>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <UncontrolledInput
                    id="user-message"
                    name="user-message"
                    required
                    placeholder="Write your message"
                ></UncontrolledInput>
                <Button type="submit">Send</Button>
            </Form>
            <button onClick={() => setMessages([])}>Clear</button>
        </>
    );
};

export default Home;
