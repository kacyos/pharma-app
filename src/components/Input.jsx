export default function Input ({ search }) {
  return (
    <div className=" flex justify-center pt-10 mx-auto">
      <input className="input-full" onChange={search}></input>
    </div>
  )
}
