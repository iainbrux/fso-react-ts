import React from "react";
import { CoursePart } from "./types";

const Part = ({ name, exerciseCount, type }: CoursePart) => {
  return <p>{name} {exerciseCount}</p>
}

export default Part;