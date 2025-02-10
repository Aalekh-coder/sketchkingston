import {Link} from "react-router"

const Card = ({ info }) => {
  return (
    <Link to={`${info._id}`} className="card bg-base-100 w-96 shadow-xl hover:shadow-zinc-900 transition-colors duration-500">
      <figure>
        <img
          src={info?.image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{info?.productName}</h2>
        <p><span className="font-bold text-yellow-400">OrderBy</span> {info?.orderBy.toUpperCase()}</p>
        <p><span className="font-bold text-pink-400">Review</span> {info?.review}</p>
      </div>
    </Link>
  )
}

export default Card