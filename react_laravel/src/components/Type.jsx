import { useState, useEffect } from "react";



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
    <div>
{types.map((type) => (
          <div key={type.id} className="Itype">
            
              <h3>{type.title}</h3>
            
            <div>{type.created_at}</div>
            <div>{type.updated_at}</div>
            
            
          </div>
        ))}

    </div>
  );
}