

const ToyInput = ({ label, error, ...rest }) => {
  return (
    <>
      <p>
        <label>{label}</label>
        <input {...rest} />
      </p>
      {error ? <p>{error}</p> : ""}
    </>
  );
};

export default ToyInput;

// type="text" placeholder="이메일을 입력해주세요" name="Email" onChange={onChangeInput}
//