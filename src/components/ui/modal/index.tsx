import { useCallback, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import type { FC, ComponentPropsWithRef, ReactNode } from "react";

import {
  StyledModal,
  StyledModalCloseButton,
  StyledModalHeader,
  StyledModalWrapper,
} from "./modal";

import { useScrollLock } from "@hooks";

export interface IModalProps {
  show: boolean;
  onClose: () => void;
  width?: number | string;
  height?: number | string;
}

export type IModal = { children: ReactNode } & IModalProps &
  ComponentPropsWithRef<"div">;

export const Modal = ({ show, onClose, width, height, children }: IModal) => {
  const [isBrowser, setBrowser] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const { lockScroll, unlockScroll } = useScrollLock();

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
    if (show) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [lockScroll, show, unlockScroll]);
  useEffect(() => {
    window.addEventListener("click", backdropCloseHandler);

    // TODO: this causes multiple re-renders: Need to fix!!
    // window.addEventListener(
    //   "keydown",
    //   (event: KeyboardEvent) => event.code === "Escape" && console.log("hello")
    // );
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
            <StyledModal ref={modalRef} width={width} height={height}>
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
