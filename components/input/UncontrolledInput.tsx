import { RefObject } from 'react';
import Field from '../field/Field';

/**
 * Input without a State
 */
export default function UncontrolledInput({
    id,
    type = 'text',
    name,
    required = false,
    placeholder = '',
    label = undefined,
    defaultValue = undefined,
    pattern = undefined,
    ref = undefined,
    ...rest
}: {
    id: string;
    type?: string;
    name: string;
    required?: boolean;
    placeholder?: string;
    label?: string;
    defaultValue?: string;
    pattern?: string;
    ref?: RefObject<HTMLInputElement>;
}): JSX.Element {
    return (
        <Field>
            <label htmlFor={id} className="field__label">
                {label}
            </label>
            <input
                id={id}
                type={type}
                name={name}
                pattern={pattern}
                defaultValue={defaultValue}
                required={required}
                className="field__input"
                placeholder={placeholder}
                ref={ref}
                {...rest}
            />
        </Field>
    );
}
