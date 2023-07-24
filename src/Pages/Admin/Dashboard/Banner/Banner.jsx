import React from 'react';
import adminImg from '../../../../assets/Admin/stanley-dai-73OZYNjVoNI-unsplash.jpg';
import instructorImg from '../../../../assets/Instructors/stanley-dai-73OZYNjVoNI-unsplash.jpg';
import useAdmin from '../../../../Hooks/useAdmin';
import useInstructor from '../../../../Hooks/useInstructor';

const Banner = () => {
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div>
      {isAdmin && <img src={adminImg} className='bg-cover w-full h-screen' alt="" />}

      {isInstructor &&  <img src={instructorImg} className='bg-cover w-full h-screen' alt="" />}
      
    </div>
  );
};

export default Banner;