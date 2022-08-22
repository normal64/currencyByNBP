import React from "react";
import RenderTableStyles from "../../../styles/RenderTable.module.scss"

const renderTable = (table) => {
  return (
    <>
      <i>Table</i> {table.table} : {table.effectiveDate}
      {table.no}
      {table.rates
        ? table.rates.map((rate) => {
            return (
              <div className={RenderTableStyles.container} key={rate.cu}>
                <p>{rate.currency} {rate.code} <b>{rate.mid}</b></p>
                
                {rate.bid ? <p>BID: <b>{rate.bid}</b></p>: null}
                {rate.ask ? <p>ASK: <b>{rate.ask}</b></p>: null}
              </div>
            );
          })
        : "loading..."}
    </>
  );
};

export default renderTable;
