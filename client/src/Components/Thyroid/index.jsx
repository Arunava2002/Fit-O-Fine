import React from 'react'
import './thyroid.css'

const Thyroid = ({ data }) => {
    return (
        <div>
            {
                data && data.length!==0 ?
                    <>
                        <p>Thyroid</p>
                        <div className='container'>
                            <table className='responsive-table'>
                                <thead>
                                    <tr>
                                        <th scope="col">organization_name</th>
                                        <th scope="col">patient_id</th>
                                        <th scope="col">report_date</th>
                                        <th scope="col">test_name</th>
                                        <th scope="col">T3</th>
                                        <th scope="col">T4</th>
                                        <th scope="col">thyroid_stimulating_hormone</th>
                                        <th scope="col">des</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((e, index) => (
                                            <tr key={index}>
                                                <th scope='row'>{e['organization_name']}</th>
                                                <td>{e['patient_id']}</td>
                                                <td>{e['report_date']}</td>
                                                <td>{e['test_name']}</td>
                                                <td>{e['T3']}</td>
                                                <td>{e['T4']}</td>
                                                <td>{e['thyroid_stimulating_hormone']}</td>
                                                <td>{e['des']}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                    :<></>
            }
        </div>
    )
}

export default Thyroid