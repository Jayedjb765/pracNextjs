import Footer from '@/components/shared/Footer';
import React from 'react';

const Footerlayout = ({ children }) => {
    return (
        <div>

            {children}
            <Footer />
        </div>
    );
};

export default Footerlayout;