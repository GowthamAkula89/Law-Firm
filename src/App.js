import './App.css';
import DashBoard from './Components/Dashboard';
import Introduction from './Components/Introduction';
import SuccessStories from './Components/SuccessStories';
import AreaOfPractice from './Components/AreaOfPractice';
import ClientStories from './Components/ClientStories';
import TeamDetails from './Components/TeamDetails';
import FAQ from './Components/FAQ';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
function App() {
  return (
    <div className='App'>
      <DashBoard/>
      <Introduction/>
      <SuccessStories/>
      <AreaOfPractice/>
      <ClientStories/>
      <TeamDetails/>
      <FAQ/>
      <Subscribe/>
      <Footer/>
    </div>
  );
}
export default App;