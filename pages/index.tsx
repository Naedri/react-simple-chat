import type { NextPage } from 'next';
import { HtmlHTMLAttributes, useReducer, useRef, useState } from 'react';
import Button from '../components/button/Button';
import Form from '../components/form/Form';
import UncontrolledInput from '../components/input/UncontrolledInput';
import MessageList from '../components/message/MessageList';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Home: NextPage = () => {
    const [messages, setMessages] = useLocalStorage<{ id: number; content: string }[]>('chat-app-test', []);
    const inputRef = useRef<HTMLInputElement>(null);
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        //retrieve data from form
        const target = e.target as typeof e.target & {
            ['user-message']: { value: string };
        };
        const newMessage = target['user-message'].value;
        //setMessages states
        setMessages((prev) => [...prev, { id: new Date().getTime(), content: newMessage }]);
        // resets the input value
        if (inputRef?.current?.value) {
            inputRef.current.value = '';
        }
    }

    return (
        <>
            <h1>Chat app</h1>
            <MessageList messages={messages}></MessageList>
            <Form onSubmit={handleSubmit}>
                <UncontrolledInput
                    id="user-message"
                    name="user-message"
                    required
                    placeholder="Write your message"
                    ref={inputRef}
                ></UncontrolledInput>
                <Button type="submit">Send</Button>
            </Form>
            <button onClick={() => setMessages([])}>Clear</button>
        </>
    );
};

export default Home;
