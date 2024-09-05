// pages/index.ts
import Dashboard from "./_component/Dashboard"

const Home: React.FC = () => {
  return (
    <div>
     
      <div className="ml-64 p-8">
        <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
        <Dashboard/>
      </div>
    </div>
  );
};

export default Home;
