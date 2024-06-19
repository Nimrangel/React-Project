import courses from "../data/data";

const Courses = () => {
  return (
    <div className="courseWrapper">
      <h1>Our Courses</h1>
      <div className="iconWrapper">
        {courses.map((course) => {
          const { id, img, name, text } = course;
          return (
            <div className="card" key={id}>
              <img src={img} alt={name} />
              <div>
                <h3>{name}</h3>
                <p>{text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
