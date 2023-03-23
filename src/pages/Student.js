import {useState, useRef} from 'react';
import axios from "axios";

const Student = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const nameRef = useRef();
    const addressRef = useRef();
    const emailRef = useRef();

    const handleSchoolSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        try {
            const { data } = await axios.post(
                'https://yhshmwvprwbcxpvxlihh.supabase.co/rest/v1/students',
                {
                    name: nameRef.current.value,
                    address: addressRef.current.value,
                    email: emailRef.current.value,
                },
                {
                    headers: {
                        apikey:
                            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inloc2htd3ZwcndiY3hwdnhsaWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1NTczMjYsImV4cCI6MTk5NDEzMzMyNn0.nMXTcW8_a0E5l5Ud0B0_q_uD6ByKonuuSl70AEPMFGU',
                        Authorization:
                            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inloc2htd3ZwcndiY3hwdnhsaWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1NTczMjYsImV4cCI6MTk5NDEzMzMyNn0.nMXTcW8_a0E5l5Ud0B0_q_uD6ByKonuuSl70AEPMFGU',
                    },
                }
            );
            console.log(data);
            nameRef.current.value = '';
            addressRef.current.value = '';
            emailRef.current.value = '';
        } catch (error) {
            setErrorMessage('Error submitting form');
        }
    };

    return (
        <div>
            <form className='flex flex-col w-36 justify-center ' onSubmit={handleSchoolSubmit}>
                <input type='text' placeholder='student name' ref={nameRef} />
                <input type='text' placeholder='Address' ref={addressRef} />
                <input type='text' placeholder='Email' ref={emailRef} />
                <input type='submit' value='Add to list' />
            </form>
            {errorMessage && <div className='text-red-500'>{errorMessage}</div>}
        </div>
    );
};

export default Student;