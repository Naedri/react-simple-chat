export default function MessageList({ messages }: { messages: { id: number; content: string }[] }): JSX.Element {
    return (
        <div className="message-list">
            <ul>
                {messages.map(({ id, content }) => (
                    <li key={id}>{content}</li>
                ))}
            </ul>
        </div>
    );
}
