let names = ['John', 'Jane', 'Mike', 'Mark'];

let elts = [<h2>Congragulations</h2>, <h3>React is awesome</h3>];

class HelloMessage extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello World!!!</h1>

				<HelloNames difNames={names} />
				<div>{this.props.difTags}</div>
			</div>
		);
	}
}

class NoteList extends React.Component {
	render() {
		return (
			<div>
				<ol>
					{React.Children.map(this.props.children, function (child) {
						return <li>{child}</li>;
					})}
				</ol>
			</div>
		);
	}
}

class HelloNames extends React.Component {

	}
	render() {
		return (
			<div>
				<NoteList>
					{this.props.difNames.map((name) => (
						<p>Hello {name}</p>
					))}
				</NoteList>
			</div>
		);
	}
}

function App() {
	return (
		<div>
			<h2>Hello from Function</h2>
			<HelloMessage difTags={elts} />
		</div>
	);
}

ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('example'),
);
