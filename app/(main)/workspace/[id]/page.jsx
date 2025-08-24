import ResponsiveSidebar from '@/components/custom/ResponsiveSidebar'
import CodeView from '@/components/custom/CodeView'
import React from 'react'

function Workspace() {
  return (
    <div className="h-screen flex bg-gray-50 dark:bg-gray-900">
      {/* Responsive Sidebar */}
      <ResponsiveSidebar />
      
      {/* Code View - Takes remaining space */}
      <div className="flex-1 min-w-0 bg-white dark:bg-gray-900">
        <CodeView />
      </div>
    </div>
  )
}

export default Workspace