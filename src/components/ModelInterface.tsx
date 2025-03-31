import { useState } from "react";
import axios from "axios";

const API_URL = "https://4c4094snw5.execute-api.us-east-2.amazonaws.com/prod/richSatSmallTest/predict";

const ModelInterface = () => {

  const [query, setQuery] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const handleQueryChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios.post(API_URL, 
              { "text": query }, 
              { headers: { "Content-Type": "application/json" } })
              .then((res) => {
                setResponse(JSON.stringify(res.data));
              })
              .catch((err) => {
                console.log(err);
              });
  }
  
    return (
        <div>
            <p>
                This is the model interface.
            </p>
            <form onSubmit={handleSubmit}>
              <textarea placeholder="Enter your query here" value={query} onChange={handleQueryChange} />
              <button type="submit">Submit</button>
            </form>
            <p style={{ color: "green" }}>{response}</p>
        </div>
    )
}

export default ModelInterface;