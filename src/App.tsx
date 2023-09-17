import _ from 'lodash';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [num1, setNum1] = useState(0);
  const [object, setObject] = useState({} as unknown);

  const handleClick = async () => {
    _.flow(
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
        const resultResponse = _.merge(response, response);

        setNum1(num1 + 1);
        return resultResponse;
      },
      async (value: unknown) => {
        const response = await new Promise((resolve, reject) => {
          resolve(value);
          reject(new Error('error'));
        });
        setNum1(num1 + 1);
        console.log(response);
      },
    )();
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
