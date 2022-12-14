/* Imports */
import React, { useState } from "react";
import Database from "../classes/Database";

/* Components */
import Content from "./Content";
import ListSynon from "./ListSynon";
import Button from "./Button";
import InputSynon from "./InputSynon";
import Dialog from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./css/AddSynonModal.css";

const Synons = () => {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const db = new Database();
const [isOpen, setOpen] = useState(false);
  const [items, setItems] = useState(
    localStorage.getItem("db") ? JSON.parse(localStorage.getItem("db")) : []
  );

  const addSynons = (synon) => {
    if (synon.trim().length === 0)
      return toast("Fill in the text field! ", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });

    if (items.filter((obj) => obj.message.includes(synon)).length !== 0)
      return toast("This information has already been recorded !", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    setItems((prev) => {
      const newData = [
        ...prev,
        {
          message: [synon],
          answer: [],
        },
      ];
      db.setDB(newData);
      db.saveDatabase();
      return newData;
    });
  };

  const removeSynons = (index) => {
    setItems((prev) => {
      const newData = prev.filter((item, i) => index !== i);
      db.setDB(newData);
      db.saveDatabase();
      return newData;
    });
  };

  return (
    <Content>
      <ToastContainer />
      <InputSynon change={setInput} text={"Type here..."} value={input} />

      <Button
        color="lime"
        text={"Add"}
        onClick={() => {
          addSynons(input);
          setInput("");
        }}
      />

      <Button
        color="red"
        text={"Press and hold to erase everything"}
        onClick={() =>
          toast("🦄 Wow so easy!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }
      />

      <ListSynon
        items={items}
        remove={removeSynons}
        keys={["message", "message"]}
      />
      <Dialog
        id={"add-synon"}
        style={{
          overlay: {
            background: "rgba(0,0,0,0.4)",
          },
          content: {
            border: "1px solid white",
            width: "auto",
            height: "min-content",
            padding: "1rem",
            borderRadius: "1rem",
            margin: "auto",
            background: "#303034",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            textAlign: "center",
          },
        }}
        isOpen={isOpen}
        ariaHideApp={false}
      >
        Add a message and reply to her
        <div className="dialog_border" id="dialog_content">
          <p className="text">Message</p>
          <InputSynon
            change={setMessage}
            text={"Type here..."}
            value={message}
          />
          <p className="text">Answer</p>
          <InputSynon change={setAnswer} text={"Type here..."} value={answer} />

          <Button color="lime" text={"Save"} onClick={() => {}} />
                    <Button color="lime" text={"Cancel"} onClick={() => setOpen(false)} />
        </div>
      </Dialog>
    </Content>
  );
};

export default Synons;
