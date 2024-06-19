import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Notfound from "./Notfound";

const PersonnelDetails = () => {
  const [people, setPeople] = useState();
  const [error, setError] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const getPeople = () => {
    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        if (!res.ok) {
          setError(true)
          throw new Error("Something went wrong")
        }
        return res.json()
      })
      .then((data) => setPeople(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getPeople();
  }, []);

  if (error) {
    return <Notfound />;
  } 
  
  else if (!people) {
    return <div>
      <h3>Data Loading</h3>
    </div>
  }

  else {
    return (
      <div className="personnelDetailWrapper">
        <img src={people?.avatar} alt={people?.first_name} />
        <h1>
          {people?.first_name} {people?.last_name}
        </h1>
        <h3>{people?.email}</h3>
        <div className="btnWrapper">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/personnel")}>Go back</button>
        </div>
      </div>
    );
  }
};

export default PersonnelDetails;
