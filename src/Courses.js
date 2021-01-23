import React from 'react';
import { useQuery, gql } from '@apollo/client';

const Courses_query = gql`
  query AllCourses{
    Course {
      total
      Best
    }
  }
`;

export default function Courses() {
  const { loading, error, data } = useQuery(Courses_query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
       const {Course}= data;
       console.log(Course);
  return (
      <>
       <h1>Course List</h1>
       {
           Course.map((course,key)=>{
              return (
                  <div key={key}>
                 <h6 >{course.Best} </h6>
                 <h1>{course.total}</h1>
                
                </div>
                

              );
           })
       }

     
      </>

  );

}
