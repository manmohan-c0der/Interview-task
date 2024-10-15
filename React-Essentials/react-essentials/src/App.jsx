import "./App.css";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <center>
            <h2 className="Heading">Core Concepts</h2>
          </center>

          <ul className="card">
            <CoreConcept
              title="Components"
              description="The core UI building block - compose the user interface by combining multiple components."
              image="src\assets\Components.jpeg"
            />
            <CoreConcept
              title="JSX"
              description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
              image="src\assets\JSX.jpeg"
            />
            <CoreConcept
              title="Props"
              description="Make components configurable (and therefore reusable) by passing input data to them. "
              image="src\assets\props.png"
            />
            <CoreConcept
              title="State"
              description="React-managed data which,when changed, causes the component to re-render & the UI to update."
              image="src\assets\state.png"
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Example</h2>
          <menu className="btnContainer">
            <TabButton
              isSeleted={selectedTopic === "components"}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSeleted={selectedTopic === "jsx"}
              onSelect={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSeleted={selectedTopic === "props"}
              onSelect={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSeleted={selectedTopic === "state"}
              onSelect={() => handleSelect("state")}
            >
              State
            </TabButton>
          </menu>
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>

              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
