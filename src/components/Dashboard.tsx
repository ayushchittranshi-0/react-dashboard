import React from 'react';


const Header = () => (
  <header className="flex items-center justify-between">
    <h1 className="text-xl font-bold">Dashboard</h1>
    <div className="flex items-center space-x-4">
      <button className="bg-orange-500 text-white px-4 py-2 rounded-lg">Generate Credential</button>
      <span className="font-medium">Michael Simpson</span>
    </div>
  </header>
);

const StatCard = ({ title, value, subtitle, bgColor }) => (
  <div className={`col-span-1 p-6 rounded-lg ${bgColor}`}>
    <h3 className="text-lg font-bold">{title}</h3>
    <div className="text-3xl font-bold">{value}</div>
    {subtitle && <p>{subtitle}</p>}
  </div>
);

const EventsCard = () => (
  <div className="col-span-3 flex space-x-4">
    <div className="bg-gray-700 flex-1 p-4 rounded-lg">
      <h3 className="text-sm font-medium">Events - Last Hour</h3>
      <div className="mt-4 h-16 bg-gray-600 rounded-lg"></div>
    </div>
  </div>
);

const RecentActivity = () => (
  <StatCard
    title="Recent"
    value={
      <ul className="mt-4 space-y-2">
        <li>Dropbox - PostgreSQL</li>
        <li>Django - RDS</li>
        <li>Dropbox - Staging</li>
      </ul>
    }
    bgColor="bg-gray-700"
  />
);

const Dashboard = () => (
  <div className="flex h-screen bg-gray-900 text-gray-200 font-sans">
    <Sidebar />
    <main className="flex-1 p-4 space-y-4">
      <Header />
      <section className="grid grid-cols-3 gap-4">
        <EventsCard />
        <StatCard title="Today" value="3,020" subtitle="Risk Rating\nUptime: 100%\nAnomalies: 14" bgColor="bg-yellow-600" />
        <StatCard title="Total Consumers" value="6,992" subtitle="Mo. Over Mo. +5,209" bgColor="bg-orange-600" />
        <StatCard title="Active Users" value="248" subtitle="Mo. Over Mo. +319" bgColor="bg-yellow-600" />
        <StatCard title="Security Status" value="3,949" subtitle="Total Queries\nPolicies Triggered: 53\nPolicies Suspension Requests: 25" bgColor="bg-gray-700" />
        <StatCard title="Healthy Sidecars" value="8,550" subtitle="1,046" bgColor="bg-gray-700" />
        <StatCard title="Users" value="570" subtitle="Mo. Over Mo. +672" bgColor="bg-yellow-600" />
        <RecentActivity />
      </section>
    </main>
  </div>
);

export default Dashboard;
