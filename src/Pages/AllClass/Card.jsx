import { useContext } from 'react';
import useAdmin from '../../Hooks/useAdmin';
import useInstructor from '../../Hooks/useInstructor';
import { AuthContext } from '../../Providers/AuthProviders';
import { toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const Card = ({ d }) => {
    const { user , loading } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    let isAdmin, isInstructor;

    // const [isAdmin] = useAdmin();
    // const [isInstructor] = useInstructor();

    // if(loading){
    //     return <span className="loading loading-spinner loading-lg"></span>
    // }

    if (user) {
        [isAdmin] = useAdmin();
        [isInstructor] = useInstructor();
    }

    const enrolled = d.enrolled ? d.enrolled : 0;
    const available = d.seats - enrolled;


    const handleSelectButton = async (data) => {
        const { _id, className, email, name, price, image } = data;
        const info = {
            _id,
            className,
            price,
            instructorEmail: email,
            instructorName: name,
            studentName: user?.displayName,
            studentEmail: user?.email,
            image
        }
        // console.log(info);

        if (user && user?.email) {
            fetch('http://localhost:5000/student/class/select', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('access-token')}`
                },
                body: JSON.stringify(info)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success("successfully added to selected course");
                    }
                    else {
                        toast.error("You have already added this in selected course")
                    }
                })



        }

        else {
            toast.error("LogIn First to select course");
            navigate('/login', { state: { from: location } })
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full relative">
            <figure><img src={d.image} alt="class image" /></figure>
            <div className="card-body font-extrabold">
                <h2 className="card-title mt-3">{d.className}</h2>

                <div className='mt-6'>
                    <h3 className='mt-3'> Instructor : {d.name} </h3>
                    <h3 className='mt-3'> Price : ${d.price} </h3>
                    <h3 className='mt-3'> Available Seats : {available} </h3>

                </div>

                <div className="card-actions justify-end mt-10">
                    <button className="btn btn-primary absolute bottom-2 right-2"
                        disabled={user && (isAdmin || isInstructor || available === 0)}
                        onClick={() => handleSelectButton(d)}
                    >Select Course </button>
                </div>
            </div>
        </div>
    );
};

export default Card;