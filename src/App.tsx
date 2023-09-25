import { useState } from 'react';
import axios from 'axios';
import flow from 'lodash/flow';

function App() {
  const [object, setObject] = useState({} as unknown);

  const handleClick = async () => {
    const result = flow(
      async () => {
        const response = await axios
          .get('https://jsonplaceholder.typicode.com/users')
          .then((res) => res)
          .catch((error) => {
            console.log(error);
            return null;
          });
        setObject(response);
        return response;
      },
      async (value: unknown) => {
        const response = await new Promise((resolve, reject) => {
          resolve(value);
          reject(new Error('error'));
        });

        return response;
      },
    )().then((response) => {
      return response;
    });
    console.log(result);
    return result;
  };

  console.log(object);

  return (
    <>
      <div>
        <button onClick={handleClick}>클릭</button>
      </div>
    </>
  );
}

export default App;
