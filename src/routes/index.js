import Loadable from "../components/loadable/Index";

const getView = name => Loadable({
  loader: () => import(`../pages/${name}`)
});
export const routes = [{
    path: "/home",
    com: getView("home"),
    role: ["all"],
    title: "主页",
    icon: "desktop"
  },
  {
    path: "/icon",
    com: getView("icon"),
    title: "图标",
    role: ["user"],
    icon: "tags"
  },
  {
    path: "/typography",
    com: getView("typography"),
    role: ["shop"],
    title: "段落",
    icon: "hdd",
    children: [{
        path: `/typography/grid`,
        com: getView(`/typography/grid`),
        title: "grid",
        icon: "file"
      },
      {
        path: `/typography/layout`,
        com: getView(`/typography/layout`),
        title: "layout",
        icon: "cloud"
      },
      {
        path: `/typography/:id`,
        flag: true,
        com: getView(`/typography/other`),
        title: "other",
        icon: "branches"
      }
    ]
  },
  {
    path: "/nav",
    com: getView("nav"),
    role: ["all"],
    title: "导航",
    icon: "link"
  }
];