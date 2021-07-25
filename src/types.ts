export interface CourseName {
  courseName: string
}

export interface CourseParts {
  courseParts: CoursePart[];
}


interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}

interface CoursePartBaseDescription extends CoursePartBase {
  description: string;
}

interface CourseNormalPart extends CoursePartBaseDescription {
  type: "normal";
}

interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  groupProjectCount: number;
}

interface CourseSubmissionPart extends CoursePartBaseDescription {
  type: "submission";
  exerciseSubmissionLink: string;
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart;