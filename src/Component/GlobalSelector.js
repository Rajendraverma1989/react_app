import Form from "react-bootstrap/Form";
import React from "react";
export const GlobalFilter = ({ apiData, setAppData }) => {
   // Update the state when input changes
  const handleFilterChange = (e) => {
    setAppData(e?.target?.value)
    console.log('print:',e?.target?.value);
  };

  return (
    <div style={{ width: "500px" }}>
      <Form.Select aria-label="Default select example" onChange={(e)=>handleFilterChange(e)}>
      <option value=''>Select item</option>
      {apiData?.map((item,i) =>{
        return <option key={i} value={item}>{item}</option>
      })}
    </Form.Select>
    </div>
  );
};
