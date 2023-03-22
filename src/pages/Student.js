import {useState,useRef} from 'react';

const Student = () => {
    {/*declaring the student name and address*/}
    const nameRef = useRef();
    const addressRef =useRef();
    const emailRef = useRef();

    {/*creating a submit prevention feature for student form */}

    const handleSchoolSubmit = async e => {
        e.preventDefault();

        {/* here we will console log the students name & addresses*/}

        console.log(nameRef.current.value);
        console.log(addressRef.current.value);
        console.log(emailRef.current.value)

    };

    return (
        <div>
            <form className='flex flex-col w-36 justify-center ' onSubmit={handleSchoolSubmit}>
                <input type="text" placeholder='student name' ref={nameRef}/>
                <input type="text" placeholder='Address' ref={addressRef}/>
                <input type="text" placeholder='Email' ref={emailRef}/>
                <input type="submit" value='Add to list' />
            </form>
        </div>
    );
};

export default Student;

