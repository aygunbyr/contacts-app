import { useEffect, useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key]
        .toString()
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase());
    });
  });

  useEffect(() => {}, [filterText]);

  const handleChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Filter contact"
        value={filterText}
        onChange={handleChange}
      />
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
        ))}
      </ul>

      <p>Total contacts ({filtered.length})</p>
    </>
  );
}

export default List;
