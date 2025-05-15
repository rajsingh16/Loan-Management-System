import React from "react";
import {
	Box,
	Typography,
	TextField,
	Button,
	Divider,
	Link,
	IconButton,
	InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ModernButton = styled(Button)(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	color: theme.palette.common.white,
	"&:hover": {
		backgroundColor: theme.palette.primary.dark,
	},
	padding: theme.spacing(1.5, 4),
	borderRadius: theme.shape.borderRadius,
	fontWeight: 600,
}));

const RegisterPage = ({ onLoginSuccess }) => {
	const [showPassword, setShowPassword] = React.useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
	const navigate = useNavigate();

	const handleClickShowPassword = () => setShowPassword((show) => !show);
	const handleClickShowConfirmPassword = () =>
		setShowConfirmPassword((show) => !show);

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleMouseDownConfirmPassword = (event) => {
		event.preventDefault();
	};

	const handleNavigateToLogin = () => {
		navigate("/login");
	};

	const handleRegister = () => {
		onLoginSuccess();
		navigate("/home");
	};

	return (
		<Box
			className="w-screen h-screen flex items-center justify-center py-10"
			sx={{
				backgroundImage: `url('https://plus.unsplash.com/premium_photo-1681400745727-c69f8e47f524?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWJzdHJhY3R8ZW58MHx8MHx8fDA%3D')`,
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Box
				className="rounded-xl bg-white shadow-xl overflow-hidden md:max-w-3xl md:w-full m-4"
				sx={{ maxWidth: 1000, width: "100%" }}
			>
				<div className="flex flex-col md:flex-row">
					<Box
						className="md:w-1/2 bg-gradient-to-br from-[#6DD5ED] to-[#2193B0] flex items-center justify-center p-8"
						sx={{
							backgroundImage: `url('https://static.wixstatic.com/media/47d4e0_8f112b916cb94549b7e9f5f34127e095~mv2.png/v1/fill/w_568,h_390,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/47d4e0_8f112b916cb94549b7e9f5f34127e095~mv2.png')`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></Box>

					<Box className="md:w-1/2 p-8 flex flex-col justify-center items-center gap-6">
						<Typography
							variant="h4"
							color="primary"
							fontWeight="bold"
							mb={3}
						>
							Sign Up
						</Typography>

						<TextField
							label="Username"
							variant="outlined"
							fullWidth
						/>

						<TextField
							label="Email Address"
							variant="outlined"
							fullWidth
							type="email"
						/>

						<TextField
							label="Password"
							variant="outlined"
							fullWidth
							type={showPassword ? "text" : "password"}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={
												handleMouseDownPassword
											}
											edge="end"
										>
											{showPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>

						<TextField
							label="Confirm Password"
							variant="outlined"
							fullWidth
							type={showConfirmPassword ? "text" : "password"}
							InputProps={{
								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											aria-label="toggle confirm password visibility"
											onClick={
												handleClickShowConfirmPassword
											}
											onMouseDown={
												handleMouseDownConfirmPassword
											}
											edge="end"
										>
											{showConfirmPassword ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								),
							}}
						/>

						<ModernButton
							variant="contained"
							fullWidth
							size="large"
							onClick={handleRegister}
						>
							Register
						</ModernButton>

						<Divider
							sx={{
								color: "#000000",
								width: "100%",
							}}
						/>

						<Typography
							variant="body2"
							color="text.secondary"
							align="center"
						>
							Already have an account?{" "}
							<Link
								href="#"
								color="primary"
								onClick={handleNavigateToLogin}
							>
								Log in
							</Link>
						</Typography>
					</Box>
				</div>
			</Box>
		</Box>
	);
};

export default RegisterPage;
