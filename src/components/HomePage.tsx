import axios from "axios";
import React, { useEffect, useState } from 'react';

const HomePage = () => {
    const [data, setData] = useState([])
    useEffect(()=> {
        axios.get('/users')
            .then((res)=> {
                setData(res.data)
                console.log(res.data)
            })
            .catch((err)=>console.log(err))
    }, [])

    return (
        <>
            <div className="container-fluid">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Pet Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((user: any)=> {
                                return (<tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.petid}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default HomePage