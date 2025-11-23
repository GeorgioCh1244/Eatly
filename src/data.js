import caesarSaladImg from "./assets/caesarSalad.jpg";
import cheeseburgerImg from "./assets/cheeseburger.jpg";
import chocolateCakeImg from "./assets/chocolateCake.jpg";
import grilledChickenImg from "./assets/grilledChicken.jpg";
import PizzaImg from "./assets/Pizza.jpg";
import spaghettiImg from "./assets/spaghetti.jpg";


export const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    description: "Classic pizza with tomato, mozzarella, and fresh basil.",
    price: 8.99,
    image: PizzaImg
  },
  {
    id: 2,
    name: "Cheeseburger",
    description: "Juicy beef patty with cheese, lettuce, tomato, and fries.",
    price: 6.49,
    image: cheeseburgerImg
  },
  {
    id: 3,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, croutons, parmesan, and Caesar dressing.",
    price: 5.99,
    image: caesarSaladImg
  },
  {
    id: 4,
    name: "Spaghetti Bolognese",
    description: "Traditional Italian pasta with rich meat sauce.",
    price: 9.49,
    image: spaghettiImg
  },
  {
    id: 5,
    name: "Grilled Chicken",
    description: "Tender grilled chicken breast served with seasonal vegetables.",
    price: 10.99,
    image: grilledChickenImg
  },
  {
    id: 6,
    name: "Chocolate Cake",
    description: "Decadent chocolate cake with creamy frosting.",
    price: 4.99,
    image: chocolateCakeImg
  }
];