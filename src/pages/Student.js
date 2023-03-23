import React, { useState, useEffect } from 'react';
import axios from "axios";

const studentForm = () => {
    const [schools, setSchools] = useState([]);

    useEffect(() => {
        getAllSchools()
            .then( data => setSchools(data) );
    }, []);

    const getAllSchools = async () => {
        const { data } = await axios.get(
            'https://yhshmwvprwbcxpvxlihh.supabase.co/rest/v1/schools?select=schools',
            {
                headers: {
                    apikey:
                        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inloc2htd3ZwcndiY3hwdnhsaWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1NTczMjYsImV4cCI6MTk5NDEzMzMyNn0.nMXTcW8_a0E5l5Ud0B0_q_uD6ByKonuuSl70AEPMFGU',
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inloc2htd3ZwcndiY3hwdnhsaWhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg1NTczMjYsImV4cCI6MTk5NDEzMzMyNn0.nMXTcW8_a0E5l5Ud0B0_q_uD6ByKonuuSl70AEPMFGU',
                },
            }
        );

        // console.log(data);

        return data;
    };

    return (
        <>
            <form>
                <input type='text' placeholder='Enter Student name' />

                <select>
                    <option selected>-- select a school ---</option>
                    {
                        schools.map( item => <option value={item.id}>{item.name}</option>)
                    }
                </select>
            </form>
        </>
    );
};

export default studentForm;