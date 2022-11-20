import Speakers from "./Speakers";
import Header from "./Header";
import Layout from "./Layout";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider initialLoggedInUser="Onur">
      <Layout startingTheme="light">
        <Header />
        <Speakers />
      </Layout>
    </AuthProvider>
  );
}

export default App;
