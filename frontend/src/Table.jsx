import React from 'react'


export default function Table({Users}) {
  return (
    <div className="w-full h-auto flex items-center justify-center mt-6">
      <table className="table-auto lg:w-[75%] sm:w-[90%]">
          <thead className="text-xl text-orange-500 ">
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {Users.map((user) => {
                return (
                    <tr key={user.id}>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                        <td>{user.email}</td>
                    </tr>
                )
            })}
          </tbody>
        </table>
      </div>
  )
}
