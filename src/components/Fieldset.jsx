function Fieldset() {
  return (
    <fieldset>
      <legend>Query Type</legend>

      <div>
        <input type="radio" name="query-type" />
        <label htmlFor="">General Enquiry</label>
      </div>

      <div>
        <input type="radio" name="query-type" />
        <label htmlFor="">Support Request</label>
      </div>
    </fieldset>
  );
}

export default Fieldset;
