import {useRef} from "react";

const Student = () => {
    {/*declaring the student name and address*/}
    const nameRef = useRef();
    const addressRef =useRef();
    const emailRef = useRef();

    {/*creating a submit prevention feature for student form */}

    const handleSchoolSubmit = async e => {
        e.preventDefault();
    {/* here we will console log the students name & addresses*/}


    return (
        <div>
            <form onSubmit={handleSchoolSubmit}>
                <input type="text" placeholder='student name' ref={nameRef}/>
                <input type="text" placeholder='Address' ref={addressRef}/>
                <input type="text" placeholder='Email' ref={emailRef}/>
                <input type="Submit" value='Add to list' />
            </form>
        </div>
    );
}

export default Student;

