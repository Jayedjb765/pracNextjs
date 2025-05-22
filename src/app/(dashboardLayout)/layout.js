import Sidebar from '@/components/shared/Sidebar';
import React from 'react';

const DashBoardLayout = ({ children }) => {
    return (
        <div className='flex'>
            <Sidebar />
            {children}
        </div>
    );
};

export default DashBoardLayout;