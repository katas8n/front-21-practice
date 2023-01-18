import './App.css';
import { Student } from './components/Student/Student';

export const App = ({ group }) => {
    // JSX => js ~ html
    return (
        <>
            <h1>Hello world</h1>
            <h2>Fuck</h2>
            <div>
                {Array.isArray(group) &&
                    group.map((name, i) => {
                        return <Student name={name} id={i} key={i} />;
                    })}
            </div>
        </>
    );
};
