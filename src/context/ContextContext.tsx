/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { createContext, useContext, useState, ReactNode } from "react";

export type ViewContext = "business" | "tech";

interface ContextState {
  viewContext: ViewContext;
  setViewContext: (context: ViewContext) => void;
}

const ContextContext = createContext<ContextState | undefined>(undefined);

export function ContextProvider({ children }: { children: ReactNode }) {
  const [viewContext, setViewContext] = useState<ViewContext>("business");

  return (
    <ContextContext.Provider value={{ viewContext, setViewContext }}>
      {children}
    </ContextContext.Provider>
  );
}

export function useViewContext() {
  const context = useContext(ContextContext);
  if (context === undefined) {
    throw new Error("useViewContext must be used within a ContextProvider");
  }
  return context;
}
