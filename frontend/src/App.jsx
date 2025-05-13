import { useState } from "react";
import Form from "./components/Form";
import Users from "./components/Users";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => setRefresh(!refresh);

  return (
    <div>
      <h1>MongoDB Data Manager</h1>
      <Form onFormSubmit={handleRefresh} />
      <Users refresh={refresh} />
    </div>
  );
};

export default App;