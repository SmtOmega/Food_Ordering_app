
import { useEffect, useState } from "react";
import MealItem from "./MealItem";



const AvailableMeals = () => {
  const [datas, setDatas] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [httpError, setHttpError] = useState()

  const url = "https://meals-ordering-default-rtdb.firebaseio.com/meals.json"

  const fetchData = async (url) => {
    setIsLoading(true)
    const response = await fetch(url)
    if(!response.ok){
      throw new Error('Something went wrong')
    }
    const data = await response.json()
    console.log(data)
    let dataArr = []
    for(const key in data){
      let newData = data[key]
      dataArr.push({id: key, name: newData.name, description: newData.description, price: newData.price})
    }
    setDatas(dataArr)
    setIsLoading(false)
  }

  useEffect(() => {

       fetchData(url).catch(error => {
        setIsLoading(false)
        setHttpError(error.message)
       })

    
  }, [])

  if(isLoading){
    return<div className="meals">
      <div className="card">
      <h2>Loading...</h2>
      </div>
    </div>
  }
  if(httpError){
    return <section className="meals">
      <div className="card">
        <p>{httpError}</p>
      </div>
    </section>
  }
  return (
    <section className="meals">
      <div className="card">
        <ul>
          {datas.map((data) => {
            return (
              <MealItem {...data} key={data.id}/>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default AvailableMeals;
