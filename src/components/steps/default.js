const Default = (props) => {

  const nextstep = () => {
    props.nextstep();
    props.setcompleted(1)
  }

  return (
    <div className="default-step">
      <div>
        <h1>It's very easy to generate resume for your self</h1>
        <p>
          Just complete required information about you and we'd take care of the
          rest
        </p>
        <br />
        <br/>
        <button onClick={nextstep}>Try it now!</button>
        <p className="light">4 easy steps...</p>
      </div>
    </div>
  );
};

export default Default;
