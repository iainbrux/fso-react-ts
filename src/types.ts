export interface CourseName {
  courseName: string
}

export interface CourseParts {
  courseParts: CoursePart[];
}

export interface CoursePart {
  name: string;
  exerciseCount: number;
}