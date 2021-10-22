import React from "react";
import "./group-and-level.styles.css";

const GroupAndLevel = ({
  isAcademicGrp,
  isFinancialLvl,
  isFinancialGrp,
  isKeyStageLvl,
  handleRadio,
}) => (
  <div className="group-and-level">
    <div className="group">
      <p className="group__title"> Groups</p>
      <p className="group-1">
        <input
          id="grp-1"
          type="radio"
          name="group"
          value="isAcademicGrp"
          checked={isAcademicGrp}
          onChange={(e) => {
            handleRadio(e);
          }}
        />
        <label for="grp-1"> Academic </label>
      </p>
      <p className="group-2">
        <input
          id="grp-2"
          type="radio"
          name="group"
          value="isFinancialGrp"
          checked={isFinancialGrp}
          onChange={(e) => {
            handleRadio(e);
          }}
        />
        <label for="grp-2"> Financial Literacy </label>
      </p>
    </div>
    <div className="level">
      <p className="level__title"> Levels</p>
      <p className="level-1">
        <input
          id="lvl-1"
          type="radio"
          name="level"
          value="isKeyStageLvl"
          checked={isKeyStageLvl}
          onChange={(e) => {
            handleRadio(e);
          }}
        />
        <label for="lvl-1"> Key Stage </label>
      </p>
      <p className="level-2">
        <input
          id="lvl-2"
          type="radio"
          name="level"
          value="isFinancialLvl"
          checked={isFinancialLvl}
          onChange={(e) => {
            handleRadio(e);
          }}
        />
        <label for="lvl-2"> Financial Literacy </label>
      </p>
    </div>
  </div>
);

export default GroupAndLevel;
