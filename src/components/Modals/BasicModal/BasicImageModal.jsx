import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Svg from '../../Svg/Svg';

const modalRoot = document.querySelector('#modal-root');

export function BasicImageModal({ isOpen, onCloseModal, children }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onCloseModal();
      }
    };

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onCloseModal();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEsc);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleEsc);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onCloseModal]);
  return (
    <>
      {isOpen &&
        createPortal(
          <div className="p-10 modal-overlay flex items-center justify-center fixed bg-black bg-opacity-50 top-0 left-0 w-full h-full z-50 ">
            <div
              className=" modal shadow-lg rounded-xl "
              ref={modalRef}
            >
              <div className="relative modal-content justify-center w-full max-h-[90vh] overflow-y-auto">
                <Svg
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-400 hover:bg-slate-500   ml-auto mb-2  absolute smOnly:right-[6px] md:right-[10px] top-[10px] cursor-pointer"
                  classNameSvg="opacity-50   hover:opacity-100 hover:scale-105 transition-transform transform-all hover:rotate-90"
                  id={'icon-cross'}
                  size={'24px'}
                  stroke={'white'}
                  onClick={onCloseModal}
                />
                <div className="">{children}</div>
              </div>
            </div>
          </div>,
          modalRoot
        )}
    </>
  );
}
