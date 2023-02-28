import React, { useMemo, useEffect, useState } from "react";
import Table from "./TableApi";

const ResourcesTable = () => {
  const [apiData, setApiData] =useState([]);
  const [appData, setAppData] = useState('');
  const [appDataApiRes, setAppDataApiRes] = useState([]);

  const fetchApiData = async()=>{
    return await fetch('https://engineering-task.elancoapps.com/api/resources')
    .then((response) => response.json())
    .then((data) => {setApiData(data)});
  }

  useEffect(()=>{
  fetchApiData();
  },[]);

  const appTableData = async()=>{
    if(appData !== ''){
      return await fetch(`https://engineering-task.elancoapps.com/api/resources/${appData}`)
      .then((response) => response.json())
      .then((data) => {setAppDataApiRes(data)});
    }else{
      setAppDataApiRes([])
    }
  }
  useEffect(()=>{
    appTableData();
    },[appData])

  const columns = useMemo(() => {

    const columnData = appDataApiRes.map(item=>{
      return {
        Header: "ConsumedQuantity",
        accessor: "ConsumedQuantity",
      }
    })

    return [
      {
        Header: "ConsumedQuantity",
        accessor: "ConsumedQuantity",
      },
      {
        Header: "Cost",
        accessor: "Cost"
      },
      {
        Header: "Date",
        accessor: "Date",
      },
      {
        Header: "InstanceId",
        accessor: "InstanceId",
      },
      {
        Header: "Location",
        accessor: "Location",
      },
      {
        Header: "MeterCategory",
        accessor: "MeterCategory",
      },
      {
        Header: "ResourceGroup",
        accessor: "ResourceGroup",
      },
      {
        Header: "ResourceLocation",
        accessor: "ResourceLocation",
      },
      {
        Header: "ServiceName",
        accessor: "ServiceName",
      },
      {
        Header: "UnitOfMeasure",
        accessor: "UnitOfMeasure",
      }
    ];
  }, []);

console.log('appDataApiRes::',appDataApiRes);

  return (
    <>
      <div className="container">
        <Table columns={columns} data={appDataApiRes} apiData={apiData} setAppData={setAppData} />
      </div>
    </>
  );
};

export default ResourcesTable;
