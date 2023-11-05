import { DndContext, DragOverlay, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core'
import { useState } from 'react';
import photos from './photos.json';
import { Grid } from './components/Grid';
import { SortableContext, arrayMove, rectSortingStrategy } from '@dnd-kit/sortable';
import { SortablePhoto } from './components/SortablePhoto';
import { Photo } from './components/Photo';
function App() {
  const [items, setItems] = useState(photos);
  const [activeId, setActiveId] = useState(null);
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  return (
    <main>
      <header className='w-11/12 mx-auto my-5'>
        <h1 className="text-4xl font-bold">Gallery</h1>
      </header>
      <hr className='my-5' />
      <section className='w-11/12 mx-auto'>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
        >
          <SortableContext items={items} strategy={rectSortingStrategy}>
            <Grid columns={5}>
              {items.map((url, index) => (
                <SortablePhoto key={url} url={url} index={index} />
              ))}
            </Grid>
          </SortableContext>

          <DragOverlay adjustScale={true}>
            {activeId ? (
              <Photo url={activeId} index={items.indexOf(activeId)} />
            ) : null}
          </DragOverlay>
        </DndContext>
      </section>
    </main>
  )

  function handleDragStart(event) {
    setActiveId(event.active.id);
  }

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }
}

export default App
