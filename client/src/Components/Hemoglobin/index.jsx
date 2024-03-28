import React from 'react'
import './hemoglobin.css'

const Hemoglobin = ({ data }) => {
    const view=(e,index)=>{
        e.preventDefault()
        window.open(`http://localhost:3000/view?organization_name=${data[index]['organization_name']},patient_id=${data[index]['patient_id']},report_date=${data[index]['report_date']},test_name=${data[index]['test_name']},hemoglobin=${data[index]['hemoglobin']},des=${data[index]['des']},`)
    }
    return (
        <div>{
            data && data.length!==0  ?
                <>
                    <p>Hemoglobin</p>
                    <div className='container'>
                        <table className='responsive-table'>
                            <thead>
                                <tr>
                                    <th scope="col">organization_name</th>
                                    <th scope="col">patient_id</th>
                                    <th scope="col">report_date</th>
                                    <th scope="col">test_name</th>
                                    <th scope="col">hemoglobin</th>
                                    <th scope="col">des</th>
                                    <th scope="col">View Report</th>
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
                                            <td>{e['hemoglobin']}</td>
                                            <td>{e['des']}</td>
                                            <td><button onClick={(e) => view(e,index)}>View</button></td>
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

export default Hemoglobin