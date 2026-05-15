import React from 'react'
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { members } from '../Api/api';

const Table = styled.table`
    border: 2px solid grey;
    margin: 2em auto;
    width: 80%;
    font-family: Montserrat;
`;


const Members = () => {
  const [data, setdata] = useState([])
  useEffect(() => {
    const fetchdata = async () => {
      const res = await members()
      setdata(res.data)
    }
    fetchdata()
  }, [])
  return (
    <div>
      <u style={{ color: 'red' }}><h1 style={{ fontFamily: 'Montserrat', fontSize: '3em', marginTop: '2em', color: 'black', marginLeft: '2em' }}>Members</h1></u>
      <Table border="2">
        <tr>
          <th>Member ID</th>
          <th>Member Name</th>
          <th>Phone Number</th>
        </tr>
        {data.map((i, index) => (
          <tr key={index} >
            <td style={{ padding: '5px' }} >{i.userId}</td>
            <td style={{ padding: '5px' }}>{i.name}</td>
            <td style={{ padding: '5px' }}>{i.phone}</td>
          </tr>
        ))}
      </Table>
    </div>
  )
}

export default Members