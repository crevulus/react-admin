import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import { UserList } from "./components/UserList";
import { UserEdit } from "./components/UserEdit";
import { UserCreate } from "./components/UserCreate";

const dataProvider = restProvider("http://localhost:8080");

function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
}

export default App;

// https://blog.logrocket.com/create-react-admin-panel/
