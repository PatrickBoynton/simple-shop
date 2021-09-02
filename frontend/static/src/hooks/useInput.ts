import { useState } from 'react';

export const useInput = (initialValue: string | number) => {
    const [value, setValue] = useState(initialValue);

    const handleInput = (event: any) => {
        setValue(event.target.value);
    };

    return {
        value,
        onChange: handleInput,
    }
}