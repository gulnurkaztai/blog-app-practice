import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://www.cheatsheet.com/wp-content/uploads/2020/12/mando_grogu-1.jpeg"
        alt=""
      />
    </div>
  );
}