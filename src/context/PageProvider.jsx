import { useState } from "react";
import { PageContext } from "./PageContext";

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState("home");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
