import React, { useState, useEffect } from "react";

import { Home } from "styled-icons/fa-solid/Home";
import { Search } from "styled-icons/material/Search";
import { KeyboardArrowUp as Arrow } from "styled-icons/material/KeyboardArrowUp";
import { LightBulb as Light } from "styled-icons/octicons/LightBulb";
import { Grid } from "styled-icons/boxicons-solid/Grid";
import { ThList as List } from "styled-icons/typicons/ThList";

import * as S from "./styled";

const MenuBar = () => {
	const [theme, setTheme] = useState(null);
	const [display, setDisplay] = useState(null);

	const isDarkMode = theme === "dark";
	const isListMode = display === "list";

	useEffect(() => {
		setTheme(window.__theme);
		setDisplay(window.__display);

		window.__onThemeChange = () => setTheme(window.__theme);
		window.__onDisplayChange = () => setDisplay(window.__display);
	}, []);

	return (
		<S.MenuBarWrapper>
			<S.MenuBarGroup>
				<S.MenuBarLink
					to="/"
					cover
					transition="left"
					bg="#16202c"
					duration={0.6}
					title="Voltar para a Home"
				>
					<S.MenuBarItem>
						<Home />
					</S.MenuBarItem>
				</S.MenuBarLink>
				<S.MenuBarLink
					to="/search/"
					cover
					transition="left"
					bg="#16202c"
					duration={0.6}
					title="Pesquisar"
				>
					<S.MenuBarItem>
						<Search />
					</S.MenuBarItem>
				</S.MenuBarLink>
			</S.MenuBarGroup>

			<S.MenuBarGroup>
				<S.MenuBarItem
					title="Mudar o tema"
					onClick={() => {
						window.__setPreferredTheme(
							isDarkMode ? "light" : "dark"
						);
					}}
					className={theme}
				>
					<Light />
				</S.MenuBarItem>
				<S.MenuBarItem
					title="Mudar visualização"
					onClick={() => {
						window.__setPreferredDisplay(
							isListMode ? "grid" : "list"
						);
					}}
					className="display"
				>
					{isListMode ? <Grid /> : <List />}
				</S.MenuBarItem>
				<S.MenuBarItem
					title="Ir ao o Topo"
					onClick={() => {
						window.scroll({ top: 0, behavior: "smooth" });
					}}
				>
					<Arrow />
				</S.MenuBarItem>
			</S.MenuBarGroup>
		</S.MenuBarWrapper>
	);
};

export default MenuBar;
