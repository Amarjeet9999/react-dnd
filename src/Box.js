import React, { useState } from "react";
import styled from "styled-components";

export default function Box(props) {
  const { title } = props;

  return (
    <div style={divStyle}>
      <p>{title}</p>
    </div>
  );
}

const divStyle = {
  width: "100%",
  background: "papayawhip",
  minHeight: "100px",
  border: "2px solid"
};
