import React from "react";
import Card from "./Card";
import { Container } from "react-bootstrap";

function Home() {


let data  = [
  {
      strMeal: "Baked salmon with fennel & tomatoes",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1548772327.jpg",
      idMeal: "52959"
  },
  {
      strMeal: "Cajun spiced fish tacos",
      strMealThumb: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
      idMeal: "52819"
  },
  {
      strMeal: "Escovitch Fish",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1520084413.jpg",
      idMeal: "52944"
  },
  {
      strMeal: "Fish fofos",
      strMealThumb: "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
      idMeal: "53043"
  },
  {
      strMeal: "Fish pie",
      strMealThumb: "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
      idMeal: "52802"
  },
  {
      strMeal: "Fish Stew with Rouille",
      strMealThumb: "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
      idMeal: "52918"
  },
  {
      strMeal: "Garides Saganaki",
      strMealThumb: "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
      idMeal: "52764"
  },
  {
      strMeal: "Grilled Portuguese sardines",
      strMealThumb: "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
      idMeal: "53041"
  },
  {
      strMeal: "Honey Teriyaki Salmon",
      strMealThumb: "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
      idMeal: "52773"
  },
  {
      strMeal: "Kedgeree",
      strMealThumb: "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
      idMeal: "52887"
  },
  {
      strMeal: "Kung Po Prawns",
      strMealThumb: "https://www.themealdb.com/images/media/meals/1525873040.jpg",
      idMeal: "52946"
  },
]

  return (
    <Container>
      <div style={{ display: "flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",margin:"20px 0px" }}>
        {
          data.map((item)=>{
            return(
              <div key={item.idMeal}>
              <Card strMeal={item.strMeal} strMealThumb={item.strMealThumb} idMeal={item.idMeal} title={'title'} text={'text'} img={''} />
              </div>
            )
          })
        }
      </div>
    </Container>
  );
}

export default Home;
