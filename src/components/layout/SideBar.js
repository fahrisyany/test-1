import React, { Component } from "react";
import Loading from "../shared/Loading";

export default function Sidebar(props) {
  const {
    profile: { data, loading, error }
  } = props;

  const sortActiveTransaction = data.sort((a, b) => {
    return b.trx_count - a.trx_count;
  });
  let resultSortActiveTransaction = sortActiveTransaction.map((val, i) => (
    <li key={val.username}>
      <span>{val.fullname}</span>
    </li>
  ));
  const sortActiveTransactionAmount = data.sort(function(a, b) {
    return b.trx_amount - a.trx_amount;
  });
  const resultSortActiveTransactionAmount = sortActiveTransactionAmount.map(
    (val, i) => (
      <li key={val.username}>
        <span>{val.fullname}</span>
      </li>
    )
  );

  return (
    <div className="sidebar">
      <h2>Most active user</h2>
      {loading ? (
        <Loading />
      ) : (
        <>
          {data.length > 0 && <h3>By transaction</h3>}
          {error ? (
            "error fetching data"
          ) : (
            <ol>{resultSortActiveTransaction}</ol>
          )}
          {data.length > 0 && <h3>By amount of transaction</h3>}

          {error ? (
            "error fetching data"
          ) : (
            <ol>{resultSortActiveTransactionAmount}</ol>
          )}
        </>
      )}
    </div>
  );
}
