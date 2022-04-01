import {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {MdContacts,MdTableChart, MdMap} from "react-icons/md"
import { ContactContext } from "../../context/ContactContext";
import TableView from './TableView';
import MapView from './MapView';

function ContactDetailsView() {
    const [tableView, setTableView] = useState(true);
    const [contacts, setContacts] = useContext(ContactContext);
    console.log(contacts)

  return (
    <>{
        !contacts.length > 0 ?
        <div className='no_contact_added'>
            <h3>No contacts have been added yet</h3>
            <Link to="/add-contact"><span>Add New Contact Here</span> <MdContacts /></Link>
        </div>
        :
        <div className='contact_added_view'>
            <div className='buttons_options'>
                <button onClick={() => setTableView(true)} className={`table ${tableView && "active"}`}><MdTableChart /></button>
                <button onClick={()=> setTableView(false)} className={`map ${!tableView && "active"}`}><MdMap /></button>
            </div>
            <div className='view_container'>
                {tableView && <TableView />}
                {!tableView && <MapView />}
            </div>
        </div>
    }
        
    </>
  )
}

export default ContactDetailsView