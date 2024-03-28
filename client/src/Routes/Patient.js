import { useEffect, useState } from "react";
import { connect } from "react-redux";

import Navbar from "../Components/Navbar";
import moment from "moment";
import axios from "axios";
import './patient.css'
const Patient = ({ orgContract, web3, user }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {


        (async () => {
            let accounts = await window.ethereum.request({
                method: "eth_accounts",
            });
            try {
                const allorg = await axios.post('http://localhost:4000/getallorg', {
                    org_name: user.name

                })
                //console.log(allorg.data[0]['report_date'])
                let x = [];
                let patients = await orgContract.contract.methods
                    .getPatients()
                    .call({ form: accounts[0] });
                //console.log(patients)

                for (var i = 0; i < patients.length; i++) {
                    for (var j = 0; j < allorg.data.length; j++) {
                        if (patients[i]['orgname'] === user.name && patients[i]['pid'] === allorg.data[j]['patient_id']) {
                            x.push({
                                "id": patients[i]['pid'],
                                "name": patients[i]['patient_name'],
                                "addr": patients[i]['addr'],
                                'age': patients[i]['age'],
                                'mobno': patients[i]['mobno'],
                                'email': patients[i]['email'],
                                //"report_date": moment.unix(patients[i]['report_date'] / 1000).format('DD/MM/YYYY'),
                                'report_date':allorg.data[j]['report_date'],
                                'test_name': allorg.data[j]['test_name'],
                                // 'description': patients[i]['description'],
                                'description': allorg.data[j]['des'],
                            })
            
                        }
                    }

                }
                // const y=[];
                // while(x.length) y.push(x.splice(0,9))

                console.log(x)
                setData(x);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        })();

        return () => { };
    }, [orgContract]);
    return (
        <>
            <Navbar />
            <div>


                {/* <div className="card">
                    <div className="card-body"> */}

                        {loading && <p>Loading...</p>}
                        {error && <p>{error}</p>}
                        {data && data.length === 0 && (
                            <p className="m-0">There is no patient added yet!!</p>
                        )}
                        {data && data.length !== 0 && (
                            <>
                                <h3>Patient Details</h3>
                                <hr />
                                {data && data.length !== 0 ? (
                                <div className="container">
                                    <table className='responsive-table'>
                                        <thead>
                                            <tr>
                                                <th
                                                    // style={{ "paddingTop": "20px", "paddingBottom": "20px", "paddingLeft": "20px" }}
                                                >Id</th>
                                                <th
                                                    //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                >Patient Name</th>
                                                <th
                                                    //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                >Address</th>
                                                <th
                                                    //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                >Age</th>
                                                <th
                                                    //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                >Contact Number</th>
                                                <th
                                                    //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                >Email</th>
                                                <th
                                                    //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                >Report Date</th>
                                                <th
                                                    //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                >Test name</th>
                                                <th
                                                    //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                >Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, index) =>
                                            (
                                                <tr key={index} >
                                                    <th scope="row"
                                                        //style={{ "paddingTop": "20px", "paddingBottom": "20px", "paddingLeft": "20px" }}
                                                    >{item['id']}</th>
                                                    <td
                                                        //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                    >{item['name']}</td>
                                                    <td
                                                        //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                    >{item['addr']}</td>
                                                    <td
                                                        //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                    >{item['age']}</td>
                                                    <td
                                                        //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                    >{item['mobno']}</td>
                                                    <td
                                                        //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                    >{item['email']}</td>
                                                    <td
                                                        //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                    >{item['report_date']}</td>
                                                    <td
                                                        //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                    >{item['test_name']}</td>
                                                    <td
                                                        //style={{ "paddingTop": "20px", "paddingBottom": "20px" }}
                                                    >{item['description']}</td>
                                                </tr>
                                            )
                                            )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                                ) : (
                                    //className="text-center"
                                    <p> 
                                        There is no unverified organization
                                    </p>
                                )}
                            </>
                        )}
                    {/* </div>
                </div> */}
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        orgContract: state.contractReducer,
        web3: state.web3Reducer,
        user: state.userReducer
    };
};
export default connect(mapStateToProps)(Patient);
