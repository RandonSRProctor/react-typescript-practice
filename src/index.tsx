// import ReactDOM from 'react-dom';

import { createRoot } from 'react-dom/client'

const App = () => {
    return <div>
        <h1>Hi there!</h1>
    </div>
}

const container = document.getElementById('root')
if (container !== null) {
    const root = createRoot(container)
    root.render(<App />)
}

// ReactDOM.render(
//     <App />,
//     document.querySelector('#root')
// )