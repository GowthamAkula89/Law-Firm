import './App.css';
import DashBoard from './Components/Dashboard';
import Introduction from './Components/Introduction';
import SuccessStories from './Components/SuccessStories';
import AreaOfPractice from './Components/AreaOfPractice';
import ClientStories from './Components/ClientStories';
function App() {
  return (
    <div className='App'>
      <DashBoard/>
      <Introduction/>
      <SuccessStories/>
      <AreaOfPractice/>
      <ClientStories/>
    </div>
  );
}
export default App;