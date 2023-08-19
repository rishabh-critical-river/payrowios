import React from 'react';

type State<S> = S;

const useInputs = <S extends any>(defaultState: State<S>) => {
  const [state, setState] = React.useState(defaultState);
  const onChangeState = React.useCallback(
    (key: keyof S, value: any) => {
      // @ts-ignore
      setState({ ...state, [key]: value });
    },
    [state]
  );
  return [state, onChangeState] as const;
};

export default useInputs;
