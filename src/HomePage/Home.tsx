import React, { useState, useEffect } from 'react';
import ScoreModel from '../models/ScoreModel';

export const Home = () => {


  const [data, setData] = useState<ScoreModel[]>([]);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

    const baseUrl: string = "http://localhost:9090/api/examScores";
    const url: string = `${baseUrl}?page=0&size=9`;
    const response = await fetch(url);

        if(!response.ok){
           throw new Error('Something went wrong');
        }
        
        const responseJson = await response.json();
        const responseData = responseJson._embedded.examScores;
        const loadedData: ScoreModel[] = [];

        for (const key in responseData){
          loadedData.push({
               studentID:responseData[key].studentID,
               courseID:responseData[key].courseID,
               year:responseData[key].year,
               assignmentType:responseData[key].assignmentType,
               assignmentScore:responseData[key].assignmentScore,
               level:responseData[key].level,
               semester:responseData[key].semester,
               id:responseData[key].id,
          });
        }
        
        setData(loadedData);
        console.log();
      };
      fetchData().catch((error:any)=>{
       
        setHttpError(error.message);
       })
    
   
  }, []);

  if(httpError){
    return(
      <div className='container m-5'>
      <p>{httpError}</p>
      </div>
    )
   }

  return (
    <div>
      <h1>Data Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Course ID</th>
            <th>Academic Year</th>
            <th>Level</th>
            <th>Semester</th>
            <th>Assignment Type</th>
            <th>Assignment Score</th>
            {/* Add more headers if needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.studentID}</td>
              <td>{item.courseID}</td>
              <td>{item.year}</td>
              <td>{item.level}</td>
              <td>{item.semester}</td>
              <td>{item.assignmentType}</td>
              <td>{item.assignmentScore}</td>
              {/* Add more columns if needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

}


export default Home;