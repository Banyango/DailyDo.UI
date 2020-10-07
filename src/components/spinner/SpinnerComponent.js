import React, { Component } from "react";

import "./spinner.css";

export function SpinnerComponent() {
  return (
      <div className="spinner" role="status">
          <span className="sr-only">Loading</span>
      </div>
  );
}
