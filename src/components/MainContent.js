import { useRef } from "react";
import img_1 from "../images/bg-pattern-desktop.svg";
import img_2 from "../images/illustration-woman-online-desktop.svg";

export default function MainContent() {
  const p1 = useRef(null);
  const p2 = useRef(null);
  const p3 = useRef(null);
  const p4 = useRef(null);
  const p5 = useRef(null);

  const elementsArray = [p1, p2, p3, p4, p5];

  function hideText(element) {
    for (let i = 0; i < elementsArray.length; i++) {
      if (!elementsArray[i].current.classList.contains("not-active")) {
        elementsArray[i].current.classList.add("not-active");
      } else if (elementsArray[i] === element) {
        element.current.classList.toggle("not-active");
      }
    }
  }

  return (
    <>
      <div className="container">
        <div className="imgBox">
          <img src={img_1} alt="img_1" className="img_1" />
          <img src={img_2} alt="img_2" className="img_2" />
        </div>

        <div className="textBox">
          <h1>FAQ</h1>
          <div className="questions">
            <div>
              <button
                onClick={() => {
                  hideText(p1);
                }}
              >
                How many team members can I invite?
              </button>
              <p ref={p1} className="p1 not-active">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus obcaecati, quae, corporis.
              </p>
            </div>

            <hr />

            <div>
              <button
                onClick={() => {
                  hideText(p2);
                }}
              >
                How many team members can I invite?
              </button>
              <p ref={p2} className="p2 not-active">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus obcaecati, quae, corporis.
              </p>
            </div>

            <hr />

            <div>
              <button
                onClick={() => {
                  hideText(p3);
                }}
              >
                How many team members can I invite?
              </button>
              <p ref={p3} className="p3 not-active">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus obcaecati, quae, corporis.
              </p>
            </div>

            <hr />

            <div>
              <button
                onClick={() => {
                  hideText(p4);
                }}
              >
                How many team members can I invite?
              </button>
              <p ref={p4} className="p4 not-active">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus obcaecati, quae, corporis.
              </p>
            </div>

            <hr />

            <div>
              <button
                onClick={() => {
                  hideText(p5);
                }}
              >
                How many team members can I invite?
              </button>
              <p ref={p5} className="p5 not-active">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Temporibus obcaecati, quae, corporis.
              </p>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </>
  );

  // Error
  // the value of p1 is null
  // because it can't get document.querySelector(".p1")
  // we have to use React.useRef(null) instead
}
