import React, { useState } from "react";
import './index1.css'

const Index = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiple, setEnableMultiple] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const datas = [
    {
      id: 1,
      question: "what are accordion components?",
      answer:
        "accordion components are user interface elements .an accordion is a type of menu that displays a list of headers stacked on top of one another.",
    },
    {
      id: 2,
      question: "what are they used for?",
      answer:
        "Accordions display information one section at a time and hide information that is not relevant to the user. They simplify the page, lowering users' cognitive load and allowing them to concentrate on the information immediately at hand.",
    },
    {
      id: 3,
      question: "Accordion as a musical Instrument?",
      answer:
        "An accordion is a musical instrument in the shape of a fairly large box which you hold in your hands. You play the accordion by pressing keys or buttons on either side while moving the two sides together and apart.",
    },
    {
      id: 4,
      question: "what are the main parts of the accordion?",
      answer:
        "All accordions and concertinas have three main components: the reeds, bellows, and buttons or keys. Pushing or pulling the bellows slower or faster makes the sound softer or louder, respectively. The accordion has free reeds on both the treble and bass sides",
    },
  ];

  const handleSingleSelection = (currentId) => {
    setSelected(currentId === selected ? null : currentId);
  };

  const handleMultipleSelection = (currentId) => {
   let copyMultiple=[...multiple]
   const findIndexOfCurrentId=copyMultiple.indexOf(currentId)

   if(findIndexOfCurrentId === -1){
      copyMultiple.push(currentId)
   }
   else{
    copyMultiple.splice(findIndexOfCurrentId,1)
   }
   setMultiple(copyMultiple)
  };
  console.log(enableMultiple,multiple);
  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiple(!enableMultiple)}>
        Enable Multiple Selection
      </button>
      <div className="Accordion">
        {datas && datas.length > 0 ? (
          datas.map((dataItem) => (
            <div className="panel" key={dataItem.id}>
              <div className="question">
                <h3>{dataItem.question}</h3>
                <span
                  className="plus"
                  onClick={() =>
                    enableMultiple
                      ? handleMultipleSelection(dataItem.id)
                      : handleSingleSelection(dataItem.id)
                  }
                > +
                </span>
              </div>
              {enableMultiple ? multiple.indexOf(dataItem.id) !== -1 && <div className="answer">{dataItem.answer}</div> : selected === dataItem.id ? (
                <div className="answer">{dataItem.answer}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
};

export default Index;
