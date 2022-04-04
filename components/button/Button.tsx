export default function Button({
    disabled = false,
    onClick = () => {},
    defaultValue = undefined,
    children,
    type = 'button',
}: {
    disabled?: boolean;
    onClick?: (e?: any) => void;
    defaultValue?: string;
    children: any;
    type?: 'submit' | 'reset' | 'button';
}): JSX.Element {
    return (
        <button defaultValue={defaultValue} className="button" disabled={disabled} onClick={onClick} type={type}>
            {children}
        </button>
    );
}
