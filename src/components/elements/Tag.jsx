function Tag({ addresses, setAddreses }) {
  const handleAddressFilter = (clickedAddress) => {
    const newArray = addresses.filter(
      (address) => address.toLowerCase() !== clickedAddress.toLowerCase()
    );
    setAddreses(newArray);
  };
  return (
    <div className="tags_container">
      {addresses.map((address, index) => (
        <div key={`${address}-index`} className="tag">
          <span className="tag_content">{address}</span>
          <span
            onClick={(e) =>
              handleAddressFilter(e.target.previousSibling.textContent)
            }
            className="close"
          >
            x
          </span>
        </div>
      ))}
    </div>
  );
}

export default Tag;
