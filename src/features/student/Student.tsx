import React from "react";

import { useAppSelector } from "../../app/hooks";
import { selectStudent } from "./studentSlice";

export function Student() {
  const students = useAppSelector(selectStudent);
  // const dispatch = useAppDispatch();

  return (
    <div>
      {students.length}
      {students.map((student, index) => (
        <div key={index}>
          name: {student.sname} <br/> age : {student.age}
        </div>
      ))}
    </div>
  );
}
