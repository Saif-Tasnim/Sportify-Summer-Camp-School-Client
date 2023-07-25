import React, { useContext } from 'react';
import useClass from '../../../Hooks/useClass';
import { AuthContext } from '../../../Providers/AuthProviders';
import ClassCard from '../../../Components/components/ClassCard/ClassCard';

const MyClass = () => {
    const { user } = useContext(AuthContext);
    const [classList, refetch] = useClass();

    return (
        <div className='pt-20 bg-base-200 pb-10'>
            <h1 className='pt-10 mb-16 text-center text-3xl text-[#798132] underline'> All Class Of {user?.displayName} </h1>

            {/* class card  */}
            <div className='w-[90%] mx-auto grid grid-cols-3 gap-10'>
                {
                    classList.map(c => <ClassCard
                        key={c._id}
                        c={c}
                    ></ClassCard>)
                }

            </div>
        </div>
    );
};

export default MyClass;