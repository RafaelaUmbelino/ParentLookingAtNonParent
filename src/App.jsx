import React, { useState } from "react";
import TaskIlustration from "./assets/taskilustration.png";
import "./App.css";

function ParentNonParent() {
  const [olgaChildrenValue, setOlgaChildrenValue] = useState("");

  let sashaObj = { name: "Sasha", children: true };
  let olgaObj = { name: "Olga", children: olgaChildrenValue };
  let andrewObj = { name: "Andrew", children: false };

  let resultText =
    sashaObj.children === true &&
    olgaChildrenValue === "has Children" &&
    andrewObj.children === false
      ? "Yes! Olga, who has children, is looking at Andrew who does not have children."
      : sashaObj.children === true &&
        olgaChildrenValue === "does not have children" &&
        andrewObj.children === false
      ? "Yes! Sasha, who has children, is looking at Olga who does not have children."
      : sashaObj.children === true &&
        olgaChildrenValue === "we don't know" &&
        andrewObj.children === false
      ? "Still Yes! You can only either have children or not."
      : "";

  const handleOlgaChildrenChange = (event) => {
    setOlgaChildrenValue(event.target.value);
  };

  return (
    <div>
      <h1>Is a parent looking at a non-parent?</h1>

      <div className="imageContainer">
        <img
          id="CartoonImage"
          src={TaskIlustration}
          alt="Cartoon Faces Looking at each other"
        />
      </div>

      <div className="Instructions">
        <h3>
          Try the different scenarios by toggling the options and get my answer:
        </h3>
      </div>

      <div className="TextContainer">
        <label htmlFor="olgaChildrenSelect">
          Sasha, <strong>who has children</strong>, is looking at Olga who
          <select
            className="SelectBox"
            id="olgaChildrenSelect"
            value={olgaChildrenValue}
            onChange={handleOlgaChildrenChange}
          >
            <option style={{ display: "none" }} value="" disabled>
              Choose an Option
            </option>
            <option value="has Children">has children</option>
            <option value="does not have children">
              does not have children
            </option>
            <option value="we don't know">we don't know has children</option>
          </select>
        </label>
        <br />
        <div className="AndrewText">
          who is looking at Andrew who <strong>does not have children</strong>.
        </div>
      </div>

      {resultText && (
        <div id="result">
          {" "}
          <strong>In this case the answer is:</strong> <br /> {resultText}
        </div>
      )}
    </div>
  );
}

export default ParentNonParent;
