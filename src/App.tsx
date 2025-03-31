import ModelInterface from './components/ModelInterface'
function App() {

  // const [models, setModels] = useState<string[]>([]);

  // get models from the server (needs to be configured)

  return (
    <>
      <h1>Welcome to Nimbus, let's test your small NLP Models!</h1>
      <ModelInterface />
    </>
  )
}

export default App
