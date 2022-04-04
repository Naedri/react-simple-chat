export default function Message({ text }: { text: string }): JSX.Element {
    return <div className="message">{text} </div>;
}
