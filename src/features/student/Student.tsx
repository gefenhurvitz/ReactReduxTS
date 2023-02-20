// import React, { useEffect } from "react";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { deleteStudentAsync, getAllStudentsAsync, selectStudent } from "./studentSlice";

export function Student() {
  const students = useAppSelector(selectStudent);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllStudentsAsync());
  }, [dispatch ]);

  return (
    <div>
      {students.length}
      {students.map((student, index) => (
        <div key={index}>
          name: {student.sname} <br /> age : {student.age}
          <button onClick={()=>dispatch(deleteStudentAsync(student.id || -1))}>del</button>
        </div>
      ))}
    </div>
  );
}
