import Dashboard from './Dashboard';
import "./App.css"
import PageLayout from './components/PageLayout';
import CsvReader from './functionality/ReadCsv';

function App(): JSX.Element {


    return (
        <div className="flex-1 overflow-hidden w-full flex flex-col">
            <PageLayout  >
                <CsvReader/>
            </PageLayout>
        </div>
    );
}

export default App;
