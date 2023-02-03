import React, {useEffect, useState} from 'react';

const URL = 'https://jsonplaceholder.typicode.com/comments'

export default function TableData() {
    const [data, setData] = useState(); 

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(URL);
            const jsonData = await response.json();
            setData(jsonData);
        }
        fetchData();
    },[]);

    return(
        <>
        <table>
            <caption>Data from JSON API</caption>
            <thead>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Body</th>
            </thead>
            <tbody>
                { data.map(d => (
                    <tr key={d.id}>
                        <th scope="row">{d.name}</th>
                        <th>{d.email}</th>
                        <th>{d.body}</th>
                    </tr>
                ))}
            </tbody>
        </table>
        </>
    )
}