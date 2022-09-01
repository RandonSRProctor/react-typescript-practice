import { createRoot } from 'react-dom/client'
import EventComponent from './events/EventComponent'


const App = () => {
    return (
        <div>
            <EventComponent />
        </div>
    )
}

const container = document.getElementById('root')

if (!container) throw new Error('Failed to find the root element')

const root = createRoot(container)
root.render(<App />)


