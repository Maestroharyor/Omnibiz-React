import {useState, useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import {MdContacts,MdTableChart, MdMap} from "react-icons/md"
import { ContactContext } from "../../context/ContactContext";
import TableView from './TableView';
import MapView from './MapView';

function ContactDetailsView() {
    const [tableView, setTableView] = useState(true);
    const [contacts, setContacts] = useContext(ContactContext);

    useEffect(()=> {
        const savedData = JSON.parse(localStorage.getItem('omnibiz-contact'));
        if(savedData !== null){
            setContacts(savedData)
        }
      }, [])

  return (
    <>{
        !contacts.length > 0 ?
        <div className='no_contact_added'>
            <h1>No contacts have been added yet</h1>
            <Link to="/add-contact"><span>Add New Contact Here</span> <MdContacts /></Link>
        </div>
        :
        <div className='contact_added_view'>
            <div className='buttons_options'>
                <button onClick={() => setTableView(true)} className={`table ${tableView && "active"}`} title="Switch to table View" aria-label='"Switch to table View'><MdTableChart /></button>
                <button onClick={()=> setTableView(false)} className={`map ${!tableView && "active"}`} title="Switch to map View" aria-label='"Switch to map View'><MdMap /></button>
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