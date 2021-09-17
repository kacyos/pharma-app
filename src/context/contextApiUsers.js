import { createContext, useState, useEffect } from "react";
import { apiGet } from "../api";

export const ContextApi = createContext({});

export function ContextApiUsers({ children }) {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState(2);
  const [page, setPage] = useState(1);

  const [filteredByGender, setFilteredByGender] = useState(false);
  const [filteredByName, setFilteredByName] = useState(false);

  useEffect(() => {
    getPeople();
  }, []);

  async function getPeople() {
    const data = await apiGet();
    setPeople(data.results);
    setLoading(false);
  }

  async function loadMore() {
    const data = await apiGet(nextPage);
    setPeople((prevState) => [...prevState, ...data.results]);
    setNextPage(nextPage + 1);
    setPage(page + 1);
  }

  function filterByGender() {
    if (!filteredByGender) {
      const sorted = people.sort((a, b) => {
        if (a.gender < b.gender) {
          return 1;
        }

        if (a.gender > b.gender) {
          return -1;
        }

        return 0;
      });
      setPeople(sorted);
      setFilteredByGender(true);
      setFilteredByName(false);
    }

    if (filteredByGender) {
      const sorted = people.sort((a, b) => {
        if (a.gender < b.gender) {
          return -1;
        }

        if (a.gender > b.gender) {
          return 1;
        }

        return 0;
      });
      setPeople(sorted);
      setFilteredByGender(false);
      setFilteredByName(false);
    }
  }

  function filterByName() {
    if (!filteredByName) {
      const sorted = people.sort((a, b) => {
        if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
          return -1;
        }

        if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
          return 1;
        }

        return 0;
      });
      setPeople(sorted);
      setFilteredByName(true);
      setFilteredByGender(false);
    }

    if (filteredByName) {
      const sorted = people.sort((a, b) => {
        if (a.name.first.toLowerCase() < b.name.first.toLowerCase()) {
          return 1;
        }

        if (a.name.first.toLowerCase() > b.name.first.toLowerCase()) {
          return -1;
        }

        return 0;
      });
      setPeople(sorted);
      setFilteredByName(false);
      setFilteredByGender(false);
    }
  }

  return (
    <ContextApi.Provider
      value={{
        people,
        loadMore,
        filterByGender,
        filterByName,
        loading,
        page,
        getPeople,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}
