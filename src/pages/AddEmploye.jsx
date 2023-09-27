import React from 'react'

const AddEmploye = () => {
    return (
        <>
            <div className='col-lg-10'>
                <form action="" method="post" className='box-shadow px-3 pb-3'>
                    <h3 className='mb-0 pt-3 fw-bold'>Add Employe</h3>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Enter Employe Name' />
                        </div>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Enter Email' />
                        </div>
                        <div className='col-lg-6'>
                            <input type="text" placeholder='Phone' />
                        </div>
                        <div className='col-lg-6'>
                            <input type="number" placeholder='Employe Salary' />
                        </div>
                        <div className='col-lg-6'>
                            <select name="" id="">
                                <option value="">Manager 1</option>
                                <option value="">Manager 2</option>
                                <option value="">Manager 3</option>
                                <option value="">Manager 4</option>
                            </select>
                        </div>
                        <div className='col-lg-6'>
                            <select name="" id="">
                                <option value="">Company 1</option>
                                <option value="">Company 2</option>
                                <option value="">Company 3</option>
                                <option value="">Company 4</option>
                            </select>
                        </div>
                        <div className='col-lg-12'>
                            <button className='btn btn-success d-block ms-auto mt-2'>Add Employe</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddEmploye