import { CSSProperties, LegacyRef } from 'react';

/**
 * Personalized Form element to easier its utilization
 * @param children of this component
 * @param onSubmit action on click
 * @param ref
 * @param style
 * @constructor
 */
export default function Form({
    children,
    onSubmit,
    ref = undefined,
    style = undefined,
}: {
    children: any;
    onSubmit?: (e?: any) => void;
    ref?: LegacyRef<HTMLFormElement>;
    style?: CSSProperties;
}): JSX.Element {
    return (
        <form className="form" onSubmit={onSubmit} ref={ref} style={style}>
            {children}
        </form>
    );
}
