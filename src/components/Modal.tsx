import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: lightsteelblue;
  opacity: 50%;
`
const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  max-width: 90vw;
  max-height: 90vh;
  background: #fafafa;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 5px;
  overflow: auto;
`
const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px 10px 0 0;
  background: #fff;
`
const CloseButton = styled.div`
  height: 20px;
  width: 20px;
  font-size: 20px;
  color: #000;
  cursor: pointer;
`

interface ModalProps {
  closeModal: () => void
  children?: React.ReactNode
}

export const Modal = ({ children, closeModal }: ModalProps) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.focus()
    document.body.classList.add('modal-opened')
    return () => {
      document.body.classList.remove('modal-opened')
    }
  }, [])

  const handleKeyDown = (e: any) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }

  return (
    <div onKeyDown={handleKeyDown} ref={ref} tabIndex={-1}>
      <Backdrop onClick={closeModal} />
      <ModalWrapper>
        <ModalHeader>
          <CloseButton onClick={closeModal}> ✕</CloseButton>
        </ModalHeader>
        {children}
      </ModalWrapper>
    </div>
  )
}
