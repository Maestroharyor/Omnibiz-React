import { useState, useEffect, createContext } from "react";

export const ContactContext = createContext();

export const ContactProvider = (props) => {
  const [contacts, setContacts] = useState(() => {
    // getting stored value
    const savedData = JSON.parse(localStorage.getItem("omnibiz-contact"));
    return savedData || "";
  });

  useEffect(() => {
    localStorage.setItem("omnibiz-contact", JSON.stringify(contacts));
  }, [contacts]);

  // useEffect(() => {
  //   const savedData = JSON.parse(localStorage.getItem("omnibiz-contact"));
  //   if (savedData !== null) {
  //     setContacts(savedData);
  //   }
  // }, []);

  return (
    <ContactContext.Provider value={[contacts, setContacts]}>
      {props.children}
    </ContactContext.Provider>
  );
};
