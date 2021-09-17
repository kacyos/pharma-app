import { useHistory } from "react-router-dom"

import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Example ({ children }) {

  const cancelButtonRef = useRef(null)
  const history = useHistory()

  return (
    <div className="bg-transparent">
      <Transition.Root show={true} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto bg-transparent" initialFocus={cancelButtonRef} onClose={() => history.push("/")}>
          <div className="modal-container">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="modal-overlay" />
            </Transition.Child>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen bg-transparent" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="modal-content-container">

                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  )
}
