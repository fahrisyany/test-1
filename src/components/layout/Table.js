import React from "react";
import Loading from "../shared/Loading";
export default function Table(props) {
  const {
    profile: { data, loading, error }
  } = props;

  const sum = data.reduce((a, { trx_amount }) => a + Number(trx_amount), 0);
  const sum_percent = data.map(k => ((k.trx_amount / sum) * 100).toFixed(2));

  return (
    <table className="table">
      {error && error}
      {loading ? (
        <>
          <Loading />
        </>
      ) : (
        <tbody>
          <tr>
            <th>Name</th>
            <th>Profile Photo</th>
            <th className="number_row">#Transaction</th>
            <th className="amount_transaction-col">%Amount Transaction</th>
          </tr>

          {data.map((val, i) => {
            return (
              <tr key={val.username}>
                <td>{val.fullname}</td>
                <td className="user-photo">
                  <img src={val.photo} alt="user-image" className="user-pic" />
                </td>
                <td className="number_row">{val.trx_count}</td>
                <td className="amount_transaction number_row">
                  <div className="progress-bar-container">
                    <div className="progress-bar">
                      <div
                        className="progress-bar-value"
                        style={{
                          width: `${sum_percent[i]}%`
                        }}
                      />
                    </div>
                    <span>{sum_percent[i]}%</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
}
