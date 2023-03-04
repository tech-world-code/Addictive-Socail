import Login from "./login"
import "./nav-styles.css"

export default async function nav() {
  return (
    <nav>
      <a href={'/'}>
        <h1><span className="logo-1">Addictive</span> Social</h1>
      </a>
      <ul>
            <Login />
        </ul>
    </nav>
  );
}
