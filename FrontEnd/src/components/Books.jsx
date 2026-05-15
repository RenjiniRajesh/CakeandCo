import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { books } from '../Api/api'

const Table = styled.table`
    border: 2px solid grey;
    margin: 2em auto;
    width: 80%;
    font-family: Montserrat;
`;

const Books = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            const res = await books()
            setdata(res.data)
        }
        fetchdata()
    }, [])
    return (
        <div>
            <u style={{ color: 'red' }}><h1 style={{ fontFamily: 'Montserrat', fontSize: '3em', marginTop: '2em', color: 'black', marginLeft: '2em' }}>Books</h1></u>
            <Table border='2'>
                <tr>
                    <th style={{ padding: '5px',textAlign:'center' }}>Book ID</th>
                    <th style={{ padding: '5px',textAlign:'center' }}>Book Title</th>
                    <th style={{ padding: '5px',textAlign:'center' }}>Author</th>
                </tr>
                {data.map((i, index) => (
                    <tr>
                        <td style={{ padding: '5px' }}>{i.bookId}</td>
                        <td style={{ padding: '5px' }}>{i.title}</td>
                        <td style={{ padding: '5px' }}>{i.author}</td>
                    </tr>
                ))}
            </Table>
        </div>
    )
}

export default Books