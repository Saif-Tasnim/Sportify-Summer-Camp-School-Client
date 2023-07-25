import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';

const Card = ({ d }) => {
    const enrolled = d.enrolled ? d.enrolled : 0 ;
    const available = d.seats - enrolled;
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full relative">
            <figure><img src={d.image} alt="class image" /></figure>
            <div className="card-body">
                <h2 className="card-title mt-3">{d.className}</h2>
                
                <div className='mt-6'>
                  <h3 className='mt-3'> Instructor : {d.name} </h3>
                  <h3 className='mt-3'> Price : ${d.price} </h3>
                  <h3 className='mt-3'> Available Seats : {available} </h3>

                </div>
               
                <div className="card-actions justify-end mt-10">
                    <button className="btn btn-primary absolute bottom-2 right-2"
                    disabled={isAdmin || isInstructor || available===0}
                    >Select Course </button>
                </div>
            </div>
        </div>
    );
};

export default Card;