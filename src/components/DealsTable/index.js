import React, {useState, useEffect} from "react";
import axios from "axios";
import "./DealsTable.scss";
import editIcon from "../../assets/img/edit.svg";
import deleteIcon from "../../assets/img/delete.svg";

const DealsTable = () => {
    const [clientsData, setClientsData] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('./database.json');
            setClientsData(result.data);
        };
        fetchData();
    }, []);

    return (
       <div className="table-container">
           <h1>Deals</h1>
           <table>
               <thead>
                   <tr>
                       <th>Contact Name</th>
                       <th>Date</th>
                       <th>Time</th>
                       <th>Employee</th>
                       <th>Role</th>
                       <th>Price</th>
                       <th>Status</th>
                       <th>Action</th>
                   </tr>
               </thead>
               <tbody>
                   {clientsData && clientsData.map(client => (
                       <tr key={client.id}>
                           <td className="fullname">{client.fullname}</td>
                           <td>{client.dealDate}</td>
                           <td>{client.dealTime}</td>
                           <td className="employee-fullname">{client.employee.fullname}</td>
                           <td className="role">{client.role}</td>
                           <td>{client.price}</td>
                           <td className="status">{client.status}</td>
                           <td>
                               <img src={editIcon} alt="edit"/>
                               <img src={deleteIcon} alt="delete"/>
                           </td>
                       </tr>
                   ))}
               </tbody>
           </table>
       </div>
    );
};

export default DealsTable;