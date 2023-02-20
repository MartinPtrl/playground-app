import React from "react";

interface ICountContextProps {
  count: number;
  setCount: (count: number) => void;
}

export const CountContext = React.createContext<ICountContextProps>({
  count: 0,
  setCount: () => {},
});

export function CountProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [count, setCount] = React.useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

export function useCount(): ICountContextProps {
  return React.useContext(CountContext);
}
