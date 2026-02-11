export function getUsername() {
	return localStorage.getItem("username");
}
export function setUsername(username: string) {
	localStorage.setItem("username", username);
}
