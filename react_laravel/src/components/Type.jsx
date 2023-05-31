import { useState, useEffect } from "react";
import "../styles/type.css"



export default function Type() {
  const [ types, setTypes ] = useState([]);

  useEffect(() => {
    const getType = async () => {
      let response = await fetch(
        "https://webprojectslukmon.ca/api/types"
      );
      let data = await response.json();
      //console.log(data);
      setTypes(data);
    }
    getType();

  }, [])
  return (
    <div className="project-type">
{types.map((type) => (
          <div key={type.id} className="Itype">
            
              <h4>{type.title}</h4>
            
           {/*  <div>{type.created_at}</div>
            <div>{type.updated_at}</div>*/}
            
            
          </div>
        ))}

    </div>
  );
}