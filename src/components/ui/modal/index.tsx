import { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import type { FC } from "react";

import {
  StyledModal,
  StyledModalCloseButton,
  StyledModalHeader,
  StyledModalWrapper,
} from "./modal";

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
    window.addEventListener(
      "keydown",
      (event: KeyboardEvent) => event.code === "Escape" && onClose()
    );
    return () => {
      window.removeEventListener("click", backdropCloseHandler);
      window.removeEventListener("keydown", onClose);
    };
  }, [backdropCloseHandler, onClose]);

  if (isBrowser) {
    const portal = document.getElementById("__next");
    return portal && show
      ? ReactDOM.createPortal(
          <StyledModalWrapper ref={modalWrapperRef}>
            <StyledModal ref={modalRef}>
              <StyledModalHeader>
                <StyledModalCloseButton onClick={onClose}>
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.25 6.75L6.75 17.25"
                    />

                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6.75 6.75L17.25 17.25"
                    />
                  </svg>
                </StyledModalCloseButton>
              </StyledModalHeader>
              {children}
            </StyledModal>
          </StyledModalWrapper>,
          portal
        )
      : null;
  }
  return null;
};
