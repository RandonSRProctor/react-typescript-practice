const EventComponent: React.FC = () => {
    const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(event)
    }

    return <div>
        <input onChange={onChange} />
    </div>
}

export default EventComponent