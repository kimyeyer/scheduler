import ReactDOM from 'react-dom';
import { IoClose } from 'react-icons/io5';

interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Overlay = `fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-[9999]`
const ModalContainer = `bg-white max-w-[90%] rounded shadow-lg text-center relative`
const ModalHeader = `flex justify-between items-center px-4 py-3 border-b border-gray-300`
const ModalTitle = `text-gray-800 text-xl font-semibold`
const ModalCloseButton = `text-gray-600 text-xl w-[21px] h-[21px] flex items-center justify-center hover:text-gray-800`
const ModalContent = `p-4`

export default function Modal({ title = '', isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={Overlay}>
      <div className={ModalContainer}>
        <div className={ModalHeader}>
          <span className={ModalTitle}>{title}</span>
          <button
            onClick={onClose}
            className={ModalCloseButton}
          >
            <IoClose />
          </button>
        </div>
        <div className={ModalContent}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
}
