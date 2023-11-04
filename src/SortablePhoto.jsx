import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Photo } from './Photo';

export const SortablePhoto = (props) => {
    const sortable = useSortable({ id: props.url });
    const {
        attributes,
        listeners,
        isDragging,
        setNodeRef,
        transform,
        transition,
    } = sortable;

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        border: "2px solid #bababa",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        cursor: "grab",
        cursor: "-moz-grab",
        cursor: "-webkit-grab",
    };

    return (
        <Photo
            ref={setNodeRef}
            style={style}
            {...props}
            {...attributes}
            {...listeners}
        />
    );
};
