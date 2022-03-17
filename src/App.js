import './App.css';

function App() {
  console.log(navigator.userAgentData)
  const userAgentData = navigator.userAgentData
  return (
    <div className="App">
      <header className="App-header">
        <h4>Brands</h4>
        {userAgentData.brands.map(item => (
          <p>{item.brand}: {item.version}</p>
        ))}
        <h4>Mobile</h4>
        <p>{userAgentData.mobile.toString()}</p>
        <h4>Platform</h4>
        <p>{userAgentData.platform}</p>
      </header>
    </div>
  );
}

export default App;
