const App = () => {
    return (<div>
        <Animal name='Ted' species='Dog'/>
        <Animal name='Pizza' species='Starfish'/>
        <Animal name='Tom' species='Elephant'/>
    </div>)
}

ReactDOM.render(<App/>, document.getElementById('root'));
