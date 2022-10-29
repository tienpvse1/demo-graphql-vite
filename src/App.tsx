import { useEffect } from "react";
import "./App.css";
import {
  useCreateCustomerMutation,
  useDeleteCustomer1Mutation,
  useUpdateCustomerMutation,
} from "./generated";

function App() {
  const [create, { data }] = useCreateCustomerMutation();
  const [update, { data: updateResult }] = useUpdateCustomerMutation();
  const [deleteFunction, { data: deleteResult }] = useDeleteCustomer1Mutation();
  useEffect(() => {
    console.log(updateResult);
  }, [data, updateResult]);

  const createCustomer = async () => {};

  const updateCustomer = async () => {
    update({
      variables: {
        object: {
          fullname: "tienpvse updated",
        },
        where: {
          customer_id: {
            _eq: 9,
          },
        },
      },
    });
  };

  const deleteCustomer = async () => {
    deleteFunction({
      variables: {
        where: {
          customer_id: {
            _eq: 9,
          },
        },
      },
    });
  };

  return (
    <div className="App">
      <button onClick={createCustomer}>Create</button>
      <button onClick={updateCustomer}>Update</button>
      <button onClick={deleteCustomer}>Delete</button>
    </div>
  );
}

export default App;
