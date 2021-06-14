
import MealItem from "./MealItem";

const datas = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {

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
