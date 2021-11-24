import { useState } from "react";
import { nanoid } from "nanoid";
import { Input as BootstrapInput } from "reactstrap";

export const Input = ({ title, name, value, onChange }) => {
  const [id] = useState(nanoid());

  return (
    <div>
      <label htmlFor={id}>
        {title}
        <BootstrapInput id={id} name={name} value={value} onChange={onChange} />
      </label>
    </div>
  );
};
