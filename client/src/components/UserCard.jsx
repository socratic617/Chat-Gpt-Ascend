function UserCard(props) {
    const userpic = {
        width: "45px", // Adjust width as needed
        height: "45px", // Adjust height as needed
        borderRadius: "50%", // To make the image round
        boxShadow: "0 6px 4px rgba(0, 0, 0, 0.1)" // Add a subtle shadow
      };
    
      const cardStyle = {
    
       
    
        padding: "10px 11px 10px 16px",
        borderRadius: "0px 0px 10px 0px",
        boxShadow: "2px 3px 5px black",
        textAlign: "center",
      
       
        display: "flex",
        width: "100%"
    };

    
      const headingStyle = {
        
        fontSize: "px",
        margin: "5%, 10%, 5%, 5%",
        padding: "5%"
        
      };
    
  
    return (
      <div style={cardStyle}>
        <img  style={userpic} src={props.imgUser}></img>
        <h1 style={headingStyle}>Welcome, {props.name}! </h1>
      </div>
    );
  }
  
  export default UserCard;