import { useContext } from "react";
import { Link } from "react-router-dom";
import { MdContacts } from "react-icons/md";
import { ContactContext } from "../../context/ContactContext";

function TableView() {
  const [contacts, setContacts] = useContext(ContactContext);
  return (
    <>
      <div className="table_view_container">
        <p className="view_snippet">Table View</p>
        <table className="table_view">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
              <th>Longitude</th>
              <th>Latitude</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phoneNumber}</td>
                <td>
                  {
                    contact.address[
                      Math.floor(Math.random() * contact.address.length)
                    ]
                  }
                </td>
                <td>{contact.longitude}</td>
                <td>{contact.latitude}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="add_table_view_link">
        <Link to="/add-contact">
          <span>Add New Contacts Here</span> <MdContacts />
        </Link>
      </div>
    </>
  );
}

export default TableView;
