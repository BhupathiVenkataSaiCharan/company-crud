import React, { useState } from "react";
// import "./App.css";
import * as XLSX from "xlsx";


function ExcelData() {
  const [items, setItems] = useState([]);

  const readExcel = (file) => {
    const promise = new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(file);

      fileReader.onload = (e) => {
        const bufferArray = e.target.result;

        const wb = XLSX.read(bufferArray, { type: "buffer" });

        const wsname = wb.SheetNames[0];

        const ws = wb.Sheets[wsname];

        const data = XLSX.utils.sheet_to_json(ws);

        resolve(data);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });

    promise.then((d) => {
      setItems(d);
    });
  };

  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          readExcel(file);
        }}
      />

      <table class="table container">
        <thead>
          <tr>
            <th scope="col">Excel File Data</th>
            {/* <th scope="col">InputA</th> */}
            {/* <th scope="col">InputB</th> */}
          </tr>
        </thead>
        <tbody>
          {items.map((d) => (
            <tr key={d.Id}>
                <th>{d.Id}</th>
              <th>{d.FirstName}</th>
              <td>{d.LastName}</td>
              <td>{d.Gender}</td>
              <td>{d.Country}</td>
              <td>{d.Age}</td>
              <td>{d.Date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExcelData;