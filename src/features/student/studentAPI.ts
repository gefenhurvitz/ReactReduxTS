import axios from "axios";
import { MY_SERVER } from "../../app/env";
import Student from "../../models/Student";

// A mock function to mimic making an async request for data
export function addStudent(stu: Student) {
  return new Promise<{ data: Student}>((resolve) =>
    axios.post(MY_SERVER, stu).then((res) => resolve({ data: res.data }))
  );
}


export function getAllStudents() {
  console.log('called get all studs from API')
  return new Promise<{ data: Student[]}>((resolve) =>
    axios.get(MY_SERVER).then((res) => resolve({ data: res.data }))
  );
}

export function deleteStudent(id:number) {
  console.log('called delete stud from API')
  return new Promise<{ data: any}>((resolve) =>
    axios.delete(MY_SERVER + "/" + id ).then((res) => resolve({ data: id }))
  );
}