import React from "react";
import Part from "./Part";
import { CourseParts } from "./types";

const Content = ({ courseParts }: CourseParts) => {
  const assertNever = (value: never) => {
    throw new Error (
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    )
  }

  courseParts.forEach(part => {
    switch(part.type) {
      case "normal":
        break;
      case "groupProject":
        break;
      case "submission":
        break;
      default:
        return assertNever(part)
    }
  })

  return (
    <section>
      {courseParts.map(course => {
        return <Part name={course.name}
          exerciseCount={course.exerciseCount} type={course.type}
          key={course.name} />
      })}
    </section>
  );
}

export default Content;