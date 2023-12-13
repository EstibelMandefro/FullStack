
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router,Routes,  Route } from "react-router-dom"; 
import AddEmploys from './employs/AddEmploys';
import EditEmploys from './employs/EditEmploys';
import ViewEmploys from './employs/ViewEmploys';
import Footer from './layout/Footer';

function App() {
  return <div className='App'>
   
   
   <Router>
   <Navbar/>
  
   <Routes>
   <Route exact path="/" element={<Home/>}/>
   <Route exact path="/addemployees" element={<AddEmploys/>}/>
   <Route exact path="/editemploy/:id" element={<EditEmploys/>}/>
   <Route exact path="/viwemploy/:id" element={<ViewEmploys/>}/>
   

   </Routes>
   <Footer/>
  
   </Router>
  </div>;


    
  
}

export default App;
