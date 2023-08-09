import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import keyValidation from '@/lib/num-characters';
type Params = {
    tid: string;

};
const useCreatePin = () => {
    const [state, setState] = React.useState({

        code: '',
        decode: {
            key: 'J/PYjc1ftDFK5+77U1PB80v2TamokGap5yCIP2YI6tQ=',
            iv: 'gaOr3uvhZEwFeSbRHwlHcg==',
            AES: 'AES/CBC/NoPADDING',
            ALG: 'AES/CBC/PKCS5PADDING',
        },
    })

    const params = useLocalSearchParams<Params>();
    type Key = keyof typeof state;
    const onChangeState = React.useCallback(
        (key: Key, value: string) => {
            setState((prev) => ({
                ...prev,
                [key]: value,
            }));
        },
        [state]
    );

    const onConfirmPin = React.useCallback(async () => {
        if (state.decode) {
            const plaintext = JSON.stringify({

                tid: params.tid,
                pin: state.code,
                status: "create-pin",
                keyValidation: keyValidation(5),
            });

        }
    }, [state]);
    return {
        onChangeState
    }
}
export default useCreatePin;

