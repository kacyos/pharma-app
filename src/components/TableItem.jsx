import { Link } from "react-router-dom"
import { usePeople } from "../hooks/usePeople"

export default function TableItem ({ id, name, gender, birth }) {

  const { page } = usePeople()

  return (
    <tr key={id}>
      <td className="table-data">
        <p className="table-data-content">{name}</p>
      </td>
      <td className="table-data">
        <p className="table-data-content">{gender}</p>
      </td>
      <td className="table-data">
        <p className="table-data-content">{birth}</p>
      </td>
      <td className="table-data">
        <div className="flex justify-center">
          <Link to={`/${page}/user/${id}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#1D4ED8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </Link>
        </div>
      </td>
    </tr>
  )
}
