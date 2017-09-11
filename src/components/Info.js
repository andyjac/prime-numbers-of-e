import React from 'react';

const Info = (props) => {
  return (
    <section id='info'>
      <h2>Hello!</h2>
      <p>
        This tool lets you to calculate the <strong>Xth</strong> prime number that has <strong>Y</strong> digits in the
        expansion of <a href='https://en.wikipedia.org/wiki/E_(mathematical_constant)'><strong><em>Euler's Number</em></strong></a>.
        Enter two values below and hit <strong>Calculate</strong>, <strong><em>OR</em></strong> upload a formatted .csv file
        where each line contains two comma separated numerical values for the <strong>occurrence</strong> and <strong>number of digits</strong> respectively.
      </p>
    </section>
  );
};

export default Info;
