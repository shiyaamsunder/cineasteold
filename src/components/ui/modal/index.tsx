import { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import type { FC } from "react";

import { StyledModal, StyledModalWrapper } from "./modal";

interface IModalProps {
  show: boolean;
  onClose: () => void;
}

// TODO: persist scroll gap
export const Modal: FC<IModalProps> = ({ show, onClose, children }) => {
  const [isBrowser, setBrowser] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalWrapperRef = useRef<HTMLDivElement>(null);

  const backdropCloseHandler = useCallback(
    (e: MouseEvent) => {
      if (
        modalWrapperRef?.current?.contains(e?.target as Node) &&
        !modalRef?.current?.contains(e.target as Node)
      ) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    setBrowser(true);
  }, []);

  useEffect(() => {
    window.addEventListener("click", backdropCloseHandler);

    return () => window.removeEventListener("click", backdropCloseHandler);
  }, [backdropCloseHandler]);

  if (isBrowser) {
    const portal = document.getElementById("__next");
    const body = document.querySelector("body");
    if (body && show) {
      body.style.overflowY = "hidden";
    }
    if (body && !show) {
      body.style.overflowY = "scroll";
    }

    return portal && show
      ? ReactDOM.createPortal(
          <StyledModalWrapper ref={modalWrapperRef}>
            <StyledModal ref={modalRef}>{children}</StyledModal>
          </StyledModalWrapper>,
          portal
        )
      : null;
  }
  return null;
};
