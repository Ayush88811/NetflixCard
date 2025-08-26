export const Practices = () => {
    const students = [1,"this","ee"];
    return(
        <>
         {/* <p>{students.length && "No students found"}</p> */}

         {/* 1st  */}
         {/* <p>{students.length === 0 && "No students found"}</p>
         <p>Number of students : {students.length}</p> */}

            {/* 2nd methodd */}
         {/* <p>{!students.length === 0 && "No students found"}</p>
         <p>Number of students : {students.length}</p> */}

         {/* 3rd  */}
         <p>{!Boolean(students.length) && "No students found"}</p>
         <p>Number of students: {students.length}</p>
        </>
    )
};