import Axios from 'axios';
import './App.css';
import WithListLoading from './component/withloadinglist';
import List from './component/list';
import { useEffect, useState } from 'react';

function App() {
  const ListLoading = WithListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({loading: true});
    const apiUrl = `https://api.github.com/users/hacktivist123/repos`;

    Axios.get(apiUrl).then((response) =>{
       const allRepos = response.data;
       setAppState({loading:false, repos: allRepos});
    });
    
  },[setAppState]);

  return (
    <div className='App'>
    <div className='container'>
      <h1>My Repositories</h1>
    </div>
    <div className='repo-container'>
      <ListLoading isLoading={appState.loading} repos={appState.repos} />
    </div>

  </div>
  );
}

export default App;
