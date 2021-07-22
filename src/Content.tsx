import React from "react";
import Course from "./Course";
import { CourseParts } from "./types";

const Content = ({ courseParts }: CourseParts) => {
  return (
    <section>
      {courseParts.map(course => {
        return <Course name={course.name}
          exerciseCount={course.exerciseCount}
          key={course.name}/>
      })}
    </section>
  );
}

export default Content;