// import logo from "./logo.svg";
// import "./App.css";
// import Title from "./componets/title/Title";
// import Greeting from "./componets/Greeting/Greeting";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Title name="Imran" age={17} nekiProp={true} />
//         {/* <Title name="Faris" age={17} nekiProp={true} /> */}
//         <Greeting name="imko" fontSize={40} fontColor={"orange"}>
//           <p>Oco je children za Greeting</p>
//         </Greeting>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import "./App.css";
// import Card from "./componets/Card/Card";
// const App = () => {
//   return (
//     <div className="card-container">
//       <Card
//         image={"https://www.w3schools.com/howto/img_avatar.png"}
//         name="Joe Dop"
//         occupation="Softver Ingener"
//         verification
//       />
//       <Card
//         image={"https://www.w3schools.com/howto/img_avatar2.png"}
//         name="Laura Mamati"
//         occupation="Softver Ingener"
//         verification={false}
//       />
//       <Card
//         image={
//           "https://cdn4.iconfinder.com/data/icons/people-2-5/36/164-512.png"
//         }
//         name="Anastasija Kuku"
//         occupation="Softver Ingener"
//         verification={true}
//       />
//       <Card
//         image={"https://www.w3schools.com/howto/img_avatar.png"}
//         name="Joe Dop"
//         occupation="Softver Ingener"
//       />
//     </div>
//   );
// };
// export default App;

// import "./App.css";
// import ItemCard from "./componets/ItemCard/ItemCard";
// const App = () => {
//   return (
//     <div className="container">
//       <ItemCard
//         image={
//           "https://th.bing.com/th/id/OIP.8eJUCycvfoy-CdojiAEbgQEgDY?w=223&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
//         }
//         name="Apartmani Sentic"
//         city="Neum"
//         distance="1"
//         description="Apartmani Sentić su smešteni u Neumu. U ponudi imaju smeštajne jedinice sa čajnom kuhinjom i besplatnom WiFi mrežom. Osim toga, nude besplatan privatni parking u okviru objekta."
//         recenzije="281"
//         mark="9,8"
//         location="9,6"
//       />
//       <ItemCard
//         image={
//           "https://cf.bstatic.com/xdata/images/hotel/square600/207121485.webp?k=f3bd2eab72dff90ca14fa5741cf581a4fc3e7003f3beaa0ba5f63475cf1c992c&o=&s=1"
//         }
//         name="Grand Hotel Neum"
//         city="Neum"
//         distance="0,8"
//         description="Objekat Grand Hotel Neum je renoviran 2013. godine i najveći je hotel na neumskoj rivijeri. Ponuda objekta obuhvata bazen na otvorenom i grejani bazen sa morskom vodom u zatvorenom/na otvorenom."
//         recenzije="2 675"
//         mark="8,1"
//         location="8,7"
//       />
//       <ItemCard
//         image={
//           "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1"
//         }
//         name="Marea Hotel & Spa"
//         city={"Neum"}
//         distance="0,6"
//         description={
//           "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu..."
//         }
//         recenzije="591"
//         mark={"9,2"}
//         location="8,9"
//       />
//     </div>
//   );
// };

import "./App.css";
import ItemCard from "./componets/ItemCard/ItemCard";

// const people = [
//   "Creola Katherine Johnson: mathematician",
//   "Mario José Molina-Pasquel Henríquez: chemist",
//   "Mohammad Abdus Salam: physicist",
//   "Percy Lavon Julian: chemist",
//   "Subrahmanyan Chandrasekhar: astrophysicist",
// ];

// import Card from "./componets/Card/Card";
const Hotels = [
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
    name: "Marea Hotel & Spa",
    city: "Neum",
    distance: 0.6,
    description:
      "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
    recenzije: 591,
    mark: 9.2,
    location: 8.9,
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
    name: "Marea Hotel & Spa",
    city: "Neum",
    distance: 0.6,
    description:
      "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
    recenzije: 591,
    mark: 9.2,
    location: 8.9,
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
    name: "Marea Hotel & Spa",
    city: "Neum",
    distance: 0.6,
    description:
      "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
    recenzije: 591,
    mark: 9.2,
    location: 8.9,
  },
];

const App = () => {
  // const Well = ItemCard.filter((hotel) => hotel.mark > 7);
  return (
    <div className="card-container">
      {Hotels.map((hotel, index) => (
        <ItemCard
          key={index}
          image={hotel.image}
          name={hotel.name}
          city={hotel.city}
          distance={hotel.distance}
          description={hotel.description}
          recenzije={hotel.recenzije}
          mark={hotel.mark}
          location={hotel.location}
        />
      ))}
    </div>
  );
};
export default App;
