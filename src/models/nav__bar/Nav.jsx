import React from "react";
import './Nav.css'

const Nav = () => {
  return (
    <nav className="nav__bar">
      <div className="item">
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md ">
          Profil
        </a>
      </div>
      <div className="item">
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md ">
          Masaeges
        </a>
      </div >
      <div className="item">
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md ">
          News
        </a>
      </div>
      <div className="item">
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md ">
          Music
        </a>
      </div>
      <br/>
      <div className="item">
        <a href="https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md ">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Nav;
