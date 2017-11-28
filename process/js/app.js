const React = require ('react');
const ReactDOM = require ('react-dom');

const MainInterface = React.createClass({
    render: ()=>{
        return (
            <div>
                <h1>Hello App </h1>
                <h2>Welcome Again</h2>
            </div>
        )
    } // render
}); //maininterface

ReactDOM.render(
    <MainInterface />,
    document.getElementById('appy')
)