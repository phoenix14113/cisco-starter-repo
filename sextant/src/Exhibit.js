import './Exhibit.css'

function Exhibit (props) {

    return (
      
      <card class="data-points">
        <h2>{props.header}</h2>
        {props.children}
      </card>
    )

}

export default Exhibit