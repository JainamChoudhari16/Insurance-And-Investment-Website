import { Link, NavLink } from "react-router-dom";

function Card({ title, imgsrc, desc, linktopage }) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col items-center bg-headerC">
      {" "}
      {/* Added flex and items-center */}
      <img className="w-20 h-auto mt-4 mb-2" src={imgsrc} alt="Card" />{" "}
      {/* Added mt-4 and mb-2 for spacing */}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center text-textC">{title}</div>
        <p className="text-textC text-base">{desc}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <Link
          to={linktopage}
          className="inline-block bg-footerC rounded-full px-3 py-1 text-sm font-semibold text-textC mr-2 mb-2"
        >
          Know More
        </Link>
      </div>
    </div>
  );
}

export default Card;
