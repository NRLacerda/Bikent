import React from "react";
import Button from "@mui/material/Button";

export const sxStyle ={
    backgroundColor:'#019267'
}

function LoginScreen() {
	return (
		<div className="teste">
			<h1> Login</h1>
			<label htmlFor="">Email </label>
			<input placeholder="email@example.com" type="text" /><br></br>
			<label htmlFor="">Senha</label>
			<input type="password" /><br></br>
            <Button sx={sxStyle} variant="contained" color="primary">Logar</Button>
		</div>
	);
}
export default LoginScreen