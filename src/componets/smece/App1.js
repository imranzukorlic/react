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

// import "./App.css";
// import ItemCard from "./componets/ItemCard/ItemCard";

// // const people = [
// //   "Creola Katherine Johnson: mathematician",
// //   "Mario José Molina-Pasquel Henríquez: chemist",
// //   "Mohammad Abdus Salam: physicist",
// //   "Percy Lavon Julian: chemist",
// //   "Subrahmanyan Chandrasekhar: astrophysicist",
// // ];

// // import Card from "./componets/Card/Card";
// const Hotels = [
//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     name: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     description:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     mark: 7.7,
//     location: 8.9,
//   },
//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     name: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     description:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     mark: 9.6,
//     location: 8.9,
//     beast: true,
//   },
//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     name: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     description:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     mark: 9.2,
//     location: 8.9,
//   },
//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     name: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     description:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     mark: 6.9,
//     location: 8.9,
//   },
//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     name: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     description:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     mark: 7.3,
//     location: 8.9,
//   },
//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     name: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     description:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     mark: 8.2,
//     location: 8.9,
//   },
//   {
//     image:
//       "https://cf.bstatic.com/xdata/images/hotel/square600/301241299.webp?k=266cd60d23dc30576cbe365f346a82958173234f6c0aa4340ba44fc1bbbcf112&o=&s=1",
//     name: "Marea Hotel & Spa",
//     city: "Neum",
//     distance: 0.6,
//     description:
//       "Marea Hotel & Spa je objekat sa impresivnim panoramskim pogledom na more, u kojem gosti mogu da uživaju u moderno opremljenim sobama i suite jedinicama ili u baru u foajeu uz omiljeni koktel i ukusnu...",
//     recenzije: 591,
//     mark: 6.1,
//     location: 8.9,
//   },
// ];

// const App = () => {
//   // const GoodHotel = Hotels.filter((hotel) => hotel.mark > 7.5);
//   return (
//     <div className="card-container">
//       {Hotels.map((hotel, index) => (
//         <ItemCard
//           key={index}
//           image={hotel.image}
//           name={hotel.name}
//           city={hotel.city}
//           distance={hotel.distance}
//           description={hotel.description}
//           recenzije={hotel.recenzije}
//           mark={hotel.mark}
//           location={hotel.location}
//           beast={hotel.beast}
//         />
//       ))}
//     </div>
//   );
// };
// export default App;
const App = () => {
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  // const sayHello = (name) => {
  //   alert(`Hello ${name}`);
  // };
  const [count, setCount] = React.useState(0);
  const [name, setName] = React.useState("JOHN");
  // let count = 0;
  return (
    <div className="card-container">
      {count}
      <button onClick={handleClick}>Increase</button>
      {name}
      <button onClick={() => setName("IMRAN")}>Mijenja Ime</button>
      {/* <button onClick={() => sayHello("Johin")}>Click me</button>
        <button
          onClick={() => {
            sayHello("Rick");
            console.log("nije definisana funkcija");
          }}
        >
          Inline anonimna onClick function */}
      {/* </button> */}
      {/* <hr />
        <Greeting name="Imran" handleaParentClick={handleClick} /> */}
      {/* <Greeting name="Denis" />
        <Greeting name="Faris" /> */}
    </div>
  );
};
export default App;
return (
  <div className="card-container">
    <Incrementer />
  </div>
);
// import "./App.css";
// // import Incrementer from "./componets/Incrementer/Incrementer";

// import React, { useState } from "react";
// const App = () => {
//   // const [name, setName] = React.useState("");
//   // const [email, setEmail] = React.useState("");
//   // const [hobi, setHobi] = React.useState("");
//   const [formValues, setFormValues] = useState({
//     name: "",
//     email: "",
//     hobi: "",
//     password: "",
//   });
//   return (
//     <div className="card-container">
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           console.log(formValues);
//           console.log(
//             `NAME: ${formValues.name}, Email: ${formValues.email}, HOBI: ${formValues.hobi}, sifra ${formValues.password}`
//           );
//         }}
//       >
//         <label htmlFor="html">name</label>
//         <input
//           type="text"
//           id="html"
//           name="fav_language"
//           value={formValues.name}
//           // defaultValue={"faris"}
//           // readOnly
//           onChange={(event) =>
//             setFormValues((prev) => ({ ...prev, name: event.target.value }))
//           }
//         />
//         <br />
//         <label htmlFor="css">email</label>
//         <input
//           type="email"
//           id="css"
//           name="fav_language"
//           value={formValues.email}
//           onChange={(event) =>
//             setFormValues((prev) => ({ ...prev, email: event.target.value }))
//           }
//         />
//         <br />
//         <label htmlFor="javascript">hobi</label>
//         <input
//           type="text"
//           id="javascript"
//           name="fav_language"
//           value={formValues.hobi}
//           onChange={(event) =>
//             setFormValues((prev) => ({ ...prev, hobi: event.target.value }))
//           }
//         />
//         <br />
//         <label htmlFor="password">sifra</label>
//         <input
//           type="password"
//           id="javascript"
//           name="fav_language"
//           value={formValues.password}
//           onChange={(event) =>
//             setFormValues((prev) => ({ ...prev, password: event.target.value }))
//           }
//         />
//         <br />
//         <br />
//         <input type="submit" defaultValue="Submit" />
//       </form>
//     </div>
//   );
// };
// export default App;
// //event.target.value
import Imput from "./componets/Imput/Imput";
//  // 1.
// const generateNewWord = () => Math.random().toString(36).slice(2, 7);
// const reverseArray = () => {
//   //2.
//   const _array = [...array];
//   //3.
//   const reversed = _array.reverse();
//   setArray(reversed);
// };
{
  /* <button onClick={() => setArray((prev) => [generateNewWord(), ...prev])}>
        Dodaj recenicu
      </button>
      <button onClick={reverseArray}>REVERSE recenice</button>

      {/* <Imput />} 
      <ul>
        {array.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul> */
}
