import React from "react";
import "./PoupularCourse.css";
import image1 from "../../assest/course/courses1.jpeg";
import image2 from "../../assest/course/courses6.jpeg";
import image3 from "../../assest/course/lead_generaation.jpg";
const PopularCourse = () => {
  const courses = [
    {
      id: 1,
      image: image2,
      text: "Digital Marketing Fees - fluctuate over time",
    },
    {
      id: 2,
      image: image1,
      text: "Basic Share market Knowledge Fees - 1000 (INR) for India",
    },
    {
      id: 3,
      image: image3,
      text: "Spoken English Courses Fees - 1000 (INR) for India",
    },
  ];
  return (
    <div className="popular_course">
      <h1 className="headding">POPULAR COURSES</h1>
      <div className="popular_courses">
        {courses.map((course) => (
          <div className="courses_box" key={course.id}>
            <img src={course.image} alt="" />
            <div className="course_info">
              <p style={{ textAlign: "center" }}>{course.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourse;
