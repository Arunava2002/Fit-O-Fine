import React from 'react'
import './cbc.css'

const CBC = ({ data }) => {
    return (
        <div>{
            data && data.length!==0 ?
                <>
                    <p>Complete Blood Count</p>
                    <div className='container'>
                        <table className='responsive-table'>
                            <thead>
                                <tr>
                                    <th scope="col">organization_name</th>
                                    <th scope="col">patient_id</th>
                                    <th scope="col">report_date</th>
                                    <th scope="col">test_name</th>
                                    <th scope="col">hemoglobin</th>
                                    <th scope="col">rbc</th>
                                    <th scope="col">hct</th>
                                    <th scope="col">mcv</th>
                                    <th scope="col">mch</th>
                                    <th scope="col">mchc</th>
                                    <th scope="col">rdw_cv</th>
                                    <th scope="col">tlc</th>
                                    <th scope="col">des</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data && data.map((e, index) => (
                                        <tr key={index}>
                                            <th scope="row">{e['organization_name']}</th>
                                            <td>{e['patient_id']}</td>
                                            <td>{e['report_date']}</td>
                                            <td>{e['test_name']}</td>
                                            <td>{e['hemoglobin']}</td>
                                            <td>{e['rbc']}</td>
                                            <td>{e['hct']}</td>
                                            <td>{e['mcv']}</td>
                                            <td>{e['mch']}</td>
                                            <td>{e['mchc']}</td>
                                            <td>{e['rdw_cv']}</td>
                                            <td>{e['tlc']}</td>
                                            <td>{e['des']}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </> : <></>
        }
        </div>
    )
}

export default CBC