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

import React from "react";
import Imput from "./componets/Imput/Imput";
const App = () => {
  return (
    <>
      <Imput />
    </>
  );
};
export default App;
