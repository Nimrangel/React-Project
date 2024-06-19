import React from "react";
import { Outlet, useNavigate,Link } from "react-router-dom";

const Paths = () => {
  const navigate = useNavigate();
  return (
    <div className="pathWrapper">
      <h2>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla illum
        nostrum a voluptates enim tempore suscipit, incidunt sint? Labore
        voluptate et, sed quo quam at quisquam obcaecati. Consectetur, mollitia
        qui.
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, maiores.
        Ullam numquam necessitatibus hic error nam iusto blanditiis, ad
        similique suscipit sequi nostrum fugit itaque velit eaque. Optio,
        provident vitae!
      </p>
      <div className="btnGroup">
        <button onClick={() => navigate("frontend")}>Frontend</button>
        <button onClick={() => navigate("backend")}>Backend</button>
        <Link to={"frontend"}>Frontend</Link>
        <Link to={"backend"}>Backend</Link>
      </div>

      <Outlet />
    </div>
  );
};

export default Paths;
