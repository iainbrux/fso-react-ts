import React from "react";
import { CoursePart } from "./types";

const Course = ({ name, exerciseCount }: CoursePart) => {
  return <p>{name} {exerciseCount}</p>;
}

export default Course;