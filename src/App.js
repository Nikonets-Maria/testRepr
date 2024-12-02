import{ Provider } from 'react-redux'
import { store } from './store';
import User from './components/User';
function App() {
  return (
    <Provider store={store}>
      <div>
        <User/>
      </div>
    </Provider>
    
  );
}

export default App;
