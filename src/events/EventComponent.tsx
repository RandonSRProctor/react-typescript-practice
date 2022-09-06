import React from "react"

const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(`You started dragging at ${event.timeStamp}`)
    }

    const onDragEnd = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(`You stopped dragging at ${event.timeStamp}`)
    }

    return (
        <div>
            <input onChange={onChange} />
            <div draggable onDragStart={onDragStart} onDragEnd={onDragEnd}>Drag Me!</div>
        </div>
    )
}

export default EventComponent