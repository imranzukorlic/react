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
//       />
//       <Card
//         image={"https://www.w3schools.com/howto/img_avatar2.png"}
//         name="Laura Mamati"
//         occupation="Softver Ingener"
//       />
//       <Card
//         image={
//           "https://cdn4.iconfinder.com/data/icons/people-2-5/36/164-512.png"
//         }
//         name="Anastasija Kuku"
//         occupation="Softver Ingener"
//       />
//     </div>
//   );
// };
// export default App;

import "./App.css";
import ItemCard from "./componets/ItemCard/ItemCard";
const App = () => {
  return (
    <div className="container">
      <h2>hahahha</h2>
      <ItemCard
        image={
          "https://th.bing.com/th/id/OIP.8eJUCycvfoy-CdojiAEbgQEgDY?w=223&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
        }
        name="Apartmani Sentic"
        city="Neum"
        distance="1"
        description="Apartmani Sentić su smešteni u Neumu. U ponudi imaju smeštajne jedinice sa čajnom kuhinjom i besplatnom WiFi mrežom. Osim toga, nude besplatan privatni parking u okviru objekta."
        recenzije="281"
        mark="9,8"
        location="9,6"
      />
    </div>
  );
};
export default App;
