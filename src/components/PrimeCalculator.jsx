import React, { Component } from 'react';
import ordinal from '../../lib/ordinal';
import range from '../../lib/range';
import { xthYDigitPrimeInE } from '../../lib/prime_numbers_of_e';

class PrimeCalculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      occurrence: 0,
      digits: 0,
      data: [],
      decimalPlaces: 0
    };

    this.handleClickCalculate = this.handleClickCalculate.bind(this);
    this.handleOccurrenceChange = this.handleOccurrenceChange.bind(this);
    this.handleDigitsChange = this.handleDigitsChange.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
    this.handleFileResults = this.handleFileResults.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  shouldComponentUpdate(nextState, nextProps) {
    return nextProps.data !== this.state.data || nextProps.decimalPlaces !== this.state.decimalPlaces;
  }

  handleClickCalculate(e) {
    e.preventDefault();

    let occurrence = this.state.occurrence;
    let digits = this.state.digits;

    this.setState({ data: [{ occurrence, digits }] });
  }

  handleOccurrenceChange(e) {
    let value = parseInt(e.target.value, 10);

    if (!isNaN(value)) {
      this.setState({ occurrence: value });
    }
  }

  handleDigitsChange(e) {
    let value = parseInt(e.target.value, 10);

    if (!isNaN(value)) {
      this.setState({ digits: value });
    }
  }

  handleFileUpload(e) {
    e.preventDefault();

    let files = e.target.files;

    if (files && files.length) {
      let file = files[0];
      let reader = new FileReader();

      reader.onload = this.handleFileResults;
      reader.readAsText(file);
    }
  }

  handleFileResults(e) {
    let file = e.target.result;
    let lines = file.split('\n');

    let data = lines.map(line => {
      let values = line.replace(/\s+/g, '').split(',');
      let occurrence = parseInt(values[0], 10);
      let digits = parseInt(values[1], 10);

      return { occurrence, digits };
    });

    this.setState({ data });
  }

  renderResults() {
    let data = this.state.data;

    if (!data || !data.length) {
      return null;
    }

    let items = data.map(d => {
      let occurrence = d.occurrence;
      let digits = d.digits;
      let decimalPlaces = this.state.decimalPlaces;
      let value = xthYDigitPrimeInE(occurrence, digits, decimalPlaces);

      if (value === -1) {
        return (
          <li className='result warning'>
            The <strong>{ordinal(occurrence)}, </strong><strong>{digits}</strong> digit prime number was not found (try expanding <strong>e</strong>)
          </li>
        );
      }

      return (
        <li className='result'>
          The <strong>{ordinal(occurrence)}, </strong><strong>{digits}</strong> digit prime number of <strong>e</strong> is: <strong>{value}</strong>
        </li>
      );
    });

    return (
      <section>
        <h3>Results:</h3>
        <ul className='results'>{items}</ul>
      </section>
    );
  }

  renderDecimalSelect() {
    let options = range(1, 500).map(i => {
      return (
        <option key={i} value={i}>{i}</option>
      );
    });

    return (
      <select onChange={ this.handleSelectChange }>
        <option value='' disabled={true} selected={true}>Decimal Places of e</option>
        { options }
      </select>
    );
  }

  handleSelectChange(e) {
    let decimalPlaces = parseInt(e.target.value, 10);

    this.setState({ decimalPlaces });
  }

  render() {
    return (
      <section id='prime-calculator'>
        { this.renderDecimalSelect() }
        <br/>
        <input placeholder='Occurrence' onChange={ this.handleOccurrenceChange } type='text'/>
        <input placeholder='Number of Digits' onChange={ this.handleDigitsChange } type='text'/>
        <br/>
        <button onClick={ this.handleClickCalculate }>Calculate</button>
        <p><strong><em>--OR--</em></strong></p>
        <input id='file' onChange={ this.handleFileUpload } type='file'/>
        { this.renderResults() }
      </section>
    );
  }
}

export default PrimeCalculator;
