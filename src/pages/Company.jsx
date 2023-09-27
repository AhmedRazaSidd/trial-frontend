import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Api } from '../api';

const Company = () => {

    const [Data, setData] = useState([])

    useEffect(() => {
        axios.get(`${Api}/get-company`)
            .then(response => {
                setData(response.data)
                localStorage.setItem('companies', JSON.stringify(response.data))
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [])


    return (
        <>

            <div className='col-lg-10 border'>
                <div style={{ height: 410, overflowY: 'scroll' }}>
                    <table className='table bordered w-100 table-hovered  w-100'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>#</td>
                                <td>Company</td>
                                <td>Description</td>
                                <td>Managers</td>
                                <td>Employes</td>
                                <td>Country</td>
                                <td>State</td>
                                <td>City</td>
                                <td>Status</td>
                                <td>Created at</td>
                            </tr>
                        </thead>
                        <tbody>

                            {Data.map((user, key) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{user.company_name}</td>
                                    <td style={{ width: 300, whiteSpace: 'normal' }}>{user.description}</td>
                                    <td>{user.manager.length > 0 ? user.manager.name : 'Manager Not Assign'}</td>
                                    <td>20</td>
                                    <td>{user.locations[0].country}</td>
                                    <td>{user.locations[0].city}</td>
                                    <td>{user.locations[0].state}</td>
                                    <td><span className={`badge ${user.status == 1 ? 'bg-success' : 'bg-danger'}`}>{user.status == 1 ? 'active' : 'inactive'}</span></td>
                                    <td>9-27-2023</td>
                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Company