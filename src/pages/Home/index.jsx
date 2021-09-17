import { useState } from "react";
import { usePeople } from "../../hooks/usePeople";
import { formatDate } from "../../utils/dateFormat";

import Header from "../../components/Header";
import Input from "../../components/Input";
import Table from "../../components/Table";
import TableItem from "../../components/TableItem";
import Spinner from "../../components/Spinner";

export default function Home () {
  const [name, setName] = useState("");

  const {
    people,
    loadMore,
    filterByGender,
    filterByName,
    loading
  } = usePeople();

  return (
    <>
      <Header />
      <main className="bg-gray-50 align-center">
        <Input
          search={(e) => {
            setName(e.target.value);
          }}
        ></Input>

        {loading && <Spinner />}

        <Table filterByGender={filterByGender} filterByName={filterByName}>
          {
            people
              .filter((person) =>
                !!name
                  ? person.name.first
                    .toLowerCase()
                    .includes(name.toLowerCase())
                  : people
              )
              .map((person) => (
                <>
                  <TableItem
                    id={person.login.uuid}
                    image={person.picture.medium}
                    name={`${person.name.first} ${person.name.last}`}
                    gender={person.gender}
                    birth={formatDate(person.dob.date)}
                  />
                </>
              ))}

        </Table>




        <div className="flex justify-center m-4">
          <button className="flex gap-2" onClick={loadMore}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#1D4ED8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Loading more...
          </button>
        </div>

      </main>
    </>
  );
}

{
  /*
  https://randomuser.me/api/portraits/women/88.jpg

*/
}
