import { createContext, useContext, useReducer } from "preact/compat";
import type { ComponentChildren } from "preact";

interface ContextType<S, A> {
  state: S;
  dispatch: (action: A) => void;
}

const withContext = <S, A>(
  reducerFunc: (state: S, action: A) => S,
  initialState: S,
) => {
  const Context = createContext<ContextType<S, A> | undefined>(undefined);

  const Provider = ({ children }: { children: ComponentChildren }) => {
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    );
  };

  const useCreatedContext = () => {
    const context = useContext(Context);
    if (!context) {
      throw new Error("useCreatedContext must be used within its Provider");
    }
    return context;
  };

  return {Provider, useCreatedContext} as const;
};

export {withContext}