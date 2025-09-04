function ColStd({student}) {
  return (
    <div>
     <h2>Student</h2>
            {student.map((student) => (
              
                <ul>
                  <li>
                    <h4>{student.Name}</h4>
                  </li>
                </ul>
              
            ))}
    </div>
  );
}
export default ColStd;
