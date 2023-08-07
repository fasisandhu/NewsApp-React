import "./App.css";
import { MyNavbar } from "./components/MyNavbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'



function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   async function fetchNews(){
  //   const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=80a5db5cd6014d25bcb6f5f7c2984fa6')
  //   const data = await response.json()
  //   dispatch(getNewsFromApi(data))
  //   }
  //   fetchNews()
  // },[])
 
  return (
    <>
    <Router>
      <MyNavbar />
      <Routes>
       <Route path="/" element={<News category="general" search="" />} /> 
       <Route path="/business" element={<News category="business" search=""/>} /> 
       <Route path="/technology" element={<News category="technology" search=""/>} /> 
       <Route path="/sports" element={<News category="sports" search="" />} /> 
       <Route path="/science" element={<News category="science" search="" />} /> 
       <Route path="/entertainment" element={<News category="entertainment" search=""/>} /> 


      </Routes>
      </Router>
    </>
  );
}

export default App;
