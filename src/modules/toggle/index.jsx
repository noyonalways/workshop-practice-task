import { createContext, useContext, useState } from "react";

// Create a context for the Toggle state
const ToggleContext = createContext();

const useToggleContext = () => {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("Wrap the context with the Toggle");
  }
  return context;
};

const Toggle = ({ children }) => {
  const [active, setActive] = useState(false);

  return (
    <ToggleContext.Provider value={{ active, setActive }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Compound components
const Active = ({ children }) => {
  const { active } = useToggleContext();
  return <>{active && children}</>;
};

const Inactive = ({ children }) => {
  const { active } = useToggleContext();
  return <>{!active && children}</>;
};

const ToggleTrigger = () => {
  const { active, setActive } = useToggleContext();
  return <input onChange={() => setActive(!active)} type="checkbox" />;
};

Toggle.Active = Active;
Toggle.Inactive = Inactive;
Toggle.ToggleTrigger = ToggleTrigger;

export default Toggle;
