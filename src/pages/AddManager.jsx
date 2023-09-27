import React, { useEffect, useState } from 'react'

const AddManager = () => {

    const [GeTCompany, setGeTCompany] = useState([])

    useEffect(() => {
        setGeTCompany(JSON.stringify(localStorage.getItem('companies')))
    }, [])


    return (
        <>
            <div className='col-lg-10'>
                <form action="" method="post" className='box-shadow px-3 pb-3'>
                    <h3 className='mb-0 pt-3 fw-bold'>Add Manager</h3>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Manager Name' />
                        </div>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Phone' />
                        </div>
                        <div className='col-lg-6'>
                            <select name="" id="">
                                {
                                    GeTCompany.map((company, key) => (
                                        <option value={company.company_value} key={key}>{company}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='col-lg-12'>
                            <button className='btn btn-success d-block ms-auto mt-2'>Add Manager</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddManager