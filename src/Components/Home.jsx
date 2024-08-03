import React, { useState } from "react";
import Table from "./Table";
import { useEffect } from "react";
import axios from 'axios';

const Home = () => {

    let [data ,setData] = useState([])
    let [loading , setLoading] = useState(false);
  const getdata = () => {
    axios.get('http://localhost:3000')
      .then(response => {
        setLoading(false);
        setData(response.data.data);
        setLoading(true);
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    getdata()
   let intervalId =  setInterval(()=>{
        getdata()
    },6000);
    return  () => clearInterval(intervalId);
  }, [data]);

  

  return (
    <>
      <div className="overflow-x-auto text-white">
        <table className="table table-xs text-white">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Code</th>
              <th>Rate</th>
              <th>Volume</th>
              <th>Cap</th>
              <th>Delta/hour</th>
              <th>Delta/day</th>
              <th>Delta/week</th>
              <th>Delta/month</th>
              <th>Delta/quarter</th>
              <th>Delta/year</th>
            </tr>
          </thead>
          {loading == true ? data.map((obj,index)=>(
            <Table obj = {obj} key = {index}></Table>
          )): "PLease wait data is loading"}
        </table>
      </div>
    </>
  );
};

export default Home;
