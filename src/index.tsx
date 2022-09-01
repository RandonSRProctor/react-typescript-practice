import { createRoot } from 'react-dom/client'
import UserSearch from './state/UserSearch'

const App = () => {
    return (
        <div>
            <UserSearch />
        </div>
    )
}

const container = document.getElementById('root')

if (!container) throw new Error('Failed to find the root element')

const root = createRoot(container)
root.render(<App />)


