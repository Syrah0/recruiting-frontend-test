import { useState } from "react";
import useInvoice from "../context/invoices/hook";

function InfoModal() {
    const { creditNoteSelected } = useInvoice();
    const [showModal, setShowModal] = useState(false);

    if (creditNoteSelected === null) {
        return (
            <></>
        )
    }

    return (
        <div style={{ padding: '10px', display: 'grid' }}>
            <button onClick={() => setShowModal(true)} class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
              Asignar
            </button>
            { showModal ? <div style={{ position: 'absolute', justifySelf: 'center', alignSelf: 'center' }} class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="p-4 md:p-5">
                            <p class="text-gray-500 dark:text-gray-400 mb-4">Nota de crédito asignada correctamente</p>
                            <button onClick={() => setShowModal(false)} class="text-white inline-flex w-full justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Seguir asignando
                            </button>
                        </div>
                    </div>
                </div>
            </div> : <></>} 

        </div>
    )
}

export default InfoModal;