import React from "react";
import Part from "./Part";
import { CourseParts } from "./types";

const Content = ({ courseParts }: CourseParts) => {
  
  const courseMap = courseParts.map(part => <Part part={part} key={part.name} />)
  return (
    <article>
      {courseMap}
    </article>
  );
}

export default Content;