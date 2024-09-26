import React from "react";
import useKeyDown from "../../hooks/use-keydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

  function handleAddToast(event) {
    event.preventDefault();
    const nextToasts = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      },
    ];
    setToasts(nextToasts);
    setMessage("");
    setVariant("notice");
  }

  function handleRemoveToast(id) {
    const nextToasts = toasts.filter((toast) => {
      return toast.id !== id;
    });

    setToasts(nextToasts);
  }

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])

  useKeyDown('Escape', handleEscape)


  return (
    <ToastContext.Provider
      value={{
        handleAddToast,
        handleRemoveToast,
        message,
        setMessage,
        variant,
        setVariant,
        toasts,
        setToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
