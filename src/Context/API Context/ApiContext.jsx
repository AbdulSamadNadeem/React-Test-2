import { createContext, useEffect, useState } from "react";

export const ApiDataContext = createContext();

const ApiContext = ({children}) => {
  const [featuredData , setfeaturedData]=useState([]);
  const [slicedfeaturedData , setslicedfeaturedData]=useState([]);
  const [category , setCategory]=useState([]);
  const [isModal , setIsModal] = useState({id:'' , modalState:false})

  const FeaturedproductsData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.in/api/products');
      const data = await response.json();
      setfeaturedData(data.products)
      const slicedData = data.products.slice(0, 6);
      setslicedfeaturedData(slicedData);
      
    } catch (err) {
      console.log(err);
    }
  };

  const categoriesData=async ()=>{
    try{
      const response = await fetch('https://api.escuelajs.co/api/v1/categories')
      const data = await response.json();
      const sliceExtra = data?.slice(0,6)
      setCategory(sliceExtra)
    } catch(err){
      console.log(err)
    }
  }


  useEffect(() => {
    FeaturedproductsData();
    categoriesData()
   
  }, [featuredData]);


  return (
    <ApiDataContext.Provider value={{featuredData, setfeaturedData,slicedfeaturedData ,category , isModal , setIsModal}}>
      {children}
    </ApiDataContext.Provider>
  );
};

export default ApiContext;


//   const fechData = async () => {
//   try {
//     const response = await fetch('https://fakestoreapi.in/api/products');
//     const data = await response.json();
  
//     setapiData(data.products);  
//     console.log("apiData:", data.products);
    
//   } catch (err) {
//     console.log(err);
//   }
// };