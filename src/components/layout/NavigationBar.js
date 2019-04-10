import React, { Component } from "react";

export default function NavigationBar() {
  return (
    <div className="navigation-bar">
      <div className="container">
        <div className="container-left">
          <span>NETZME - Funtastic Payment</span>
        </div>

        <div className="container-right">
          <button>Home</button>
          <button>Account</button>

          <button>Logout</button>
        </div>
      </div>
    </div>
  );
}
