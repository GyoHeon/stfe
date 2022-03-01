import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function App() {
  const onDragend = () => {};

  return (
    <DragDropContext onDragEnd={onDragend}>
      <div>
        <Droppable droppableId="one">
          {() => (
            <ul>
              <Draggable draggableId="first" index={0}>
                {() => <li>Two</li>}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {() => <li>One</li>}
              </Draggable>
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
