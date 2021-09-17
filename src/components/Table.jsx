
export default function Table ({ children, filterByGender, filterByName }) {
  return (
    <div className="container mx-auto max-w-3xl">
      <div className=" mt-6 min-w-full shadow rounded-lg">
        <table className="min-w-full">
          <thead >
            <tr>
              <th
                scope="col"
                className="table-head"
              >
                <button className="flex m-auto gap-1 font-semibold" onClick={filterByName}>
                  Name
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                  </svg>
                </button>
              </th>

              <th
                scope="col"
                className="table-head"
              >
                <button className="flex m-auto gap-1  font-semibold" onClick={filterByGender}>
                  Gender
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5 12a1 1 0 102 0V6.414l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L5 6.414V12zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z" />
                  </svg>
                </button>
              </th>
              <th
                scope="col"
                className="table-head"
              >
                Birth
              </th>
              <th
                scope="col"
                className="table-head"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>

      </div>
    </div>
  )
}
