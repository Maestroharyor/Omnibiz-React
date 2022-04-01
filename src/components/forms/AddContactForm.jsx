import { useState } from "react";
import { MdCheck } from "react-icons/md";
import Tag from "../elements/Tag";

function AddContactForm() {
  const [singleAddress, setSingleAddress] = useState("");
  const [addresses, setAddresses] = useState([]);

  const clearAddressesField = () => {
    let addressField = document.querySelector(".addresses_input");
    addressField.value = ""
  };

  const handleAddress = (e) => {
    e.preventDefault();
    if (singleAddress.trim().length > 0) {
      setAddresses((previousAddresses) => [
        ...previousAddresses,
        singleAddress
      ]);
      clearAddressesField();
      
    }
  };

  return (
    <div className="add_contact">
      <h2>Add a New Contact</h2>
      <form action="" className="add_contact_form">
        <div className="form_control">
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div className="form_control">
          <label htmlFor="">Phone Number</label>
          <input type="text" />
        </div>
        <div className="form_control">
          <label htmlFor="">Email</label>
          <input type="text" />
        </div>
        <div className="form_control form_addresses">
          <label htmlFor="">Addresses</label>
          <input
            type="text"
            className="addresses_input"
            onChange={(e) => setSingleAddress(e.target.value)}
          />
          <button className="floating" onClick={handleAddress}>
            Add Address
          </button>
          {addresses.length > 0 && (
            <Tag addresses={addresses} setAddreses={setAddresses} />
          )}
        </div>
        <div className="form_control">
          <label htmlFor="">Longitude</label>
          <input type="text" />
        </div>
        <div className="form_control">
          <label htmlFor="">Latitude</label>
          <input type="text" />
        </div>

        <div className="form_submit">
          <button>
            <span>Add Contact</span>
            <MdCheck />{" "}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddContactForm;
