import './Exhibit.css'

function Exhibit (props) {

    return (
      
      <div className="data-points">
        <h2>{props.header}</h2>
        {props.children}
      </div>
    )

}

export default Exhibit