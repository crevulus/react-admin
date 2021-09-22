import { Admin, Resource, ListGuesser } from "react-admin";
import restProvider from "ra-data-simple-rest";

const dataProvider = restProvider("http://localhost:8080");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;
