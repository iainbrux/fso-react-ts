import React from "react";
import { CoursePart } from "./types";

const assertNever = (value: never) => {
  throw new Error (
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  )
}

const Part: React.FC<{part: CoursePart}> = ({ part }) => {
  switch(part.type) {
    case "normal":
      return <section>
        <h4>{part.name} {part.exerciseCount}</h4>
        <p>
          <em>{part.description}</em>
        </p>
      </section>
    case "groupProject":
      return <section>
        <h4>{part.name} {part.exerciseCount}</h4>
        <p>{part.groupProjectCount}</p>
      </section>
    case "submission":
      return <section>
        <h4>{part.name} {part.exerciseCount}</h4>
        <p>
          <em>{part.description}</em><br />
          {part.exerciseSubmissionLink}
        </p>
      </section>
    default:
      return assertNever(part)
  }
}

export default Part;