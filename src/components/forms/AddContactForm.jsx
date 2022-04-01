import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContactContext } from "../../context/ContactContext";
import { getRandomLocation } from "../../functions/LocationHandler";
import { MdCheck } from "react-icons/md";
import Tag from "../elements/Tag";

function AddContactForm() {
  // UseHistory
  const navigate = useNavigate();

  // Context Usage
  const [contacts, setContacts] = useContext(ContactContext);

  // Data Entry States
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [singleAddress, setSingleAddress] = useState("");
  const [addresses, setAddresses] = useState([]);

  // Error States
  const [nameError, setNameError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [addressesError, setAddressesError] = useState([]);

  // Generate Randome Longitude and Latitude
  useEffect(() => {
    setLatitude(getRandomLocation(20, 70));
    setLongitude(getRandomLocation(-110, -100));
  }, []);

  // DOM Manipulation to clear address field
  const clearAddressesField = () => {
    let addressField = document.querySelector(".addresses_input");
    addressField.value = "";
  };

  // Handle Input Fields Functions
  const handleAddress = (e) => {
    e.preventDefault();
    setAddressesError("");
    if (addresses.length !== 5) {
      if (singleAddress.trim().length > 0) {
        setAddresses((previousAddresses) => [
          ...previousAddresses,
          singleAddress
        ]);
        clearAddressesField();
      }
    } else {
      setAddressesError("You can't have more than 5 addresses");
    }
  };

  const handleEmail = (text) => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (text.length > 2) {
      if (text.match(regexEmail)) {
        setEmail(text);
        setEmailError("");
      } else {
        setEmailError("Please enter a valid email address");
      }
    } else {
      setEmailError("");
    }
  };

  const handlePhoneNumber = (text) => {
    const regexPhone =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (text.length > 2) {
      if (text.match(regexPhone)) {
        setPhoneNumber(text);
        setPhoneNumberError("");
      } else {
        setPhoneNumberError("Please enter a valid phone number");
      }
    } else {
      setPhoneNumberError("");
    }
  };

  // Form Submit Function

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name &&
      phoneNumber &&
      email &&
      addresses.length > 0 &&
      !nameError &&
      !phoneNumberError &&
      !emailError &&
      !addressesError
    ) {
      const newContext = {
        name,
        email,
        phoneNumber,
        address: addresses,
        longitude,
        latitude
      };

      setContacts((previouscontacts) => [...previouscontacts, newContext]);
      alert("Contact Added Successfully");
      e.target.reset();
      navigate("/");
    } else {
      (!name || nameError) && alert("Please enter your name to continue");
      (!phoneNumber || phoneNumberError) &&
        alert("Please enter your valid phone number to continue");
      (!email || emailError) &&
        alert("Please enter your valid email to continue");
      (addresses.length === 0 || addressesError) &&
        alert("Please enter your address(es) to continue");
    }
  };

  return (
    <div className="add_contact">
      <h2>Add a New Contact</h2>
      <form action="" className="add_contact_form" onSubmit={handleSubmit}>
        <div className="form_control">
          <label htmlFor="">
            Name <span className="required">*</span>
          </label>
          <input type="text" onChange={(e) => setName(e.target.value)} />
          {nameError && <p className="form_error">{nameError}</p>}
        </div>
        <div className="form_control">
          <label htmlFor="">
            Phone Number <span className="required">*</span>
          </label>
          <div className="phone_form_control">
            <span>+234</span>
            <input
              type="text"
              onChange={(e) => handlePhoneNumber(e.target.value)}
              placeholder="Enter without Country Code"
            />
          </div>

          {phoneNumberError && <p className="form_error">{phoneNumberError}</p>}
        </div>
        <div className="form_control">
          <label htmlFor="">
            Email <span className="required">*</span>
          </label>
          <input type="text" onChange={(e) => handleEmail(e.target.value)} />
          {emailError && <p className="form_error">{emailError}</p>}
        </div>
        <div className="form_control form_addresses">
          <label htmlFor="">
            Addresses <span className="required">*</span>
          </label>
          <input
            type="text"
            className="addresses_input"
            onChange={(e) => setSingleAddress(e.target.value)}
          />
          {addressesError && <p className="form_error">{addressesError}</p>}
          <button className="floating" onClick={handleAddress}>
            Add Address
          </button>
          {addresses.length > 0 && (
            <Tag addresses={addresses} setAddreses={setAddresses} />
          )}
        </div>
        <div className="form_control">
          <label htmlFor="">
            Longitude <span className="required">*</span>
          </label>
          <input
            type="text"
            onChange={(e) => setLongitude(e.target.value)}
            disabled
            placeholder={longitude}
          />
        </div>
        <div className="form_control">
          <label htmlFor="">
            Latitude <span className="required">*</span>
          </label>
          <input
            type="text"
            onChange={(e) => setLatitude(e.target.value)}
            disabled
            placeholder={latitude}
          />
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
