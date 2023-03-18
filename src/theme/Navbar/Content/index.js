import React from "react";
import { useThemeConfig } from "@docusaurus/theme-common";
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from "@docusaurus/theme-common/internal";
import NavbarItem from "@theme/NavbarItem";
import NavbarColorModeToggle from "@theme/Navbar/ColorModeToggle";
import SearchBar from "@theme/SearchBar";
import NavbarMobileSidebarToggle from "@theme/Navbar/MobileSidebar/Toggle";
import NavbarLogo from "@theme/Navbar/Logo";
import NavbarSearch from "@theme/Navbar/Search";
import {
  BsGithub,
  BsTwitter,
  BsFacebook,
  BsDiscord,
  BsTelegram,
} from "react-icons/bs";
import styles from "./styles.module.css";
function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items;
}
function NavbarItems({ items }) {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
    </>
  );
}
function NavbarContentLayout({ left, right }) {
  return (
    <div className="navbar__inner">
      <div className="navbar__items">{left}</div>
      <div className="navbar__items navbar__items--right">{right}</div>
    </div>
  );
}

const socialMediaData = [
  {
    title: "twitter",
    icon: BsTwitter,
    href: "https://twitter.com/useTrueCharts",
  },
  {
    title: "discord",
    icon: BsDiscord,
    href: "https://discord.gg/tVsPTHWTtr",
  },
  {
    title: "telegram",
    icon: BsTelegram,
    href: "https://t.me/s/truecharts",
  },
  {
    title: "facebook",
    icon: BsFacebook,
    href: "https://www.facebook.com/truecharts",
  },
  {
    title: "github",
    icon: BsGithub,
    href: "https://github.com/truecharts/apps",
  },
];

export default function NavbarContent() {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === "search");
  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
          {socialMediaData.map((item, index) => (
            <a
              key={index}
              href={item.href}
              
              className="navbar__item navbar__link social__icons__links"
              target="_blank"
              style={{
                padding: 16,
                marginRight: item.title == "github" ? 32 : 0,
                marginLeft: item.title == "twitter" ? 24 : 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
                <button
                  className="clean-btn "
                  type="button"
                >
                  <item.icon size="1.5rem" />
                </button>
            </a>
          ))}
    
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
