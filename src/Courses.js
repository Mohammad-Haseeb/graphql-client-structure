import React from 'react';
import { useQuery, gql } from '@apollo/client';


export const createMessageMutation = gql `
mutation courseCreate($book : String){
   courseCreate(input: {book:$book}){
      book
      id
    }
}
`

const Courses_query = gql`
  query AllCourses{
    course {
        BookName
    }
  }
`;

export default function Courses() {
  const { loading, error, data } = useQuery(Courses_query);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
       const {course}= data;
       console.log(course);
  return (
      <>
       <h1>Course List</h1>
       {
         course.map((c,key)=>{
                 return(
                   <div key={key}>
                        <h4>{c.BookName}</h4>
                        

                     </div>

                 );
                
         })
       }
     
      </>

  );

}
