'use client'
import React, { useState } from "react";

const Node = ({ id, left, top, onPointerChange, onAddPointer, onActionChange, pointers }) => {
  const contentHeight = pointers.length * 70 + 40;

  return (
    <div
      style={{
        position: "absolute",
        top: top,
        left: left,
        width: "250px",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "10px",
      }}
    >
      <div>
        <h4>{`Node ${id}`}</h4>
        <button onClick={() => onAddPointer(id)}>Add Pointer</button>
      </div>
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          height: `${contentHeight}px`,
          overflowY: "auto",
        }}
      >
        {pointers.map((pointer, index) => (
          <div key={index} style={{ marginBottom: "15px" }}>
            <div>
              <span>Pointer {index + 1}: </span>
              <textarea
                placeholder={`Enter pointer for Node ${id}`}
                value={pointer.text}
                onChange={(e) => onPointerChange(id, index, e.target.value)}
                style={{
                  width: "100%",
                  padding: "5px",
                  fontSize: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
              />
            </div>
            <div style={{ marginTop: "5px" }}>
              <span>Call API: </span>
              <input
                type="number"
                placeholder="Enter a number"
                value={pointer.apiNumber || ""}
                onChange={(e) => onActionChange(id, index, "API", e.target.value)}
                style={{
                  padding: "5px",
                  fontSize: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "60px",
                  marginBottom: "5px",
                }}
              />
            </div>
            <div style={{ marginTop: "5px" }}>
              <span>Pass to Next Node: </span>
              <input
                type="number"
                placeholder="Enter next node"
                value={pointer.nextNode || ""}
                onChange={(e) => onActionChange(id, index, "NextNode", e.target.value)}
                style={{
                  padding: "5px",
                  fontSize: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  width: "60px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AdsPage = () => {
  const [nodes, setNodes] = useState([
    { id: "1", left: 50, top: 50, pointers: [] },
    { id: "2", left: 350, top: 50, pointers: [] },
    { id: "3", left: 650, top: 50, pointers: [] },
    { id: "4", left: 50, top: 400, pointers: [] },
    { id: "5", left: 350, top: 400, pointers: [] },
  ]);

  const [selectedRetargeting, setSelectedRetargeting] = useState(null);
  const [inputs, setInputs] = useState({
    dropAfterNode: "",
    timing: "",
    templateId: "",
  });

  const handlePointerChange = (node, pointerIndex, value) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === node
          ? {
              ...n,
              pointers: n.pointers.map((pointer, index) =>
                index === pointerIndex ? { ...pointer, text: value } : pointer
              ),
            }
          : n
      )
    );
  };

  const handleActionChange = (node, pointerIndex, actionType, value) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === node
          ? {
              ...n,
              pointers: n.pointers.map((pointer, index) =>
                index === pointerIndex
                  ? {
                      ...pointer,
                      [actionType === "API" ? "apiNumber" : "nextNode"]: value,
                    }
                  : pointer
              ),
            }
          : n
      )
    );
  };

  const handleAddPointer = (node) => {
    setNodes((prev) =>
      prev.map((n) =>
        n.id === node
          ? { ...n, pointers: [...n.pointers, { text: "", apiNumber: "", nextNode: "" }] }
          : n
      )
    );
  };

  const addNewNode = () => {
    const newNodeId = (nodes.length + 1).toString();
    const newNodeLeft = 50 + nodes.length * 300;
    const newNodeTop = 50 + (nodes.length % 2) * 400;
    setNodes([
      ...nodes,
      { id: newNodeId, left: newNodeLeft, top: newNodeTop, pointers: [] },
    ]);
  };

  const handleRetargetingClick = (retargeting) => {
    setSelectedRetargeting(retargeting);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert("Submitted! Retargeting settings will be processed.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>YOUR CHATBOT</h1>

      <div style={{ position: "relative", height: "900px", marginTop: "20px" }}>
        {nodes.map(({ id, left, top, pointers }) => (
          <Node
            key={id}
            id={id}
            left={left}
            top={top}
            pointers={pointers}
            onPointerChange={handlePointerChange}
            onAddPointer={handleAddPointer}
            onActionChange={handleActionChange}
          />
        ))}
      </div>

      {/* Retargeting Buttons and Inputs */}
      <div
        style={{
          position: "absolute",
          right: "20px",
          top: "50px",
          backgroundColor: "#fff",
          padding: "20px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          width: "200px",
        }}
      >
        <h3>Retargeting</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <button
            onClick={() => handleRetargetingClick("Retargeting 1")}
            style={{
              padding: "10px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Retargeting 1
          </button>
          <button
            onClick={() => handleRetargetingClick("Retargeting 2")}
            style={{
              padding: "10px",
              backgroundColor: "#2196F3",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Retargeting 2
          </button>
          <button
            onClick={() => handleRetargetingClick("Retargeting 3")}
            style={{
              padding: "10px",
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              borderRadius: "5px",
            }}
          >
            Retargeting 3
          </button>
        </div>

        {selectedRetargeting && (
          <div style={{ marginTop: "20px" }}>
            <h4>{selectedRetargeting}</h4>
            <div>
              <label>
                Drop after node:
                <input
                  type="number"
                  name="dropAfterNode"
                  value={inputs.dropAfterNode}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "5px",
                    fontSize: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "5px",
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Timing:
                <input
                  type="number"
                  name="timing"
                  value={inputs.timing}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "5px",
                    fontSize: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "5px",
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Template ID:
                <input
                  type="text"
                  name="templateId"
                  value={inputs.templateId}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "5px",
                    fontSize: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    marginBottom: "5px",
                  }}
                />
              </label>
            </div>
          </div>
        )}
      </div>

      {/* Submit Button at the Right Bottom */}
      <div
        style={{
          position: "absolute",
          right: "20px",
          bottom: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <button
          onClick={handleSubmit}
          style={{
            padding: "10px 20px",
            backgroundColor: "#008CBA",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AdsPage;
