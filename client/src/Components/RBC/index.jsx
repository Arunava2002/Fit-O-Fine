import React from 'react'
import './rbc.css'

const RBC = ({ data }) => {
    return (
        <div>{
            data && data.length!==0  ?
                <>
                    <p>RBC</p>
                    <div className='container'>
                        <table className='responsive-table'>
                            <thead>
                                <tr>
                                    <th scope="col">organization_name</th>
                                    <th scope="col">patient_id</th>
                                    <th scope="col">report_date</th>
                                    <th scope="col">test_name</th>
                                    <th scope="col">rbc</th>
                                    <th scope="col">des</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.map((e, index) => (
                                        <tr key={index}>
                                            <th scope='row'>{e['organization_name']}</th>
                                            <td>{e['patient_id']}</td>
                                            <td>{e['report_date']}</td>
                                            <td>{e['test_name']}</td>
                                            <td>{e['rbc']}</td>
                                            <td>{e['des']}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </> : <></>}
        </div>
    )
}

export default RBC