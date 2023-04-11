export function CovidReport(props) {
  return (
    <div className='container'>
      <h3 className="country">{props.country}</h3>
      <p className="confirmed">Total Confirmed Cases: <strong>{props.totalConfirmed}</strong></p>
      <p className="last_update">Last Updated Date: <strong>{props.lastUpdated}</strong></p>
    </div>
  );
}