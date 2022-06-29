import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Box from "./Box";
import styled from "styled-components";

const initialValue = [
  {
    index: 0,
    id: "billSum"
  },
  {
    index: 1,
    id: "semInvoice"
  },
  {
    index: 2,
    id: "studentRotation"
  },
  {
    index: 3,
    id: "payeeCount"
  },
  {
    index: 4,
    id: "lastNineSem"
  },
  {
    index: 5,
    id: "statusWise"
  }
];

export default function ReactDND(props) {
  const [pos, setPos] = useState(initialValue);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(source, destination);
  };

  const divStyle = {
    display: "grid",
    gridGap: "20px",
    gridTemplateColumns: "repeat(2, 1fr)"
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={`component`}>
        {(provided, snapshot) => (
          <div
            style={divStyle}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {pos?.map((elem, index) => (
              <Draggable
                key={`${elem.id}`}
                draggableId={`${elem.id}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <Box
                    title={elem?.id}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}
