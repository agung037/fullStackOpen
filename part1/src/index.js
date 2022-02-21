import ReactDOM from 'react-dom';
import App from './App'

let counter = 1

const refresh = () => {
    ReactDOM.render(<App counter={counter}/>, document.getElementById('root'))    
}

setInterval(() => {
    refresh()
    counter += 1
}, 100)


// ReactDOM.render(
//     <App counter={counter} />, document.getElementById('root')
// )