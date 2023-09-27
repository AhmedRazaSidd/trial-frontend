import axios from 'axios';
import React, { useState } from 'react'
import { Api } from '../api';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddCompany = () => {
    const [addCompany, setAddCompany] = useState({ company_name: '', country: '', city: '', state: '', description: '' })
    const navigate = useNavigate();
    const addCompayHandle = () => {
        console.log('aa');
        console.log(addCompany);
        const { company_name, country, city, state, description } = addCompany;
        if (company_name && country && city && state && description) {

            axios.post(`${Api}/add-company`, addCompany)
                .then(response => {
                    console.log('Response:', response.data);
                    toast(response.data);
                    navigate('/')
                })
                .catch(error => {
                    console.error('Error:', error);
                });

        }
    }
    const getData = (e) => {
        setAddCompany({ ...addCompany, [e.target.name]: e.target.value });
    };
    return (
        <>
            <div className='col-lg-10'>
                <form method="post" className='box-shadow px-3 pb-3'>
                    <h3 className='mb-0 pt-3 fw-bold'>Add Company</h3>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Enter Company' name='company_name' onChange={getData} />
                        </div>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Enter Company Country' name='country' onChange={getData} />
                        </div>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Enter City' name='city' onChange={getData} />
                        </div>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Enter Company State' name='state' onChange={getData} />
                        </div>
                        <div className='col-lg-12'>
                            <textarea id="" rows="3" placeholder='Bio' name='description' onChange={getData}></textarea>
                        </div>
                        <div className='col-lg-12'>
                            <button type='button' className='btn btn-success d-block ms-auto mt-2' onClick={addCompayHandle}>Add Company</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddCompany