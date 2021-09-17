import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams, useHistory } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import { usePeople } from "../../hooks/usePeople";
import { formatDate } from "../../utils/dateFormat";
import Modal from "../../components/Modal";

export function UserModal () {
  const [person, setPerson] = useState();

  const { people } = usePeople();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    filterUser();
  }, [people]);

  function filterUser () {
    const filteredPerson = people.find((person) => person.login.uuid === id);
    setPerson(filteredPerson);
  }

  function copyRoomCodeToClipboard () {
    navigator.clipboard.writeText(window.location.href);
    toast.success("código copiado!");
  }

  return (
    <>
      {person && (
        <Modal isOpen={true}>
          <div className="modal-content">
            <div className="flex justify-end">
              <button onClick={() => history.push("/")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#1F2937"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </button>
            </div>

            <div className="w-full pt-1 text-center -mt-16 mx-auto">
              <img
                alt="profil"
                src={person.picture.large}
                className="block relative mx-auto object-cover rounded-full w-24 "
              />
            </div>
            <div className="w-full">
              <div className="text-center mb-6">
                <p className="text-gray-800 text-xl font-medium">
                  {`${person.name.first} ${person.name.last}`}
                </p>
                <p className="text-gray-800 dark:text-white text-xl">
                  {`${person.gender}`}
                </p>
              </div>
              <div className="mb-7">
                <p className="text-gray-700 font-medium leading-6">
                  Data de Nascimento:{" "}
                  <span className="text-gray-700 font-semibold">
                    {formatDate(person.dob.date)}
                  </span>
                </p>
                <p className="text-gray-700 font-medium leading-6">
                  Email:
                  <span className="text-gray-700 font-semibold">
                    {" "}
                    {person.email}
                  </span>
                </p>
                <p className="text-gray-700 font-medium leading-6">
                  Telefone:
                  <span className="text-gray-700 font-semibold">
                    {" "}
                    {person.phone}
                  </span>
                </p>
                <p className="text-gray-700 font-medium leading-6">
                  Celular:
                  <span className="text-gray-700 font-semibold">
                    {" "}
                    {person.cell}
                  </span>
                </p>
                <p className="text-gray-700 font-medium leading-6">
                  Nacionalidade:
                  <span className="text-gray-700 font-semibold">
                    {" "}
                    {person.location.country}
                  </span>
                </p>
                <p className="text-gray-700 font-medium leading-6">
                  Endereço:
                  <span className="text-gray-700 font-semibold">
                    {" "}
                    {`${person.location.street.name} nº ${person.location.street.number} - ${person.location.state}`}
                  </span>
                </p>
                <p className="text-gray-700 font-medium leading-6">
                  id:
                  <span className="text-gray-700 font-semibold">
                    {" "}
                    {person.login.uuid}
                  </span>
                </p>
                <div className="flex gap-4 justify-center mt-10">
                  <button onClick={copyRoomCodeToClipboard} className="flex gap-2">
                    Compartilhar
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <Toaster
        toastOptions={{
          style: {
            background: "#2e32ff",
            color: "#fff",
          },
          success: {
            duration: 1500,
          },
        }}
      />
    </>
  );
}

export function ModalContent () {
  return createPortal(<UserModal />, document.getElementById("modal"));
}

/*




*/
