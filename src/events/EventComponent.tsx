import React from "react"

const EventComponent: React.FC = () => {
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }

    // This way declares the type of the argument
    const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
        console.log(`You started dragging at ${event.timeStamp}`)
    }

    // This way declares the interface of the function, and the argument type is inferred
    const onDragEnd: React.DragEventHandler<HTMLDivElement> = (event) => {
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