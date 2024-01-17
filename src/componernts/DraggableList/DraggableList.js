import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import CardDisplay from '../CardDisplay/CardDisplay';
import { testData } from './testData';
import './DraggableList.css'; 

const DraggableList = () => {

  // Group data by age 
  const initialColumns = {
    'under-18': testData.filter((item) => item.age <= 18),
    '19-to-25': testData.filter((item) => item.age >= 19 && item.age <= 25),
    '25-to-45': testData.filter((item) => item.age >= 25 && item.age <= 45),
    'over-45': testData.filter((item) => item.age > 45),
  };

  const [columns, setColumns] = useState(initialColumns);

  // Implement Drag-and-Drop
  const onDragEnd = (result) => {
    const { source, destination } = result;

    // If there is no destination, or if the item is dropped in the same position, do nothing
    if (!destination || (source.droppableId === destination.droppableId && source.index === destination.index)) {
      return;
    }

    // Copy the columns state
    const newColumns = { ...columns };

    // Remove the dragged item from the source column
    const sourceColumn = newColumns[source.droppableId];
    const draggedItem = sourceColumn.splice(source.index, 1)[0];

    // Insert the dragged item into the destination column
    const destinationColumn = newColumns[destination.droppableId];
    destinationColumn.splice(destination.index, 0, draggedItem);

    // Update the state
    setColumns(newColumns);
  };

  const onEdit = (editedData) => {
    // Implement the logic to handle editing
    console.log('Edit:', editedData);
  };

  const onDelete = (email) => {
    // Implement the logic to handle deletion
    // Remove the item with the specified email from the columns state
    const newColumns = { ...columns };
    Object.keys(newColumns).forEach((columnId) => {
      newColumns[columnId] = newColumns[columnId].filter((item) => item.email !== email);
    });
    setColumns(newColumns);
  };

 

  // Use Local Storage to Persist State
  useEffect(() => {
    // Save the columns state to local storage
    localStorage.setItem('draggedColumns', JSON.stringify(columns));
  }, [columns]);

  // Retrieve columns state from local storage on component mount
  useEffect(() => {
    const storedColumns = JSON.parse(localStorage.getItem('draggedColumns'));
    if (storedColumns) {
      setColumns(storedColumns);
    }
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="columns-container">
        {Object.keys(columns).map((columnId) => {
          const column = columns[columnId];

          return (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div
                  className="column"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h3>{columnId.toUpperCase()}</h3>
                  {column.map((item, index) => (
                    <Draggable
                      key={item.email}
                      draggableId={item.email}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="draggable-item"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CardDisplay data={item} handleEdit={onEdit} handleDelete={onDelete} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};


export default DraggableList;
