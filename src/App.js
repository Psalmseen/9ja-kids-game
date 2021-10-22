import "./App.css";
import React, { useEffect, useState } from "react";
import Header from "./components/header/Header.component";
import Homepage from "./pages/homepage/homepage.component";
import SearchBar from "./components/search-bar/search-bar.component";
import GroupAndLevel from "./components/group-and-level/group-and-level.component";
function App() {
  const url =
    "https://corsanywhere.herokuapp.com/partners.9ijakids.com/index.php?partnerId=555776&accessToken=l0lawtvv-94bv-oi4d-u808-5ubz&action=catalogfilter";
  //   ----------- STATE ----------- //
  const [allGames, setAllGames] = useState([]);
  const [gameToDisplay, setGameToDisplay] = useState([]);
  const [topic, setTopic] = useState("");
  const [isKeyStageLvl, setIsKeyStageLvl] = useState(false);
  const [isFinancialLvl, setIsFinancialLvl] = useState(false);
  const [isFinancialGrp, setIsFinancialGrp] = useState(false);
  const [isAcademicGrp, setIsAcademicGrp] = useState(false);
  const [choosenLevel, setChoosenLevel] = useState("");
  const [choosenGroup, setChoosenGroup] = useState("");

  // -------------- FUNCTIONS ---------- //
  const fetchData = async (url) => {
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setAllGames(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleRadio = ({ target: { value, checked } }) => {
    switch (value) {
      case "isKeyStageLvl":
        setChoosenLevel(checked ? "Key Stage" : "");
        setIsKeyStageLvl(checked);
        break;
      case "isFinancialLvl":
        setChoosenLevel(checked ? "Financial Literacy" : "");
        setIsFinancialLvl(checked);
        break;
      case "isFinancialGrp":
        setChoosenGroup(checked ? "Financial Literacy" : "");
        setIsFinancialGrp(checked);
        break;
      case "isAcademicGrp":
        setChoosenGroup(checked ? "Academic" : "");
        setIsAcademicGrp(checked);
        break;
      default:
        return;
    }
  };

  const changeTopic = ({ target: { value } }) => {
    const newTopic = value;
    setTopic(newTopic);

    const filteredArray = allGames.filter((el) =>
      el.Topic.toLowerCase().includes(newTopic.toLowerCase())
    );
    setGameToDisplay(filteredArray);

    //  GameDescription: "Before and After Yr 2 (prefix and suffix)"
    //  GameImage: "https://partners.9ijakids.com/index.php/thumbnail?game=Before and After"
    //  GameTitle: "Before and After"
    //  Group: "Academic"
    //  Level: "Key Stage 1"
    //  Subject: "English"
    //  Topic: "Word Works and Spelling"
  };

  // ---------- EFFECTS ---------//
  useEffect(() => {
    fetchData(url);
  }, []);

  useEffect(() => setGameToDisplay(allGames), [allGames]);
  useEffect(() => {
    const selectGroupAndLevel = () => {
      const selectedArray = allGames.filter(
        ({ Group, Level }) =>
          Group.includes(choosenGroup) && Level.includes(choosenLevel)
      );
      return setGameToDisplay(selectedArray);
    };
    console.log({ choosenGroup }, { choosenLevel });
    selectGroupAndLevel();
  }, [allGames, choosenLevel, choosenGroup]);

  return (
    <div className="App">
      <Header />
      <div className="sort">
        <SearchBar topic={topic} changeTopic={changeTopic} />
        <GroupAndLevel
          handleRadio={handleRadio}
          isAcademicGrp={isAcademicGrp}
          isFinancialGrp={isFinancialGrp}
          isKeyStageLvl={isKeyStageLvl}
          isFinancialLvl={isFinancialLvl}
        />
      </div>
      <Homepage games={gameToDisplay} />
    </div>
  );
}

export default App;
