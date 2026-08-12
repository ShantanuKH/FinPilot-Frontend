import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import FloatingAiButton from "./FloatingAiButton";
import FloatingAiPanel from "./FloatingAiPanel";

const FloatingAi = () => {
  const [open, setOpen] =
    useState(false);

  return (
    <AnimatePresence mode="wait">
      {open ? (
        <FloatingAiPanel
          key="panel"
          onClose={() => setOpen(false)}
        />
      ) : (
        <FloatingAiButton
          key="button"
          onClick={() => setOpen(true)}
        />
      )}
    </AnimatePresence>
  );
};

export default FloatingAi;