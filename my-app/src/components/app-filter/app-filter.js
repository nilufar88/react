import './app-filter.css';

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button 
                className="btn btn-light"
                type="button">
                   All employees
            </button>
            <button 
                className="btn outline-light"
                type="button">
                   Promoted
            </button>
            <button 
                className="btn outline-light"
                type="button">
                   With the salary more than $1000            
            </button>
        </div>
    );
}

export default AppFilter;