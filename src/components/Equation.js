import React, { Component } from 'react';

export const add = (x, y) => x + y;
export const substract = (x, y) => x - y;
export const multiply = (x, y) => x * y;
export const divide = (x, y) => x / y;
export const greaterThan = (x, y) => (x > y ? 'true' : 'false');
export const greaterThanOrEqual = (x, y) => (x >= y ? 'true' : 'false');
export const equal = (x, y) => (x === y ? 'true' : 'false');
export const lessThanOrEqual = (x, y) => (x <= y ? 'true' : 'false');
export const lessThan = (x, y) => (x < y ? 'true' : 'false');

class Equation extends Component {
	constructor(props) {
		super(props);
		this.state = { number1: 0, action: '+', number2: 0, answer: 0 };
		this.handleNumber1Change = this.handleNumber1Change.bind(this);
		this.handleNumber2Change = this.handleNumber2Change.bind(this);
		this.handleActionChange = this.handleActionChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleNumber1Change(e) {
		this.setState({ number1: e.target.value });
	}
	handleNumber2Change(e) {
		this.setState({ number2: e.target.value });
	}
	handleSubmit(e) {
		e.preventDefault();
		const x = Number(this.state.number1);
		const y = Number(this.state.number2);
		if (this.state.number1.length && this.state.number2.length) {
			switch (this.state.action) {
				case '+':
					this.setState({
						answer: add(x, y),
					});
					break;
				case '-':
					this.setState({
						answer: substract(x, y),
					});
					break;
				case '*':
					this.setState({
						answer: multiply(x, y),
					});
					break;
				case '/':
					this.setState({
						answer: divide(x, y),
					});
					break;
				case '>':
					x > y
						? this.setState({
								answer: greaterThan(x, y),
						  })
						: this.setState({
								answer: greaterThan(x, y),
						  });
					break;
				case '>=':
					x >= y
						? this.setState({
								answer: greaterThanOrEqual(x, y),
						  })
						: this.setState({
								answer: greaterThanOrEqual(x, y),
						  });
					break;
				case '=':
					x === y
						? this.setState({
								answer: equal(x, y),
						  })
						: this.setState({
								answer: equal(x, y),
						  });
					break;
				case '<=':
					x <= y
						? this.setState({
								answer: lessThanOrEqual(x, y),
						  })
						: this.setState({
								answer: lessThanOrEqual(x, y),
						  });
					break;
				case '<':
					x < y
						? this.setState({
								answer: lessThan(x, y),
						  })
						: this.setState({
								answer: lessThan(x, y),
						  });
					break;

				default:
					break;
			}
		}
	}
	handleActionChange(e) {
		this.setState({ action: e.target.value });
	}
	render() {
		return (
			<div className="container">
				<form
					className="columns is-vcentered is-centered is-gapless"
					onSubmit={this.handleSubmit}>
					<div className="column is-2 is-one-quarter has-text-centered">
						<input
							className="input is-rounded is-info"
							type="number"
							placeholder="5"
							onChange={this.handleNumber1Change}
						/>
					</div>

					<div className="column is-1 is-one-quarter has-text-centered">
						<div className="actions field">
							<div className="select is-info">
								<select
									value={this.state.value}
									onChange={this.handleActionChange}
									id="action">
									<option value="+">+</option>
									<option value="-">-</option>
									<option value="*">*</option>
									<option value="/">/</option>
									<option value=">">&gt;</option>
									<option value=">=">&gt;=</option>
									<option value="=">=</option>
									<option value="<=">&lt;=</option>
									<option value="<">&lt;</option>
								</select>
							</div>
						</div>
					</div>

					<div className="column is-2 is-one-quarter has-text-centered">
						<input
							className="input is-rounded is-info"
							type="number"
							placeholder="5"
							onChange={this.handleNumber2Change}
						/>
					</div>

					<div className="equal has-text-centered">
						<input
							className="pointer input is-info"
							type="submit"
							value="="></input>
					</div>

					<div className="answer has-text-centered">
						<h1>{this.state.answer}</h1>
					</div>
				</form>
			</div>
		);
	}
}
export default Equation;
