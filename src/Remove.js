import { useState } from "react";
const Remove = (props) => {
  const [removeData, setRemovedata] = useState(props.data);
  const handleRemove = (item) => {
    setRemovedata(removeData.filter((i) => i.id !== item.id));
  };
  return (
    <>
      {removeData?.map((item, i) => {
        return (
          <>
            <div key={i}>
              <h1>{item.title}</h1>
              <h1>{item.location}</h1>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Remove;
