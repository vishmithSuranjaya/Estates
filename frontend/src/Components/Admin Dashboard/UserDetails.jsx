import React from 'react'

const UserDetails = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-50 h-screen">
        {/* Header */}
        <Header />

        {/* Main Section */}
        <div className="p-4 flex-1 overflow-y-auto">
          {/* Stats Section */}
          <Stats />

          {/* Chart Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Chart />
            <Chart /> {/* Add another chart if needed */}
          </div>

          {/* Custom Content */}
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDetails
