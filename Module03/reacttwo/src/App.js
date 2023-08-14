import { Users } from "./Data";
import Profil from "./components/Profil";
import "./App.css"


function App() {
  return (
    <div className="d-flex flex-wrap">
      {
        Users.users.map(item => <Profil
        firstName={item.firstName}
        image={item.image} 
        lastName={item.lastName}
        birthDate={item.birthDate}
        phone = {item.phone}
        email= {item.email}
        key={item.users}
         />)
      }
    </div>
  )
}

export default App;
