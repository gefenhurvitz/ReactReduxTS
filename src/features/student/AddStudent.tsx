import React, { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { addStudentAsync } from "./studentSlice";


export const AddStudent = () => {
  const [sname, setSname] = useState("")
  const [age, setAge] = useState(0)

  const dispatch = useAppDispatch()
  return (
    <div>
      <h1>Add Student Here</h1>
      name: <input onChange={(e) => setSname(e.target.value)}/>
      age: <input onChange={(e) => setAge(+e.target.value)}/>
      <button onClick={()=> dispatch(addStudentAsync({age,sname}))}>add</button>
    </div>
  );
}
