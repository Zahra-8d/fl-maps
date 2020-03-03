import React from 'react'
import { Table  } from 'reactstrap'
import { display} from './helper'
import TableData from './TableData'

export const Head = (props) => {
  let titles = props.titles.map(ele => {
    return <th key={ele}>{ele}</th>
  })
  return (
    <thead>
      <tr>
        {titles}
      </tr>
    </thead>
  )
}

const AdminTable = ({ users, changeUserRole, deleteUser, events, isAllEvents, deleteAllEvents}) => {
  const titles = display.map((ele) => {
    return ele.title
  })

  return (
    <Table>
      <Head titles={titles} />
      <Rows usersData={users} userEvents={events} deleteAllEvents={deleteAllEvents}
        changeUserRole={changeUserRole} deleteUser={deleteUser} isAllEvents={isAllEvents} />
    </Table>
  )
}

export function Rows(props) {
  const tableRows = props.usersData.map(user => { 
    return (
      <tr key={user._id}>
        {display.map((ele, i) => {
          return <TableData tableDataType={ele.tableDataType} user={user} key={i} {...props} />
        })}
      </tr>
    )
  })

  return (
    <tbody>
      {tableRows}
    </tbody>
  )
}

export default AdminTable