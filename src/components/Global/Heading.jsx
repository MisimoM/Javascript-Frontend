import { NavLink } from "react-router-dom";
export default function Heading({ option, H2, p, path, children }) {
    if (option === "regular") {
      return (
        <>
          <p className="orange">{p}</p>
          <h2>{H2}</h2>
        </>
      );
    } else if (option === "withButton") {
      return (
        <>
          <p className="orange">{p}</p>
          <div className="heading-wrap">
            <h2>{H2}</h2>
            <NavLink to={path}>{children}</NavLink>
          </div>
        </>
      );
    }
}