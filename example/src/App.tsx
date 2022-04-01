import { generateEmail, generateTextEmail } from 'react-email-scorelab';
import Layout from './Layout';

function App() {
  const HTMLEmail = generateEmail(<Layout />);
  const textEmail = generateTextEmail(<Layout />);

  console.log(HTMLEmail);
  console.log('\n');
  console.log(textEmail);

  return <Layout />;
}

export default App;
