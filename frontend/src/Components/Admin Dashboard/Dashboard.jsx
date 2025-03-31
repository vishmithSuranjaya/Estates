// Dashboard.jsx
import Sidebar from './Sidebar';
import Stats from './Stats';
import Chart from './Chart';
import UserDetails from './UserDetails';

const Dashboard = () => {
  

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Stats title="Users" value="125" />
          <Stats title="Properties" value="75" />
          {/* <Stats title="Revenue" value="$1000" /> */}
        </div>

        {/* Chart Section */}
        <div className="my-6">
          <Chart />
        </div>

        {/* User Table Section */}
        <div className="my-6">
          <UserDetails users={users} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
