import { createContext, Dispatch, HTMLAttributes, useState } from "react";

export interface IAppContext {
  /**
   * Update app context
   */
  update: Dispatch<Partial<IAppContext>>;

  /**
   * Chat loading indicator
   */
  isLoading: boolean;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);

export const AppProvider = (props: HTMLAttributes<HTMLDivElement>) => {
  const [appContext, setAppContext] = useState<IAppContext>({
    update: (payload: Partial<IAppContext>) => {
      setAppContext((prevState) => ({ ...prevState, ...payload }));
    },
    isLoading: false,
  });

  return (
    <AppContext.Provider value={appContext}>
      {props.children}
    </AppContext.Provider>
  );
};
