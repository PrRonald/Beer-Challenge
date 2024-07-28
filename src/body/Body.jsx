import { useEffect, useState } from "react";

export const Body = () => {

    const [data, setData] = useState([ ]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:3000/products");   
          const json = await response.json();
          setData(json);
        } catch (error) {
          setError(error);   
  
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []); 

    if(loading){
        return(
            <p className="w-full text-center text-green-500 text-2xl">
                Loadding
            </p>
        );
    }
  
    return(
        <section>
            <p>{data[0].brand}</p>
            <div>
           {data.map(data => (
            <p>{data.brand}</p>
           ))}
            </div>
         
        </section>
    );
}


