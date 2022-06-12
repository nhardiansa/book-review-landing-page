import {Helmet} from 'react-helmet';

function App() {
  return (
    <>

      <Helmet>
        <link rel="shortcut icon" href="./assets/images/RB.svg" type="image/x-icon" />
        <title>ReviewBook</title>
      </Helmet>

      <h1 className="text-3xl font-bold">Hello world</h1>
    </>
  );
}

export default App;
